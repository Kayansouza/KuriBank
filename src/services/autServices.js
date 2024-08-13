const bcrypt = require('bcrypt');

// Salvar uma senha (hash e sal)
async function savePassword(plainPassword) {
    const saltRounds = 10; // Número de rounds para gerar o sal
    const hash = await bcrypt.hash(plainPassword, saltRounds);
    // Salve o hash no banco de dados
    return hash;
}

// Verificar uma senha
async function verifyPassword(plainPassword, hashedPassword) {
    const match = await bcrypt.compare(plainPassword, hashedPassword);
    return match;
}

module.exports = {
    savePassword,
    verifyPassword
};
