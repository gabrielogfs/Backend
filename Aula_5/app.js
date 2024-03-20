// Require do módulo salvarUsuario.js
const salvarUsuario = require('./salvarUsuario');

// Chamar a função para salvar um novo usuário
salvarUsuario('Gabriel', 'senha123');

const validarUsuario = require('./validarUsuario');

validarUsuario('Gabriel', 'senha123');