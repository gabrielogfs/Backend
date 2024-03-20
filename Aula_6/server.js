const http = require('http');
const server = http.createServer((req, res) => {

    res.end('Este é meu primeiro Olá Mundo neste backend!')
});

server.listen(8080, () => {
    console.log(`Servidor rodando na porta 8080.`);
});