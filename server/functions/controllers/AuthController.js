var userModel = require("../models/UserModel");
var verificationModel = require("../models/VerificationModel");
var util = require("../utils/response");
var message = require("../utils/messages.json");
var emailTemplate = require("../utils/emailTemplate");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var config = require("../config");
var dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
var killbillAccount = require("../utils/killbill/resources/Account");
var uuidv1 = require("uuid/v1");
var twilio = require("twilio");
const client = twilio(config.twilioSid, config.twilioToken);
dayjs.extend(utc);;

const DB_DATE_FORMAT = 'YYYY-MM-DD HH:m:ss'

module.exports.controller = function (server) {

  server.post('/auth/login', login);
  server.post('/auth/register', register);
  server.get('/auth/forget_password/:email/:para', forgetPassword);
  server.get('/auth/logout', logout);
  server.post('/auth/sendVerificationEmail', sendVerificationEmail);
  server.post('/auth/verifyCode', verifyCode);
  server.post('/auth/sendVerificationSms', sendVerificationSms);
  server.get('/auth/getUserInfo', getUserInfo);

  function login(req, res, next) {
    const valid = util.validate(req.body, [
      'email',
      'password'
    ]);
    if (!valid.valid) {
      return res.send(util.error(valid.message));
    }

    userModel.getUserByEmail(req.body.email, function (err, user) {
      if (err) return res.send(util.error(err));
      if (!user) return res.send(util.error(message.email_not_exist));

      let passwordIsValid = bcrypt.compareSync(req.body.password, user.password_hash)
      if (!passwordIsValid) return res.send(util.error(message.password_incorrect));
      let token = jwt.sign({ id: user.user_id }, config.secret, { expiresIn: 86400 })
      res.send(util.success({ auth: true, token: token, user: user }, message.register_success));
    });
  }

  function getUserInfo(req, res, next) {
    let token = req.headers["authorization"]
    let decoded = req.user;
    if (req.user == null || typeof (req.user) == "undefined") decoded = jwt.decode(req.headers["authorization"], config.secret);
    userModel.getUserById(decoded.id, function (err, user) {
      if (err) return res.send(util.error(err));
      if (!user) return res.send(util.error(message.common_messages_record_not_available));
      res.send(util.success({ auth: true, token: token, user: user }, message.common_messages_record_available));
    });
  }

  function register(req, res, next) {
    const valid = util.validate(req.body, [
      'first_name',
      'last_name',
      'email',
      'password',
      'phone_number'
    ]);
    if (!valid.valid) {
      return res.send(util.error(valid.message));
    }

    const user = req.body;
    killbillAccount.create({
      'accountId': uuidv1(),
      'name': user.first_name + ' ' + user.last_name,
      'firstNameLength': user.first_name.length,
      'externalKey': user.email,
      'email': user.email,
      'billCycleDayLocal': 0,
      'currency': 'USD',
      'phone': user.phone_number,
      'isMigrated': true,
      'accountBalance': 0,
      'accountCBA': 0
    }, 'admin', 'CreateAccount', 'Create new account', (err, data, attrib) => {
      if (err) {
        return res.send(util.error(err.message));
      }

      userModel.createUser(
        {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          phone_number: req.body.phone_number,
          gender: req.body.gender ? req.body.gender : "male",
          time_zone_id: req.body.time_zone_id ? req.body.time_zone_id : 0,
          start_time: req.body.start_time ? req.body.start_time : 0,
          end_time: req.body.end_time ? req.body.end_time : 23,
          killbill_account_id: data.accountId,
          password_hash: bcrypt.hashSync(req.body.password, 8),
          created_at: dayjs.utc().format(DB_DATE_FORMAT),
          last_updated: dayjs.utc().format(DB_DATE_FORMAT),
          active: true
        },
        function(err, result) {
          if (err) return res.send(util.error(err));

          userModel.getUserByEmail(req.body.email, function(err, user) {
            if (err) return res.send(util.error(err));

            let token = jwt.sign({ id: user.user_id }, config.secret, { expiresIn: 86400 });
            res.send(util.success({ auth: true, token: token, user: user }, message.register_success));
          });
        }
      );
    });
  }

  function forgetPassword(req, res, next) {
    return next();
  }

  function sendVerificationEmail(req, res, next) {
    const valid = util.validate(req.body, [
      'first_name',
      'last_name',
      'email'
    ]);
    if (!valid.valid) {
      return res.send(util.error(valid.message));
    }

    var code = Math.floor(Math.random() * 90000) + 10000;
    code = '12345';

    verificationModel.addVerification({
      type: 'email',
      address: req.body.email,
      code: code
    }, function (err, result) {
      if (err) return res.send(util.error(err));
      var send_email = emailTemplate.registrationEmail(req.body.first_name[0].toUpperCase() + req.body.first_name.slice(1) + ' ' + req.body.last_name[0].toUpperCase() + req.body.last_name.slice(1), req.body.email, code);
      res.send(util.success({ sent: true, id: result.insertId }, message.email_sent_success));
    });
  }

  function sendVerificationSms(req, res, next) {
    const valid = util.validate(req.body, [
      'first_name',
      'last_name',
      'number'
    ]);
    if (!valid.valid) {
      return res.send(util.error(valid.message));
    }

    var code = Math.floor(Math.random() * 90000) + 10000;
    code = '12345';

    verificationModel.addVerification({
      type: 'number',
      address: req.body.number,
      code: code
    }, function (err, result) {
      if (err) return res.send(util.error(err));
      console.log("request body number", req.body.number)
      // var number = '+' + req.body.number
      // if (number[1] == '+') number = number.slice(1, number.length)
      client.messages
        .create({ body: code, from: '+16469699099', to: '+' + req.body.number })
        .then(message => console.log(message.sid))
        .catch(
          // Log the rejection reason
          (reason) => {
            console.log('Handle rejected promise (' + reason + ') here.');
          });
      res.send(util.success({ sent: true, id: result.insertId }, message.email_sent_success));
    });
  }

  function verifyCode(req, res, next) {
    const valid = util.validate(req.body, [
      'id',
      'code'
    ]);
    if (!valid.valid) {
      return res.send(util.error(valid.message));
    }

    verificationModel.addVerification({
      type: 'email',
      address: req.body.email,
      code: code
    }, function (err, result) {
      if (err) return res.send(util.error(err));
      var send_email = emailTemplate.registrationEmail(req.body.first_name[0].toUpperCase() + req.body.first_name.slice(1) + ' ' + req.body.last_name[0].toUpperCase() + req.body.last_name.slice(1), req.body.email, code);
      res.send(util.success({ sent: true, id: result.insertId }, message.email_sent_success));
    });
  };

  function sendVerificationSms(req, res, next) {
    const valid = util.validate(req.body, [
      'first_name',
      'last_name',
      'number'
    ]);
    if (!valid.valid) {
      return res.send(util.error(valid.message));
    }

    var code = Math.floor(Math.random() * 90000) + 10000;
    code = '12345';

    verificationModel.addVerification({
      type: 'number',
      address: req.body.number,
      code: code
    }, function (err, result) {
      if (err) return res.send(util.error(err));
      client.messages
        .create({ body: code, from: '+16469699099', to: '+' + req.body.number })
        .then(message => console.log(message.sid))
        .catch(
          // Log the rejection reason
          (reason) => {
            console.log('Handle rejected promise (' + reason + ') here.');
          });
      res.send(util.success({ sent: true, id: result.insertId }, message.email_sent_success));
    });
  };

  function verifyCode(req, res, next) {
    const valid = util.validate(req.body, [
      'id',
      'code'
    ]);
    if (!valid.valid) {
      return res.send(util.error(valid.message));
    }

    verificationModel.getCodeById(req.body.id, function (err, verification) {
      if (err) return res.send(util.error(err));

      if (req.body.code == verification.code)
        return res.send(util.success({ verify: true }, message.email_verification_success));

      res.send(util.error(message.email_verification_fail));
    });
  };

  function logout(req, res, next) {
    return next();
  };
}
