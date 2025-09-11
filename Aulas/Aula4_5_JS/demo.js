// npm install prompt-sync

const prompt = require('prompt-sync')();

let nomeAdivinha = 'Diogo';

function adivinhaONome(nomeAdivinha) {
    let nomeAdivinhado = prompt('Adivinhe o nome: ');
    if (nomeAdivinhado === nomeAdivinha) {
        console.log('Parabéns! Você adivinhou o nome.');
    } else {
        console.log('Que pena! Tente novamente.');
    }
}

adivinhaONome(nomeAdivinha);