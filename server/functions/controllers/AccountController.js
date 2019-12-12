var userModel = require('../models/UserModel');
var accountModel = require('../models/AccountModel');
var verificationModel = require('../models/VerificationModel');
var util = require('../utils/response');
var message = require('../utils/messages.json');
var emailTemplate = require('../utils/emailTemplate');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc');
var killbillAccount = require('../utils/killbill/resources/Account');
var uuidv1 = require('uuid/v1');
var twilio = require('twilio');
const client = twilio(config.twilioSid, config.twilioToken);
dayjs.extend(utc);;

const DB_DATE_FORMAT = 'YYYY-MM-DD HH:m:ss'

module.exports.controller = function (server) {


	server.get('/account', account);
	server.post('/account/uploadUserPhoto', uploadUserPhoto);
	server.post('/account/verifyIdentification', verifyIdentification);

	function account(req, res, next) { // account page, get method
		let token = req.headers["authorization"]
		let decoded = req.user;
		if (req.user == null || typeof (req.user) == "undefined") decoded = jwt.decode(req.headers["authorization"], config.secret);
		accountModel.getUserById(decoded.id, function (err, user) {
			if (err) return res.send(util.error(err));
			if (!user) return res.send(util.error(message.common_messages_record_not_available));
			res.send(util.success({ auth: true, token: token, user: user }, message.common_messages_record_available));
		});
		return next();
	};


	function uploadUserPhoto(req, res, next) { // uploading user's photo
		let token = req.headers["authorization"]
		let decoded = req.user;
		if (req.user == null || typeof (req.user) == "undefined") decoded = jwt.decode(req.headers["authorization"], config.secret);
		let photo_id = req.body.photo_id;
		userModel.updateUser({ photo_id: photo_id }, { key: "user_id", id: decoded.id }, function (err, result, field) {
			if (err) return res.send(util.error(err));

			userModel.getUserById(decoded.id, function (err, user) {
				if (err) return res.send(util.error(err));
				if (!user) return res.send(util.error(message.common_messages_record_not_available));
				res.send(util.success({ auth: true, token: token, user: user }, message.common_messages_record_available));
			});
		})

	};

	function verifyIdentification(req, res, next) { // uploading user's photo
		let token = req.headers["authorization"]
		let decoded = req.user;
		if (req.user == null || typeof (req.user) == "undefined") decoded = jwt.decode(req.headers["authorization"], config.secret);
		data = {
			user_id: decoded.id,
			country_code: req.body.country_code,
			timezone_code: req.body.timezone_code,
			idcard_type: req.body.idcard_type,
			idcardfront_url: req.body.idcardfront_url,
			idcardback_url: req.body.idcardback_url,
			iddoc_url: req.body.iddoc_url,
			firstname: req.body.firstname,
			middlename: req.body.middlename,
			lastname: req.body.lastname,
			nationary: req.body.nationary,
			gender: req.body.gender,
			issuesed_date: req.body.issuesed_date,
			birthcity: req.body.birthcity,
			birthstate: req.body.birthstate,
			zipecode: req.body.zipecode,
			birthcountry: req.body.birthcountry,
			serialnumber: req.body.serialnumber,
			issuesdate: req.body.issuesed_date,
			idcardcountry: req.body.idcardcountry,
			addressdoc_url: req.body.addressdoc_url,
			status: 1
		}

		accountModel.createAccount(data, function (err, result) {
			if (err) return res.send(util.error(err));
			res.send(util.success({ auth: true, token: token, state: "pending" }, message.account_verify_submittion_success));
		});
	};

};
