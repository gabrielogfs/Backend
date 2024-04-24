const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')

const app = express();

// config handlebars
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use(express.static('/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://gabrielogbusiness:Dudu1724@codercluster.aqnl5li.mongodb.net/',
        ttl: 15
    }),
    secret: '123',
    resave: false,
    saveUninitialized: false,
}));

// rotas
const userRouter = require('./routes/user.router');
const sessionRouter = require('./routes/session.router');
app.use('/', userRouter);
app.use('/', sessionRouter);

// conexão Mongo

mongoose.connect('mongodb+srv://gabrielogbusiness:Dudu1724@codercluster.aqnl5li.mongodb.net/')
.then(() => console.log('Conexão com o MongoDB realizada com sucesso.'))
.catch(error => console.log('Erro ao conectar-se ao MongoDB: ', error));

app.listen(8080, () => console.log('Servidor rodando na porta 8080.'))