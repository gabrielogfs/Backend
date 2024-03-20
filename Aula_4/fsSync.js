const fs = require('fs');
fs.writeFileSync('./FileSystem.txt', 'Hello, Coders! Estou em um arquivo');

if(fs.existsSync('teste.txt')) {
    let conteudo = fs.readFileSync('FileSystem.txt', 'utf-8');

    console.log(conteudo);
    fs.appendFileSync('teste.txt', '. Estou adicionando mais conteudo');

    conteudo = fs.readFileSync('teste.txt', 'utf-8');
    console.log(conteudo);

  // fs.unlinkSync('teste.txt');
}