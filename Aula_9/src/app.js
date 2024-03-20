const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const _dirname = require('./utilis');


app.engine("handlebars", handlebars.engine());
app.set('views', _dirname+'/views');
app.set('view engine', 'handlebars');
app.use(express.static(_dirname+"/public"));

app.get("/", (req, res) => {
  console.log("Tá funcionando.");

  let usuarios = [
    {
      name: "Gabriel",
      lastname: "Oliveira",
      age: 24,
      email: "gabriel.email@email.com",
      phonenumber: "984062841",
      role: "admin"
    },
    {
      name: "Maria",
      lastname: "Santos",
      age: 25,
      email: "maria@example.com",
      phonenumber: "987654321",
      role: "user"
    },
    {
      name: "Pedro",
      lastname: "Souza",
      age: 35,
      email: "pedro@example.com",
      phonenumber: "246813579",
      role: "user"
    },
    {
      name: "Ana",
      lastname: "Oliveira",
      age: 28,
      email: "ana@example.com",
      phonenumber: "135792468",
      role: "user"
    },
    {
      name: "Lucas",
      lastname: "Ferreira",
      age: 40,
      email: "lucas@example.com",
      phonenumber: "369258147",
      role: "user"
    },
  ];

  let food = [
    {
        name: "Pizza", price: 20
    },
    {name: "Hamburger", price: 30}
  ]

  const aleatorio = Math.floor(Math.random() * usuarios.length);
  const random = usuarios[aleatorio];
  let isAdmin = random.role === "admin";

  res.render("usuarios",{usuario:random, isAdmin, food, style: "index.css" });

});

app.listen(8080, ()=>{console.log("Rodando na porta 8080.")});