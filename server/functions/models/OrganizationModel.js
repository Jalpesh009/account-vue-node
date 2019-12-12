const db = require('../db');
const util = require('../utils/response');
const message = require('../utils/messages.json');

var OrganizationModel = function () {};

OrganizationModel.prototype.getAllOrganizations = function (callback) {
  db.query('SELECT * FROM organizations', function (err, result, fields) {
    if (err) { return callback(err); }

    callback(null, result);
  });
}

OrganizationModel.prototype.createOrganization = function (data, callback) {
  db.query('INSERT INTO organizations (name, region_id, terms_id, created_at, active) VALUES (?, ?, ?, ?, ?)', [
    data.name,
    data.region_id,
    data.terms_id,
    data.created_at,
    data.active
  ], function (err, result, fields) {
    if (err) { return callback(err); }

    callback(null, result);
  });
}

OrganizationModel.prototype.getOrganizationById = function (organization_id, callback) {
  db.query('SELECT * FROM organizations where organization_id = ?', [organization_id], function (err, result, fields) {
    if (err) { return callback(err); }

    if (!result.length) {
      return callback(message.common_messages_record_not_available);
    }
    callback(null, result[0]);
  });
}

OrganizationModel.prototype.updateOrganization = function (data, callback) {
  db.query('UPDATE organizations SET name = ?, region_id = ?, terms_id = ?, active = ? WHERE organization_id = ?', [
    data.name,
    data.region_id,
    data.terms_id,
    data.active,
    data.organization_id
  ], function (err, result, fields) {
    if (err) { return callback(err); }

    callback(null, result);
  });
}

module.exports = new OrganizationModel();
