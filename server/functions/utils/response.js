
var Util = function () {};

Util.prototype.success = function (payload, message) {
  return {success: true, message: message, result: payload};
}
Util.prototype.error = function (message) {
  return {success: false, message: message, result: {}};
}
Util.prototype.error1 = function (payload, message) {
  return {success: false, message: message, result: payload};
}

Util.prototype.validate = function (data, options) {
  for(let i in options) {
    const key = options[i];
    if (!data[key] || data[key] == '') {
      return {valid: false, message: `{${key}} field is missing.`};
    }
  }

  return {valid: true};
}

module.exports =new Util();
