const db = require('../db');
const util = require('../utils/response');
const message = require('../utils/messages.json');

var NumberModel = function () {};

NumberModel.prototype.getAllNumbers = function (callback) {
  db.query('SELECT * FROM numbers', function (err, result, fields) {
    if (err) { return callback(err); }

    callback(null, result);
  });
}

NumberModel.prototype.createNumber = function (data, callback) {
  db.query('INSERT INTO numbers (number_sid, organization_package_id, greeting, active) VALUES (?, ?, ?, ?)', [
    data.number_sid,
    data.organization_package_id,
    data.greeting,
    data.active
  ], function (err, result, fields) {
    if (err) { return callback(err); }

    callback(null, result);
  });
}

NumberModel.prototype.getNumberById = function (number_sid, callback) {
  db.query('SELECT * FROM numbers where number_sid = ?', [number_sid], function (err, result, fields) {
    if (err) { return callback(err); }

    if (!result.length) {
      return callback(message.common_messages_record_not_available);
    }
    callback(null, result[0]);
  });
}

NumberModel.prototype.updateNumber = function (data, callback) {
  db.query('UPDATE numbers SET organization_package_id = ?, greeting = ?, active = ? WHERE number_sid = ?', [
    data.organization_package_id,
    data.greeting,
    data.active,
    data.number_sid
  ], function (err, result, fields) {
    if (err) { return callback(err); }

    callback(null, result);
  });
}

NumberModel.prototype.deleteNumber = function (number_sid, callback) {
  db.query('DELETE FROM numbers WHERE number_sid = ?', [number_sid], function (err, result, fields) {
    if (err) { return callback(err); }

    callback(null, result);
  });
}

module.exports = new NumberModel();
