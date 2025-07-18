const { gets, prints} = require('./funcoes_auxiliares.js');
const readline_sync = require('readline-sync');


for(let i  = 0; i < 4; i++) {
    const n = readline_sync.questionInt('Digite um número: ');
    gets(n);
}

prints();