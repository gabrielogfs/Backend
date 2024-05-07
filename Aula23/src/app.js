const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

const petsRouter = require('./router/pets.router');
app.use('/', petsRouter);

app.listen(8080, () => console.log('Servidor rodando na porta 8080.'));