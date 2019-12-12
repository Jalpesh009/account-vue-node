var FaqModel = require("../models/FaqModel");
var util = require("../utils/response");
var message = require("../utils/messages.json");
var dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
var config = require("../config");
var jwt = require("jsonwebtoken");
dayjs.extend(utc);

const DB_DATE_FORMAT = "YYYY-MM-DD HH:m:ss";

module.exports.controller = function(server) {
  server.get("/faq-category", getAllFaqCategory);
  server.post("/faq-category", createFaqCategory);
  server.get("/faq-category/:category_id", getFaqCategoryById);
  server.put("/faq-category/:category_id", updateFaqCategory);
  server.del("/faq-category/:category_id", deleteFaqCategory);

  server.get("/faq-item", getAllFaqItem);
  server.post("/faq-item", createFaqItem);
  server.get("/faq-item/:item_id", getFaqItemById);
  server.put("/faq-item/:item_id", updateFaqItem);
  server.del("/faq-item/:item_id", deleteFaqItem);

  server.get("/faq", getAllFaq);
  server.post("/faq", createFaq);
  server.get("/faq/:faq_id", getFaqById);
  server.put("/faq/:faq_id", updateFaq);
  server.del("/faq/:faq_id", deleteFaq);

  // Category Methods
  function getAllFaqCategory(req, res, next) {
    let page = req.query.page ? req.query.page : 1;
    let par_page = req.query.par_page ? req.query.par_page : 10;
    FaqModel.getAllFaqCategory({ page: page, par_page: par_page }, function(err, result) {
      if (err) return res.send(util.error(err));
      if (!result) return res.send(util.error(message.common_messages_error));

      res.send(util.success(result, message.common_messages_record_available));
    });
  }
  function createFaqCategory(req, res, next) {
    const valid = util.validate(req.body, ["text", "status"]);
    if (!valid.valid) {
      return res.send(util.error(valid.message));
    }
    FaqModel.createFaqCategory(
      {
        text: req.body.text,
        status: req.body.status,
        created_date: dayjs.utc().format(DB_DATE_FORMAT),
        updated_date: dayjs.utc().format(DB_DATE_FORMAT),
        expired_date: req.body.expired_date
      },
      function(err, result) {
        if (err) return res.send(util.error(err));

        res.send(util.success(result, message.common_messages_create_success));
      }
    );
  }
  function getFaqCategoryById(req, res, next) {
    const category_id = req.params.category_id;
    if (!category_id) {
      return res.send(util.error(message.common_messages_error));
    }
    FaqModel.getFaqCategoryById(category_id, function(err, result) {
      if (err) return res.send(util.error(err));
      if (!result) return res.send(util.error(message.common_messages_error));
      res.send(util.success(result, message.common_messages_record_available));
    });
  }
  function updateFaqCategory(req, res, next) {
    const category_id = req.params.category_id;
    if (!category_id) {
      return res.send(util.error(message.common_messages_error));
    }
    const valid = util.validate(req.body, ["text", "status"]);
    if (!valid.valid) {
      return res.send(util.error(valid.message));
    }
    FaqModel.updateFaqCategory(
      {
        text: req.body.text,
        status: req.body.status,
        updated_date: dayjs.utc().format(DB_DATE_FORMAT),
        expired_date: req.body.expired_date
      },
      category_id,
      function(err, result) {
        if (err) return res.send(util.error(err));

        res.send(util.success(result, message.common_messages_create_success));
      }
    );
  }
  function deleteFaqCategory(req, res, next) {
    const category_id = req.params.category_id;
    if (!category_id) {
      return res.send(util.error(message.common_messages_error));
    }
    FaqModel.deleteContact(category_id, function(err, result) {
      if (err) return res.send(util.error(err));
      if (!result) return res.send(util.error(message.common_messages_error));
      res.send(util.success(result, message.common_messages_delete_success));
    });
  }

  // items Methods
  function getAllFaqItem(req, res, next) {
    let page = req.query.page ? req.query.page : 1;
    let par_page = req.query.par_page ? req.query.par_page : 10;
    FaqModel.getAllFaqItem({ page: page, par_page: par_page }, function(err, result) {
      if (err) return res.send(util.error(err));
      if (!result) return res.send(util.error(message.common_messages_error));

      res.send(util.success(result, message.common_messages_record_available));
    });
  }
  function createFaqItem(req, res, next) {
    const valid = util.validate(req.body, ["item", "category_id", "status"]);
    if (!valid.valid) {
      return res.send(util.error(valid.message));
    }
    FaqModel.createFaqItem(
      {
        item: req.body.item,
        category_id: req.body.category_id,
        created_date: dayjs.utc().format(DB_DATE_FORMAT),
        updated_date: dayjs.utc().format(DB_DATE_FORMAT),
        expired_date: req.body.expired_date,
        status: req.body.status
      },
      function(err, result) {
        if (err) return res.send(util.error(err));

        res.send(util.success(result, message.common_messages_create_success));
      }
    );
  }
  function getFaqItemById(req, res, next) {
    const item_id = req.params.item_id;
    if (!item_id) {
      return res.send(util.error(message.common_messages_error));
    }
    FaqModel.getFaqItemById(item_id, function(err, result) {
      if (err) return res.send(util.error(err));
      if (!result) return res.send(util.error(message.common_messages_error));
      res.send(util.success(result, message.common_messages_record_available));
    });
  }
  function updateFaqItem(req, res, next) {
    const item_id = req.params.item_id;
    if (!item_id) {
      return res.send(util.error(message.common_messages_error));
    }
    const valid = util.validate(req.body, ["item", "category_id", "status"]);
    if (!valid.valid) {
      return res.send(util.error(valid.message));
    }
    FaqModel.updateFaqItem(
      {
        item: req.body.item,
        category_id: req.body.category_id,
        updated_date: dayjs.utc().format(DB_DATE_FORMAT),
        expired_date: req.body.expired_date,
        status: req.body.status
      },
      item_id,
      function(err, result) {
        if (err) return res.send(util.error(err));

        res.send(util.success(result, message.common_messages_create_success));
      }
    );
  }
  function deleteFaqItem(req, res, next) {
    const item_id = req.params.item_id;
    if (!item_id) {
      return res.send(util.error(message.common_messages_error));
    }
    FaqModel.deleteFaqItem(item_id, function(err, result) {
      if (err) return res.send(util.error(err));
      if (!result) return res.send(util.error(message.common_messages_error));
      res.send(util.success(result, message.common_messages_delete_success));
    });
  }

  // faq Methods
  function getAllFaq(req, res, next) {
    let page = req.query.page ? req.query.page : 1;
    let par_page = req.query.par_page ? req.query.par_page : 10;
    FaqModel.getAllFaq({ page: page, par_page: par_page }, function(err, result) {
      if (err) return res.send(util.error(err));
      if (!result) return res.send(util.error(message.common_messages_error));

      res.send(util.success(result, message.common_messages_record_available));
    });
  }
  function createFaq(req, res, next) {
    let token = req.headers["authorization"];
    let decoded = jwt.decode(token, config.secret);
    const valid = util.validate(req.body, ["item_id", "name", "status"]);
    if (!valid.valid) {
      return res.send(util.error(valid.message));
    }
    FaqModel.createFaq(
      {
        user_id: decoded.id,
        item_id: req.body.item_id,
        name: req.body.name,
        answer: req.body.answer ? req.body.answer : null,
        created_date: dayjs.utc().format(DB_DATE_FORMAT),
        updated_date: dayjs.utc().format(DB_DATE_FORMAT),
        expired_date: req.body.expired_date,
        status: req.body.status
      },
      function(err, result) {
        if (err) return res.send(util.error(err));

        res.send(util.success(result, message.common_messages_create_success));
      }
    );
  }
  function getFaqById(req, res, next) {
    const faq_id = req.params.faq_id;
    if (!faq_id) {
      return res.send(util.error(message.common_messages_error));
    }
    FaqModel.getFaqById(faq_id, function(err, result) {
      if (err) return res.send(util.error(err));
      if (!result) return res.send(util.error(message.common_messages_error));
      res.send(util.success(result, message.common_messages_record_available));
    });
  }
  function updateFaq(req, res, next) {
    let token = req.headers["authorization"];
    let decoded = jwt.decode(token, config.secret);
    const faq_id = req.params.faq_id;
    if (!faq_id) {
      return res.send(util.error(message.common_messages_error));
    }
    const valid = util.validate(req.body, ["item_id", "name", "status"]);
    if (!valid.valid) {
      return res.send(util.error(valid.message));
    }
    FaqModel.updateFaq(
      {
        user_id: decoded.id,
        item_id: req.body.item_id,
        name: req.body.name,
        answer: req.body.answer ? req.body.answer : null,
        updated_date: dayjs.utc().format(DB_DATE_FORMAT),
        expired_date: req.body.expired_date,
        status: req.body.status
      },
      faq_id,
      function(err, result) {
        if (err) return res.send(util.error(err));

        res.send(util.success(result, message.common_messages_create_success));
      }
    );
  }
  function deleteFaq(req, res, next) {
    const faq_id = req.params.faq_id;
    if (!faq_id) {
      return res.send(util.error(message.common_messages_error));
    }
    FaqModel.deleteFaq(faq_id, function(err, result) {
      if (err) return res.send(util.error(err));
      if (!result) return res.send(util.error(message.common_messages_error));
      res.send(util.success(result, message.common_messages_delete_success));
    });
  }
};
