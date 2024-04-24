const express = require('express');
const router = express.Router();
const User = require('../model/User');
const { checkAuthenticated } = require('../middleware/auth');
const bcrypt = require('bcrypt');

router.get('/registro', (req, res) => {
    res.render('registro');
});

// rota de registro de novo usuário
router.post('/registro', async (req, res) => {
    try {
        const { first_name, last_name, email, age, senha } = req.body;
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).send('E-mail já cadastrado.')
        };

        const newUser = new User({ first_name, last_name, email, age, senha });
        await newUser.save();

        return res.render('login', { message: 'Registro bem-sucedido! Faça login para validar sua conta e continuar.'})
    } catch (error) {
        console.error('Erro ao efetuar registro: ', error);
        res.status(500).send('Falha sistêmica.');
    }
});

// rota para obter usuários cadastrados
router.get('/users', checkAuthenticated, async (req, res) => {
    try {
        const users = await User.find();
        res.render('users', { users });
    } catch (error) {
        console.error('Erro ao executar pesquisa: ', error);
        res.status(500).send('Falha sistêmica.');
    }
});

// rota de atualização de usuários
router.put('/users/:id', checkAuthenticated, async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, age, senha } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate (id, { first_name, last_name, email, age, senha}, { new: true});
        
        res.render('perfil', { user: updatedUser });
    } catch (error) {
        console.error('Erro ao atualizar usuário: ', error);
        res.status(500).send('Falha sistêmica.')
    }
});

// rota de exclusão de usuários
router.delete('/users/:id', checkAuthenticated, async (req, res) => {
    const { id } = req.params;

    try {
        await User.findByIdAndDelete(id);
        res.redirect('/users');
    } catch (error) {
        console.error('Erro ao deletar usuário: '. error);
        res.status(500).send('Falha sistêmica.')
    }
});

module.exports = router;