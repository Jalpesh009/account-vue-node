const db = require("../db");
var FaqModel = function() {};

var faqCategoryTableName = "ca_faq_category";
var faqItemTableName = "ca_faq_item";
var faqTableName = "ca_faqs";

FaqModel.prototype.getAllFaqCategory = function(obj, callback) {
  let sqlQuery;
  const start = (obj.page - 1) * obj.par_page;
  const limit = obj.par_page;
  if (obj.page === "All") {
    sqlQuery = `SELECT * FROM ${faqCategoryTableName}`;
  } else if (isNaN(start)) {
    sqlQuery = `SELECT * FROM ${faqCategoryTableName} LIMIT 0,10`;
  } else {
    sqlQuery = `SELECT * FROM ${faqCategoryTableName} LIMIT ${start} , ${limit}`;
  }
  db.query(sqlQuery, [obj.user_id], function(err, result, fields) {
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
};

FaqModel.prototype.createFaqCategory = function(data, callback) {
  db.query(
    `INSERT INTO ${faqCategoryTableName} (text, created_date, updated_date, expired_date, status) VALUES (?, ?, ?, ?, ?)`,
    [data.text, data.created_date, data.updated_date, data.expired_date, data.status],
    function(err, result, fields) {
      if (err) {
        return callback(err);
      }

      callback(null, result);
    }
  );
};

FaqModel.prototype.getFaqCategoryById = function(category_id, callback) {
  db.query(`SELECT * FROM ${faqCategoryTableName} where id = ?`, [category_id], function(err, result, fields) {
    if (err) {
      return callback(err);
    }

    if (!result.length) {
      return callback(message.common_messages_record_not_available);
    }
    callback(null, result[0]);
  });
};

FaqModel.prototype.updateFaqCategory = function(data, category_id, callback) {
  db.query(
    `UPDATE ${faqCategoryTableName} SET text = ?, updated_date = ?, expired_date = ?, status = ?  WHERE id = ${category_id}`,
    [data.text, data.updated_date, data.expired_date, data.status],
    function(err, result, fields) {
      if (err) {
        return callback(err);
      }

      callback(null, result);
    }
  );
};

FaqModel.prototype.deleteContact = function(category_id, callback) {
  db.query(`DELETE FROM ${faqCategoryTableName} WHERE id = ?`, [category_id], function(err, result, fields) {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

// ==============================

FaqModel.prototype.getAllFaqItem = function(obj, callback) {
  let sqlQuery;
  const start = (obj.page - 1) * obj.par_page;
  const limit = obj.par_page;
  if (obj.page === "All") {
    sqlQuery = `SELECT * FROM ${faqItemTableName}`;
  } else if (isNaN(start)) {
    sqlQuery = `SELECT * FROM ${faqItemTableName} LIMIT 0,10`;
  } else {
    sqlQuery = `SELECT * FROM ${faqItemTableName} LIMIT ${start} , ${limit}`;
  }
  db.query(sqlQuery, [obj.user_id], function(err, result, fields) {
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
};

FaqModel.prototype.createFaqItem = function(data, callback) {
  db.query(
    `INSERT INTO ${faqItemTableName} (item, category_id, created_date, updated_date, expired_date, status) VALUES (?,?, ?, ?, ?, ?)`,
    [data.item, data.category_id, data.created_date, data.updated_date, data.expired_date, data.status],
    function(err, result, fields) {
      if (err) {
        return callback(err);
      }

      callback(null, result);
    }
  );
};

FaqModel.prototype.getFaqItemById = function(item_id, callback) {
  db.query(`SELECT * FROM ${faqItemTableName} where id = ?`, [item_id], function(err, result, fields) {
    if (err) {
      return callback(err);
    }

    if (!result.length) {
      return callback(message.common_messages_record_not_available);
    }
    callback(null, result[0]);
  });
};

FaqModel.prototype.updateFaqItem = function(data, item_id, callback) {
  db.query(
    `UPDATE ${faqItemTableName} SET item = ?, category_id = ?, updated_date = ?, expired_date = ?, status = ?  WHERE id = ${item_id}`,
    [data.item, data.category_id, data.updated_date, data.expired_date, data.status],
    function(err, result, fields) {
      if (err) {
        return callback(err);
      }

      callback(null, result);
    }
  );
};

FaqModel.prototype.deleteFaqItem = function(item_id, callback) {
  db.query(`DELETE FROM ${faqItemTableName} WHERE id = ?`, [item_id], function(err, result, fields) {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

// ==============================

FaqModel.prototype.getAllFaq = function(obj, callback) {
  let sqlQuery;
  const start = (obj.page - 1) * obj.par_page;
  const limit = obj.par_page;
  if (obj.page === "All") {
    sqlQuery = `SELECT * FROM ${faqTableName}`;
  } else if (isNaN(start)) {
    sqlQuery = `SELECT * FROM ${faqTableName} LIMIT 0,10`;
  } else {
    sqlQuery = `SELECT * FROM ${faqTableName} LIMIT ${start} , ${limit}`;
  }
  db.query(sqlQuery, [obj.user_id], function(err, result, fields) {
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
};

FaqModel.prototype.createFaq = function(data, callback) {
  db.query(
    `INSERT INTO ${faqTableName} (user_id, item_id, name, answer, created_date, updated_date, expired_date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [data.user_id, data.item_id, data.name, data.answer, data.created_date, data.updated_date, data.expired_date, data.status],
    function(err, result, fields) {
      if (err) {
        return callback(err);
      }

      callback(null, result);
    }
  );
};

FaqModel.prototype.getFaqById = function(faq_id, callback) {
  db.query(`SELECT * FROM ${faqTableName} where id = ?`, [faq_id], function(err, result, fields) {
    if (err) {
      return callback(err);
    }

    if (!result.length) {
      return callback(message.common_messages_record_not_available);
    }
    callback(null, result[0]);
  });
};

FaqModel.prototype.updateFaq = function(data, faq_id, callback) {
  db.query(
    `UPDATE ${faqTableName} SET user_id = ?, item_id = ?, name = ?, answer = ?, updated_date = ?, expired_date = ?, status = ?  WHERE id = ${faq_id}`,
    [data.user_id, data.item_id, data.name, data.answer, data.updated_date, data.expired_date, data.status],
    function(err, result, fields) {
      if (err) {
        return callback(err);
      }

      callback(null, result);
    }
  );
};

FaqModel.prototype.deleteFaq = function(faq_id, callback) {
  db.query(`DELETE FROM ${faqTableName} WHERE id = ?`, [faq_id], function(err, result, fields) {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = new FaqModel();
