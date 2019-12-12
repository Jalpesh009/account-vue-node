const db = require("../db");
var ContactModel = function() {};
var tableName = "ca_contacts";
var typeTableName = "ca_contacts_type";

ContactModel.prototype.getAllContactsByUser = function(obj, callback) {
  let sqlQuery;
  const start = (obj.page - 1) * obj.par_page;
  const limit = obj.par_page;
  if (obj.page === "All") {
    sqlQuery = `SELECT cc.* FROM ${tableName} as cc JOIN ${typeTableName} as cct ON cc.type_id=cct.id WHERE cc.user_id = ?`;
  } else if (isNaN(start)) {
    sqlQuery = `SELECT cc.* FROM ${tableName} as cc JOIN ${typeTableName} as cct ON cc.type_id=cct.id WHERE cc.user_id = ? LIMIT 0,10`;
  } else {
    sqlQuery = `SELECT cc.* FROM ${tableName} as cc JOIN ${typeTableName} as cct ON cc.type_id=cct.id WHERE cc.user_id = ? LIMIT ${start} , ${limit}`;
  }
  db.query(sqlQuery, [obj.user_id], function(err, result, fields) {
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
};

ContactModel.prototype.createContact = function(data, callback) {
  db.query(
    `INSERT INTO ${tableName} (name, number, email, company, type_id, contact_group, image_url, status, created_date, updated_date, deleted_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      data.name,
      data.number,
      data.email,
      data.company,
      data.type_id,
      data.contact_group,
      data.image_url,
      data.status,
      data.created_date,
      data.updated_date,
      data.deleted_date
    ],
    function(err, result, fields) {
      if (err) {
        return callback(err);
      }

      callback(null, result);
    }
  );
};

ContactModel.prototype.getContactById = function(contact_id, callback) {
  db.query(`SELECT * FROM ${tableName} where id = ?`, [contact_id], function(
    err,
    result,
    fields
  ) {
    if (err) {
      return callback(err);
    }

    if (!result.length) {
      return callback(message.common_messages_record_not_available);
    }
    callback(null, result[0]);
  });
};

ContactModel.prototype.updateContact = function(data, callback) {
  db.query(
    `UPDATE ${tableName} SET name = ?, number = ?, email = ?, company = ?, type_id = ?, contact_group = ?, image_url = ?, status = ?, updated_date=?  WHERE id = ?`,
    [
      data.name,
      data.number,
      data.email,
      data.company,
      data.type_id,
      data.contact_group,
      data.image_url,
      data.status,
      data.updated_date,
      data.contact_id
    ],
    function(err, result, fields) {
      if (err) {
        return callback(err);
      }

      callback(null, result);
    }
  );
};

ContactModel.prototype.deleteContact = function(contact_id, callback) {
  db.query(`DELETE FROM ${tableName} WHERE id = ?`, [contact_id], function(
    err,
    result,
    fields
  ) {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = new ContactModel();
