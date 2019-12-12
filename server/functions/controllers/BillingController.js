var creditCardModel = require('../models/CreditCardModel');
var userModel = require('../models/UserModel');
var util = require('../utils/response');
var message = require('../utils/messages.json');
var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc');
var killbillAccount = require('../utils/killbill/resources/Account');
var killbillPaymentMethod = require('../utils/killbill/resources/PaymentMethod');
var stripe = require('stripe')('sk_test_hv1HX8k42KkoYXGkWNGADUY5002ww4MPHs');
dayjs.extend(utc);;

const DB_DATE_FORMAT = 'YYYY-MM-DD HH:m:ss';

module.exports.controller = function (server) {

    server.post('/billing/addCreditCard', addCreditCard);
    server.get('/billing/getCreditCardsByUser/:user_id', getCreditCardsByUser);
    server.post('/billing/selectPackage', selectPackage);

    function addCreditCard(req, res, next) {
      const valid = util.validate(req.body, [
        'name',
        'card_number',
        'expiration',
        'security',
        'selfie_download_url',
        'selfie_full_path',
        'user_id'
      ]);
      if (!valid.valid) {
        return res.send(util.error(valid.message));
      }

      stripe.tokens.create(
        {
          card: {
            number: req.body.card_number.trim(),
            exp_month: req.body.expiration.split('/')[0],
            exp_year: req.body.expiration.split('/')[1],
            cvc: req.body.security,
          },
        },
        function(err, token) {
          if (err) return res.send(util.error(err));
          // asynchronously called
          userModel.getUserById(req.body.user_id, function (err, user) {
            if (err) return res.send(util.error(err));
            if (!user) return res.send(util.error(message.common_messages_record_not_available));

            const killbill_account_id = user.killbill_account_id;

            console.log(killbill_account_id)

            killbillPaymentMethod.create({
              accountId: killbill_account_id,
              pluginName: 'killbill-stripe',
              pluginInfo: { properties: [{ key: 'token',
                                           value : token.id }
                          ]}
            }, 'admin', 'AddCreditCard', 'Add a new payment method', (err, data, attrib) => {
              if (err) {
                console.log(err)
                return res.send(util.error(err.message));
              }

              creditCardModel.addCreditCard(
                req.body, function (err, result) {
                if (err) return res.send(util.error(err));

                res.send(util.success(result, message.common_messages_create_sucess));
              });

            })
          });
        }
      );
    }

    function getCreditCardsByUser(req, res, next) {
      const user_id = req.params.user_id;

      creditCardModel.getCreditCardsByUser(user_id, function(err, result) {
        if (err) return res.send(util.error(err));

        res.send(util.success(result, message.common_messages_record_available));
      });
    }

    function selectPackage(req, res, next) {
      const valid = util.validate(req.body, [
        'user_id',
        'cost'
      ]);
      if (!valid.valid) {
        return res.send(util.error(valid.message));
      }

    }
}
