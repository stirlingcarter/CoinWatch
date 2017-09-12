const knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL
  });
  
var bookshelf = require('bookshelf')(knex);

//require this given this