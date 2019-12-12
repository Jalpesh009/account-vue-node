var restify = require('restify');
var fs = require('fs');
const rjwt = require('restify-jwt-community');
const config = require('./functions/config');
const corsMiddleware = require('restify-cors-middleware');
require('dotenv').config();

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

// add middleware
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

// server.use(rjwt({secret: config.secret}).unless({
//     path: ['/auth/login', '/auth/register']
// }));

//read all controllers
fs.readdirSync('./functions/controllers').forEach(function (file) {
  if (file.substr(-3) == '.js') {
    route = require('./functions/controllers/' + file);
    route.controller(server);
  }
});

server.get('/', function (req, res, next) {
  res.send('Welcome!');
  next();
});

var port = process.env.PORT || 8082;
console.log(port)
// start server on specific port
server.listen(port, function () {
  console.log('%s listening at %s', server.name, server.url);
});
