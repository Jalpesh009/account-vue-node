var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var UserSettingModel = require("../models/UsersettingModel");
var config = require("../config");
var message = require("../utils/messages.json");
var util = require("../utils/response");
var dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);
const DB_DATE_FORMAT = "YYYY-MM-DD HH:m:ss";

module.exports.controller = function (server) {
  server.get("/update-setting", getProfile);
  server.put("/update-setting", updateProfile);

  function updateProfile(req, res, next) {
    let token = req.headers["authorization"]
    let decoded = req.user;
    if (req.user == null || typeof (req.user) == "undefined") decoded = jwt.decode(req.headers["authorization"], config.secret);
    let updateObj = {};
    for (key in req.body) {
      if (key === "password") {
        Object.assign(updateObj, {
          password_hash: bcrypt.hashSync(req.body[key], 8)
        });
      } else {
        Object.assign(updateObj, { [key]: req.body[key] });
      }
    }
    Object.assign(updateObj, {
      last_updated: dayjs.utc().format(DB_DATE_FORMAT)
    });
    UserSettingModel.updateSetting(updateObj, decoded, function (e, result) {
      if (e) return res.send(util.error(e));
      UserSettingModel.getUserProfileById(decoded.id, function (err, user) {
        if (err) return res.send(util.error(err));
        if (!user) return res.send(util.error(message.common_messages_record_not_available));
        res.send(util.success({ auth: true, token: token, user: user }, message.common_messages_record_available));
      });
    });
  }

  function getProfile(req, res, next) {
    let token = req.headers["authorization"]
    let decoded = req.user;
    if (req.user == null || typeof (req.user) == "undefined") decoded = jwt.decode(req.headers["authorization"], config.secret);
    UserSettingModel.getUserProfileById(decoded.id, function (err, user) {
      if (err) return res.send(util.error(err));
      if (!user) return res.send(util.error(message.common_messages_record_not_available));
      res.send(util.success({ auth: true, token: token, user: user }, message.common_messages_record_available));
    });
  }
};
