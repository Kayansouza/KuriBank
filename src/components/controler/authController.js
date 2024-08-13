
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const authService = require('../services/authService');

// Configuração do transporte do nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

// Função para enviar e-mail de confirmação
async function sendConfirmationEmail(email, token) {
    const confirmationLink = `http://your-domain.com/confirm-email?token=${token}`;
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Confirme seu e-mail',
        text: `Por favor, confirme seu e-mail clicando no link a seguir: ${confirmationLink}`
    };
    await transporter.sendMail(mailOptions);
}

// Exemplo de função para registrar um novo usuário
async function registerUser(username, email, plainPassword) {
    const hashedPassword = await authService.savePassword(plainPassword);
    const token = crypto.randomBytes(20).toString('hex'); // Gera um token de 40 caracteres
    // Salve o nome de usuário, e-mail, hash e token no banco de dados
    // await User.create({ username, email, hashedPassword, token, isEmailConfirmed: false });
    
    // Envie o e-mail de confirmação
    await sendConfirmationEmail(email, token);
}

// Exemplo de função para confirmar o e-mail
async function confirmEmail(token) {
    // Verifique o token no banco de dados
    // const user = await User.findOne({ where: { token } });
    // if (user) {
    //     user.isEmailConfirmed = true;
    //     user.token = null; // Limpa o token após a confirmação
    //     await user.save();
    // }
    return true; // Retorne se a confirmação foi bem-sucedida
}

module.exports = {
    registerUser,
    confirmEmail
};
