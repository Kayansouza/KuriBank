const express = require('express')
const cors = require('cors')
const db = require('./db');

const app = express(); 
const port = process.env.port || 500;

//Middleware

app.use(cors());
app.use(express.json());

//Rota para obter todos os produtos

app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });

  // Rota para adicionar um produto

  app.post ('api/products', (req, res)=>{
    const {name, price, description} = req.body; 
    const sql = 'INSERT INTO products (name, price, description) VALUES (?, ?, ?)';
    db.query(sql, [name, price, description], (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, name, price, description });
      });
  })

  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
  