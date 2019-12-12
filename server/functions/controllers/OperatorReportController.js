var operatorReportModel = require('../models/OperatorReportModel');
var util = require('../utils/response');
var message = require('../utils/messages.json');
var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);;

const DB_DATE_FORMAT = 'YYYY-MM-DD HH:m:ss';

module.exports.controller = function (server) {

    server.get('/operators/:operator_id/reports', getAllOperatorReports);
    server.post('/operators/:operator_id/reports', createOperatorReport);
    server.get('/operators/reports/:report_id', getReportById);
    server.put('/operators/reports/:report_id', updateReport);

    function getAllOperatorReports(req, res, next) {
      if (!req.params.operator_id) {
        return res.send(util.error(message.required_parameters_null_or_missing));
      }

      operatorReportModel.getAllOperatorReports(req.params.operator_id, function (err, result) {
        if (err) return res.send(util.error(err));
        if (!result) return res.send(util.error(message.common_messages_error));

        res.send(util.success(result, message.common_messages_record_available));
      });
    }

    function createOperatorReport(req, res, next) {
      if (!req.params.operator_id) {
        return res.send(util.error(message.required_parameters_null_or_missing));
      }
      const valid = util.validate(req.body, [
        'report_month',
        'report_year',
        'total_pay',
        'file_name'
      ]);
      if (!valid.valid) {
        return res.send(util.error(valid.message));
      }

      operatorReportModel.createOperatorReport({
        user_id: req.params.operator_id,
        report_month: req.body.report_month,
        report_year: req.body.report_year,
        total_pay: req.body.total_pay,
        file_name: req.body.file_name
      }, function (err, result) {
        if (err) return res.send(util.error(err));

        res.send(util.success(result, message.common_messages_create_success));
      });
    }

    function getReportById(req, res, next) {
      const organization_id = req.params.organization_id;
      if (!organization_id) {
        return res.send(util.error(message.common_messages_error));
      }

      operatorReportModel.getReportById(organization_id, function(err, result){
        if (err) return res.send(util.error(err));
        if (!result) return res.send(util.error(message.common_messages_error));

        res.send(util.success(result, message.common_messages_record_available));
      });
    };

    function updateReport(req, res, next) {
      const valid = util.validate(req.body, [
        'name',
        'region_id',
        'terms_id',
        'active'
      ]);
      if (!valid.valid) {
        return res.send(util.error(valid.message));
      }

      operatorReportModel.updateReport({
        name: req.body.name,
        region_id: req.body.region_id,
        terms_id: req.body.terms_id,
        active: req.body.active,
        organization_id: req.params.organization_id
      }, function (err, result) {
        if (err) return res.send(util.error(err));

        res.send(util.success(result, message.common_messages_update_success));
      });
    };
}
