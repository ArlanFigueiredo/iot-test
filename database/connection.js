var knex = require('knex')({
    client: 'mssql',
    connection: {
      host : 'localhost',
      user : 'sa',
      password : '12345678',
      database : 'iot'
    }
  });

module.exports = knex