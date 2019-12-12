const db = require("../db");

const UserSettingModel = function() {};

UserSettingModel.prototype.updateSetting = function(data, updateID, callback) {
  let lastkey = Object.keys(data)[Object.keys(data).length - 1];
  let query = "UPDATE users SET ";
  for (key in data) {
    if (lastkey == key) {
      query = `${query} ${key}='${data[key]}'`;
    } else {
      query = `${query} ${key}='${data[key]}', `;
    }
  }
  query = `${query} WHERE user_id='${updateID.id}'`;
  db.query(query, function(err, result, fields) {
    if (err) {
      return callback(err);
    }
    callback(null, result, fields);
  });
};

UserSettingModel.prototype.getUserProfileById = function (id, callback) {
  db.query('SELECT * FROM users WHERE user_id=?', [id], function (err, result, fields) {
    if (err) { return callback(err); }

    if (!result.length) {
      return callback(message.common_messages_record_not_available);
    }
    callback(null, result[0]);
  });
}

module.exports = new UserSettingModel();
