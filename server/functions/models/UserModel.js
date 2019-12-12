const db = require("../db");
const util = require("../utils/response");
const message = require("../utils/messages.json");

var UserModel = function() {};

UserModel.prototype.getUserByEmail = function(email, callback) {
  db.query("SELECT * FROM users WHERE email=?", [email], function(err, result, fields) {
    if (err) {
      return callback(err);
    }

    if (!result.length) {
      return callback(message.common_messages_record_not_available);
    }
    callback(null, result[0]);
  });
};

UserModel.prototype.getUserById = function(id, callback) {
  db.query("SELECT * FROM users WHERE user_id=?", [id], function(err, result, fields) {
    if (err) {
      return callback(err);
    }

    if (!result.length) {
      return callback(message.common_messages_record_not_available);
    }
    callback(null, result[0]);
  });
};

UserModel.prototype.createUser = function(data, callback) {
  db.query(
    "INSERT INTO users (first_name, last_name, email, phone_number, gender, time_zone_id, start_time, end_time,  killbill_account_id, password_hash, created_at, last_updated, active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      data.first_name,
      data.last_name,
      data.email,
      data.phone_number,
      data.gender,
      data.time_zone_id,
      data.start_time,
      data.end_time,
      data.killbill_account_id,
      data.password_hash,
      data.created_at,
      data.last_updated,
      data.active
    ],
    function(err, result, fields) {
      if (err) {
        return callback(err);
      }
      db.query("SELECT * FROM users WHERE email=?", [data.email], function(err, result, fields) {
        if (err) {
          return callback(err);
        }
        db.query("INSERT INTO account (user_id) VALUES (?)", [result[0].user_id], function(err, result_account, fields) {
          if (err) {
            return callback(err);
          }
          return callback(null, result);
        });
      });

      // callback(null, result);
    }
  );
};

UserModel.prototype.updateUser = function(data, updateID, callback) {
  let query = "UPDATE users SET ";
  for (key in data) {
    query = query + key + "='" + data[key] + "', ";
  }
  query = query + "last_updated = '" + Date().toString() + "'";
  query = query + " WHERE " + updateID.key + "='" + updateID.id + "'";
  db.query(query, function(err, result, fields) {
    if (err) {
      return callback(err);
    }
    callback(null, result, fields);
  });
};

UserModel.prototype.deleteUserById = function(data, callback) {
  // user_id

  db.query("DELET FROM users WHERE user_id = ?", [data.user_id], function(err, success, fields) {
    if (err) {
      return callback(err);
    }
    callback(null, result, fields);
  });
};

UserModel.prototype.checkEmail = async function(email) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM users WHERE email=?`, [email], function(err, result, fields) {
      if (err) {
        return reject(err);
      }
      if (result.length > 0) {
        return resolve(true);
      }
      resolve(false);
    });
  });
};

UserModel.prototype.checkMobileNumber = async function(number) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM users WHERE phone_number = ?`, [number], function(err, result, fields) {
      if (err) {
        return reject(err);
      }
      if (result.length > 0) {
        return resolve(true);
      }
      resolve(false);
    });
  });
};

module.exports = new UserModel();
