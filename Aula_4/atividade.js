const fs = require('fs');

// Cria o com um texto simples de saudação
fs.writeFileSync('./teste.txt', 'Olá, como vai você ? Gostaria de saber a data e horário ?');

// Obtém a data e hora atual
let data = new Date();

// Formata a data e hora para o padrão do Brasil
let dataFormatada = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/Sao_Paulo',
  }).format(data);

  //Caso o arquivo acima tenha sido criado adiciona um novo conteúdo
if (fs.existsSync('teste.txt')) {
  // Lê o conteúdo do arquivo
  let conteudo = fs.readFileSync('teste.txt', 'utf-8');

  // Adiciona a data ao conteúdo do arquivo txt
  conteudo += ` - ${dataFormatada}\n`;

  // Escreve o conteúdo de volta no arquivo
  fs.writeFileSync('teste.txt', conteudo);

  // Lê o conteúdo atualizado
  conteudo = fs.readFileSync('teste.txt', 'utf-8');
  console.log(conteudo);

  // Remove o arquivo
  fs.unlinkSync('teste.txt');
};

function solveMeFirst (a, b) {
  a = 7
  b = 3
  return a + b
}

solveMeFirst()
