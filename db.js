const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'kuri',
  password: 'kuri01',
  database: 'bank_ecommerce_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro de conexão: ' + err.stack);
    return;
  }
  console.log('Conectado como ID ' + connection.threadId);
});

module.exports = connection;


