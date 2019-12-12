var callModel = require('../models/CallModel');
var util = require('../utils/response');
var message = require('../utils/messages.json');
var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);;

const DB_DATE_FORMAT = 'YYYY-MM-DD HH:m:ss';

module.exports.controller = function (server) {

    server.get('/calls', getAllCalls);
    server.post('/calls', createCall);
    server.get('/calls/:call_sid', getCallById);
    server.put('/calls/:call_sid', updateCall);

    function getAllCalls(req, res, next) {
      callModel.getAllCalls(function (err, result) {
        if (err) return res.send(util.error(err));
        if (!result) return res.send(util.error(message.common_messages_error));

        res.send(util.success(result, message.common_messages_record_available));
      });
    }

    function createCall(req, res, next) {
      const valid = util.validate(req.body, [
        'call_sid',
        'organization_id',
        'direction',
        'user_id'
      ]);
      if (!valid.valid) {
        return res.send(util.error(valid.message));
      }

      callModel.createCall({
        call_sid: req.body.call_sid,
        organization_id: req.body.organization_id,
        direction: req.body.direction,
        user_id: req.body.user_id
      }, function (err, result) {
        if (err) return res.send(util.error(err));

        res.send(util.success(result, message.common_messages_create_success));
      });
    }

    function getCallById(req, res, next) {
      const call_sid = req.params.call_sid;
      if (!call_sid) {
        return res.send(util.error(message.common_messages_error));
      }

      callModel.getCallById(call_sid, function(err, result){
        if (err) return res.send(util.error(err));
        if (!result) return res.send(util.error(message.common_messages_error));

        res.send(util.success(result, message.common_messages_record_available));
      });
    };

    function updateCall(req, res, next) {
      const valid = util.validate(req.body, [
        'organization_id',
        'direction',
        'user_id'
      ]);
      if (!valid.valid) {
        return res.send(util.error(valid.message));
      }

      callModel.updateCall({
        organization_id: req.body.organization_id,
        direction: req.body.direction,
        user_id: req.body.user_id,
        call_sid: req.params.call_sid
      }, function (err, result) {
        if (err) return res.send(util.error(err));

        res.send(util.success(result, message.common_messages_update_success));
      });
    };
}
