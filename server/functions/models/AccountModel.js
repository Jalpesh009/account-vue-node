/*
		2019-11-14 by Din
*/

const db = require('../db');
const util = require('../utils/response');
const message = require('../utils/messages.json');

var AccountModel = function () { };

AccountModel.prototype.getAccountByEmail = function (email, callback) {
	db.query('SELECT * FROM account WHERE email=?', [email], function (err, result, fields) {
		if (err) { return callback(err); }

		if (!result.length) {
			return callback(message.common_messages_record_not_available);
		}
		callback(null, result[0]);
	});
}

AccountModel.prototype.getAccountById = function (id, callback) {
	db.query('SELECT * FROM account WHERE account_id=?', [id], function (err, result, fields) {
		if (err) { return callback(err); }

		if (!result.length) {
			return callback(message.common_messages_record_not_available);
		}
		callback(null, result[0]);
	});
}

AccountModel.prototype.getAccountByUserId = function (id, callback) {
	db.query('SELECT * FROM accounts WHERE user_id=?', [id], function (err, result, fields) {
		if (err) { return callback(err); }

		if (!result.length) {
			return callback(message.common_messages_record_not_available);
		}
		callback(null, result[0]);
	});
}

AccountModel.prototype.createAccount = function (data, callback) {

	let query = "INSERT INTO account ("
	let st = 0;
	for (key in data) {
		if (st != 0) query += ", "
		query = query + key;
		st = 1;
	}
	query += ") VALUES (";
	st = 0;
	for (key in data) {
		if (st != 0) query += ", "
		query = query + "'" + data[key] + "'";
		st = 1;
	}
	query += ")";
	db.query(query, function (err, result, fields) {
		if (err) { return callback(err); }
		callback(null, result, fields);
	});
}

AccountModel.prototype.updateAccount = function (data, updateID, callback) {

	let query = "UPDATE account SET "
	for (key in data) {
		query = query + key + "='" + data[key] + "', "
	}
	query = query + "updated_date = '" + Date().toString() + "'";
	query = query + " WHERE " + updateID.key + "='" + updateID.id + "'";
	db.query(query, function (err, result, fields) {
		if (err) { return callback(err); }
		callback(null, result, fields);
	});

}

AccountModel.prototype.deleteAccountByUserId = function (data, callback) { // user_id

	db.query('DELET FROM accounts WHERE user_id = ?', [data.user_id], function (err, success, fields) {
		if (err) { return callback(err) }
		callback(null, result, fields);

	});

}

module.exports = new AccountModel();
