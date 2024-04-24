const express = require('express');
const User = require('../model/User');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
     return res.status(401).send('Usuário não encontrado.')
    } 

    try {
        console.log('Senha fornecida: ', senha);
        console.log('Senha armazenada no BD', user.senha)


    const cPassword = await bcrypt.compare(senha, user.senha);
    console.log('Result da comparação: ', cPassword)

    if (cPassword) {
        req.session.user = user;
        res.redirect('/perfil');
    } else {
        res.status(401).send('Usuário ou senha incorreta.')
    }
} catch (error) {
    console.error('Erro ao validar senha.');
    res.status(500).send('Falha sistêmica.')
};
});

router.get('/perfil', (req, res) => {
    if(!req.session.user) {
        res.redirect('/login');
    } else {
        const { first_name, last_name, email, age } = req.session.user;
        res.render('perfil', { first_name, last_name, email, age });
    }
});

module.exports = router