// routes/products.js

const express = require('express');
const router = express.Router();
const db = require('../db');

// Rota para obter todos os produtos
router.get('/', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Rota para adicionar um novo produto
router.post('/', (req, res) => {
  const { name, price, description } = req.body;
  const sql = 'INSERT INTO products (name, price, description) VALUES (?, ?, ?)';
  db.query(sql, [name, price, description], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, name, price, description });
  });
});

module.exports = router;
