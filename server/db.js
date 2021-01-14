const mysql = require('mysql');

const client = (sql) => {
  return new Promise((resolve) => {
    const connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '123456',
      database: 'purplevine',
    });

    connection.connect();
    const sql = 'SELECT * FROM note_list';
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      // console.log(results);
      resolve(results)
    });

    connection.end();
  })
}


module.exports = client;