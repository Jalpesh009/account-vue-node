const db = require('../db');
const util = require('../utils/response');
const message = require('../utils/messages.json');

var CallModel = function () {};

CallModel.prototype.getAllCalls = function (callback) {
  db.query('SELECT * FROM calls', function (err, result, fields) {
    if (err) { return callback(err); }

    callback(null, result);
  });
}

CallModel.prototype.createCall = function (data, callback) {
  db.query('INSERT INTO calls (call_sid, organization_id, direction, user_id) VALUES (?, ?, ?, ?)', [
    data.call_sid,
    data.organization_id,
    data.direction,
    data.user_id
  ], function (err, result, fields) {
    if (err) { return callback(err); }

    callback(null, result);
  });
}

CallModel.prototype.getCallById = function (call_sid, callback) {
  db.query('SELECT * FROM calls where call_sid = ?', [call_sid], function (err, result, fields) {
    if (err) { return callback(err); }

    if (!result.length) {
      return callback(message.common_messages_record_not_available);
    }
    callback(null, result[0]);
  });
}

CallModel.prototype.updateCall = function (data, callback) {
  db.query('UPDATE calls SET organization_id = ?, direction = ?, user_id = ? WHERE call_sid = ?', [
    data.organization_id,
    data.direction,
    data.user_id,
    data.call_sid
  ], function (err, result, fields) {
    if (err) { return callback(err); }

    callback(null, result);
  });
}

module.exports = new CallModel();
