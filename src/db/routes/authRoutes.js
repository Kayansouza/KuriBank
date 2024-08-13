const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const authController = require('../controllers/authController');

// Função de middleware para validação
const validateRegister = [
    body('username').isLength({ min: 5 }).withMessage('Nome de usuário deve ter pelo menos 5 caracteres'),
    body('email').isEmail().withMessage('Email inválido'),
    body('password').isLength({ min: 6 }).withMessage('Senha deve ter pelo menos 6 caracteres')
];

// Função de middleware para tratamento de erros de validação
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Rota para registro com validação
router.post('/register', validateRegister, handleValidationErrors, async (req, res) => {
    const { username, email, password } = req.body;
    try {
        await authController.registerUser(username, email, password);
        res.status(201).send('Usuário registrado. Verifique seu e-mail para confirmar o registro.');
    } catch (error) {
        res.status(500).send('Erro ao registrar usuário');
    }
});

// Validação para confirmação de e-mail não é estritamente necessária, mas você pode adicionar validações conforme necessário
router.get('/confirm-email', async (req, res) => {
    const { token } = req.query;
    try {
        const isConfirmed = await authController.confirmEmail(token);
        if (isConfirmed) {
            res.status(200).send('E-mail confirmado com sucesso');
        } else {
            res.status(400).send('Token inválido ou já usado');
        }
    } catch (error) {
        res.status(500).send('Erro ao confirmar e-mail');
    }
});

module.exports = router;
