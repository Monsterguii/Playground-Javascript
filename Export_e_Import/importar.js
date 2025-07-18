const {gets, prints, pessoa} = require('./exportado.js');

console.log(gets());
prints('Texto de exemplo para imprimir.');

const { nome } = pessoa;
console.log(`Nome: ${nome}`);