const db = require('../db');
const util = require('../utils/response');
const message = require('../utils/messages.json');

var CreditCardModel = function () {};

CreditCardModel.prototype.addCreditCard = function (data, callback) {
  db.query('INSERT INTO credit_cards (name, card_number, expiration, security, selfie_download_url, selfie_full_path, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)', [
    data.name,
    data.card_number,
    data.expiration,
    data.security,
    data.selfie_download_url,
    data.selfie_full_path,
    data.user_id
  ], function (err, result, fields) {
    if (err) { return callback(err); }

    callback(null, result);
  });
}

CreditCardModel.prototype.getCreditCardsByUser = function (id, callback) {
  db.query('SELECT * FROM credit_cards WHERE user_id=?', [id], function (err, result, fields) {
    if (err) { return callback(err); }

    if (!result.length) {
      return callback(message.common_messages_record_not_available);
    }
    callback(null, result);
  });
}

module.exports = new CreditCardModel();
