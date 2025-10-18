const prompt = require('prompt-sync')();

let n;

do {
    n = parseInt(prompt("Digita um número entre 1 e 100:"));
} while (n < 1 || n > 100);

console.log("Número válido: " + n);