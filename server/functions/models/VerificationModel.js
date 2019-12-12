const db = require("../db");
const UserModel = require("./UserModel");
const util = require("../utils/response");
const message = require("../utils/messages.json");

var VerificationModel = function() {};

VerificationModel.prototype.addVerification = async function(data, callback) {
  try {
    let res = false;
    let errorMsg = "";
    if (data.type == "email") {
      res = await UserModel.checkEmail(data.address);
      errorMsg = "email already exists";
    } else {
      res = await UserModel.checkMobileNumber(data.address);
      errorMsg = "mobile number already exists";
    }    
    if (!res) {
      db.query("INSERT INTO verifications (type, address, code) VALUES (?, ?, ?)", [data.type, data.address, data.code], function(err, result, fields) {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      });
    } else {
      return callback(errorMsg);
    }
  } catch (e) {
    console.error(e); // 30
    return callback(e);
  }
};

VerificationModel.prototype.getCodeById = function(id, callback) {
  db.query("SELECT * FROM verifications WHERE id=?", [id], function(err, result, fields) {
    if (err) {
      return callback(err);
    }
    if (!result.length) {
      return callback(message.common_messages_record_not_available);
    }
    callback(null, result[0]);
  });
};

module.exports = new VerificationModel();
