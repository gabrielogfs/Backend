const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

// Cria uma rota para o método GET na rota '/saldar'
app.get('/bemvindo', (req, res) => {

    
    res.send('<p style="color: blue";>Bem vindo!</p>');
});

app.get('/usuario', (req, res) => {

    const usuario = {
        nome: "Gabriel",
        idade: 24,
        signo: "Câncer",
    }

    res.send(usuario);
});

// Inicia o servidor e o faz escutado na porta definida
app.listen(8080, () => {
    console.log("Servidor Express rodando na porta 8080.")
});