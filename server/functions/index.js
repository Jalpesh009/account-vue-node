var restify = require('restify');
var fs = require('fs');
const rjwt = require('restify-jwt-community');
const config = require('./config');
const functions = require('firebase-functions');
const corsMiddleware = require('restify-cors-middleware');

// creat server
const server = restify.createServer({
  name: 'account-server',
  version: '1.0.0'
});

const cors = corsMiddleware({
    origins: ["*"],
    allowHeaders: ["*"],
    allowMethods: ["*"]
});

server.pre(cors.preflight);
server.use(cors.actual);

server.use(rjwt({secret: config.secret}).unless({
    path: ['/auth/login', '/auth/register', '/auth/sendVerificationEmail', '/auth/verifyCode', '/auth/sendVerificationSms']
}));

// add middleware
// server.use(restify.plugins.acceptParser(server.acceptable));
// server.use(restify.plugins.queryParser());
// server.use(restify.plugins.bodyParser());

//read all controllers
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(server);
  }
});

server.get('/', function (req, res, next) {
  res.send('Welcome!');
  next();
});

module.exports = {
  accountApi: functions.https.onRequest(server._onRequest.bind(server))
};
