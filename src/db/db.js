const mysql = require ('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user:  'root',
    password: 'kayan_passaword', // SENHA DO MEU BANCO DE DADOS
    database: 'MasterD' // NOME DO MEU BANCO DE DADOS

});

connection.connect ((err) => {
    if (err) {
        console.error('Erro ao connectar ao MySQL', err)
        return;
    }

    console.log('Connected to mysql database'); 
});

module.exports = connection

