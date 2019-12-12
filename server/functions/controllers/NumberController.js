var numberModel = require('../models/NumberModel');
var util = require('../utils/response');
var message = require('../utils/messages.json');
var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);;

const DB_DATE_FORMAT = 'YYYY-MM-DD HH:m:ss';

module.exports.controller = function (server) {

    server.get('/numbers', getAllNumbers);
    server.post('/numbers', createNumber);
    server.get('/numbers/:number_sid', getNumberById);
    server.put('/numbers/:number_sid', updateNumber);
    server.del('/numbers/:number_sid', deleteNumber);

    function getAllNumbers(req, res, next) {
      numberModel.getAllNumbers(function (err, result) {
        if (err) return res.send(util.error(err));
        if (!result) return res.send(util.error(message.common_messages_error));

        res.send(util.success(result, message.common_messages_record_available));
      });
    }

    function createNumber(req, res, next) {
      const valid = util.validate(req.body, [
        'number_sid',
        'organization_package_id',
        'greeting'
      ]);
      if (!valid.valid) {
        return res.send(util.error(valid.message));
      }

      numberModel.createNumber({
        number_sid: req.body.number_sid,
        organization_package_id: req.body.organization_package_id,
        greeting: req.body.greeting,
        active: true
      }, function (err, result) {
        if (err) return res.send(util.error(err));

        res.send(util.success(result, message.common_messages_create_sucess));
      });
    }

    function getNumberById(req, res, next) {
      const number_sid = req.params.number_sid;
      if (!number_sid) {
        return res.send(util.error(message.common_messages_error));
      }

      numberModel.getNumberById(number_sid, function(err, result){
        if (err) return res.send(util.error(err));
        if (!result) return res.send(util.error(message.common_messages_error));

        res.send(util.success(result, message.common_messages_record_available));
      });
    };

    function updateNumber(req, res, next) {
      const valid = util.validate(req.body, [
        'organization_package_id',
        'greeting',
        'active'
      ]);
      if (!valid.valid) {
        return res.send(util.error(valid.message));
      }

      numberModel.updateNumber({
        organization_package_id: req.body.organization_package_id,
        greeting: req.body.greeting,
        active: req.body.active,
        number_sid: req.params.number_sid
      }, function (err, result) {
        if (err) return res.send(util.error(err));

        res.send(util.success(result, message.common_messages_update_success));
      });
    };

    function deleteNumber(req, res, next) {
      const number_sid = req.params.number_sid;
      if (!number_sid) {
        return res.send(util.error(message.common_messages_error));
      }

      numberModel.deleteNumber(number_sid, function(err, result){
        if (err) return res.send(util.error(err));
        if (!result) return res.send(util.error(message.common_messages_error));

        res.send(util.success(result, message.common_messages_delete_success));
      });
    };
}
