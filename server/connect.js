var mysql = require('mysql');

var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'market',
  multipleStatements: true
});

module.exports = pool;