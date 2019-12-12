'use strict';
const Client = require('mysql')
const config = require('./config')

const client = process.env.NODE_ENV == 'development' ?
  Client.createConnection({
    user: 'root',
    host: 'localhost',
    database: config.dbName,
    password: '$ecur!ty'
  }) :

  Client.createConnection({
    user: config.dbUser,
    host: config.dbHost,
    database: config.dbName,
    password: config.dbPassword
  });


client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});

module.exports = client;
