var organizationModel = require('../models/OrganizationModel');
var util = require('../utils/response');
var message = require('../utils/messages.json');
var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);;

const DB_DATE_FORMAT = 'YYYY-MM-DD HH:m:ss';

module.exports.controller = function (server) {

    server.get('/organizations', getAllOrganizations);
    server.post('/organizations', createOrganization);
    server.get('/organizations/:organization_id', getOrganizationById);
    server.put('/organizations/:organization_id', updateOrganization);

    function getAllOrganizations(req, res, next) {
      organizationModel.getAllOrganizations(function (err, result) {
        if (err) return res.send(util.error(err));
        if (!result) return res.send(util.error(message.common_messages_error));

        res.send(util.success(result, message.common_messages_record_available));
      });
    }

    function createOrganization(req, res, next) {
      const valid = util.validate(req.body, [
        'name',
        'region_id',
        'terms_id'
      ]);
      if (!valid.valid) {
        return res.send(util.error(valid.message));
      }

      organizationModel.createOrganization({
        name: req.body.name,
        region_id: req.body.region_id,
        terms_id: req.body.terms_id,
        created_at: dayjs.utc().format(DB_DATE_FORMAT),
        active: true
      }, function (err, result) {
        if (err) return res.send(util.error(err));

        res.send(util.success(result, message.common_messages_create_success));
      });
    }

    function getOrganizationById(req, res, next) {
      const organization_id = req.params.organization_id;
      if (!organization_id) {
        return res.send(util.error(message.common_messages_error));
      }

      organizationModel.getOrganizationById(organization_id, function(err, result){
        if (err) return res.send(util.error(err));
        if (!result) return res.send(util.error(message.common_messages_error));

        res.send(util.success(result, message.common_messages_record_available));
      });
    };

    function updateOrganization(req, res, next) {
      const valid = util.validate(req.body, [
        'name',
        'region_id',
        'terms_id',
        'active'
      ]);
      if (!valid.valid) {
        return res.send(util.error(valid.message));
      }

      organizationModel.updateOrganization({
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
