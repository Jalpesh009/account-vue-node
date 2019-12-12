var contactModel = require("../models/ContactModel");
var util = require("../utils/response");
var message = require("../utils/messages.json");
var dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
var config = require("../config");
var jwt = require("jsonwebtoken");
dayjs.extend(utc);

const DB_DATE_FORMAT = "YYYY-MM-DD HH:m:ss";

module.exports.controller = function (server) {
  server.get("/contacts", getAllContacts);
  server.post("/contacts", createContact);
  server.get("/contacts/:contact_id", getContactById);
  server.put("/contacts/:contact_id", updateContact);
  server.del("/contacts/:contact_id", deleteContact);

  function getAllContacts(req, res, next) {
    let decoded = req.user;
    if (req.user == null || typeof (req.user) == "undefined") decoded = jwt.decode(req.headers["authorization"], config.secret);
    let page = req.query.page ? req.query.page : 1;
    let par_page = req.query.par_page ? req.query.par_page : 10;
    contactModel.getAllContactsByUser(
      { user_id: decoded.id, page: page, par_page: par_page },
      function (err, result) {
        if (err) return res.send(util.error(err));
        if (!result) return res.send(util.error(message.common_messages_error));

        res.send(
          util.success(result, message.common_messages_record_available)
        );
      }
    );
  }

  function createContact(req, res, next) {
    const valid = util.validate(req.body, ["name", "number", "email"]);
    if (!valid.valid) {
      return res.send(util.error(valid.message));
    }
    contactModel.createContact(
      {
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        company: req.body.company,
        type_id: req.body.type_id ? req.body.type_id : 1,
        contact_group: req.body.contact_group,
        image_url: req.body.image_url,
        status: 1,
        created_date: dayjs.utc().format(DB_DATE_FORMAT),
        updated_date: dayjs.utc().format(DB_DATE_FORMAT),
        deleted_date: null
      },
      function (err, result) {
        if (err) return res.send(util.error(err));

        res.send(util.success(result, message.common_messages_create_success));
      }
    );
  }

  function getContactById(req, res, next) {
    const contact_id = req.params.contact_id;
    if (!contact_id) {
      return res.send(util.error(message.common_messages_error));
    }
    contactModel.getContactById(contact_id, function (err, result) {
      if (err) return res.send(util.error(err));
      if (!result) return res.send(util.error(message.common_messages_error));
      res.send(util.success(result, message.common_messages_record_available));
    });
  }

  function updateContact(req, res, next) {
    const contact_id = req.params.contact_id;
    if (!contact_id) {
      return res.send(util.error(message.common_messages_error));
    }
    const valid = util.validate(req.body, ["name", "number", "email"]);
    if (!valid.valid) {
      return res.send(util.error(valid.message));
    }
    contactModel.updateContact(
      {
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        company: req.body.company,
        type_id: req.body.type_id ? req.body.type_id : 1,
        contact_group: req.body.contact_group,
        image_url: req.body.image_url,
        status: req.body.status,
        updated_date: dayjs.utc().format(DB_DATE_FORMAT),
        contact_id: contact_id
      },
      function (err, result) {
        if (err) return res.send(util.error(err));

        res.send(util.success(result, message.common_messages_create_success));
      }
    );
  }

  function deleteContact(req, res, next) {
    const contact_id = req.params.contact_id;
    if (!contact_id) {
      return res.send(util.error(message.common_messages_error));
    }

    contactModel.deleteContact(contact_id, function (err, result) {
      if (err) return res.send(util.error(err));
      if (!result) return res.send(util.error(message.common_messages_error));
      res.send(util.success(result, message.common_messages_delete_success));
    });
  }
};
