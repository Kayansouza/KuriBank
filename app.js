const connection = require('./db');

connection.query('SELECT * FROM users', (err, results) => {
  if (err) throw err;
  console.log(results);
  connection.end(); // Encerra a conexão após a consulta
});
