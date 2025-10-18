const prompt = require('prompt-sync')();

let numDiv = parseInt(prompt("Digita um número: "));
let total = 0;

for (let i = 1; i <= numDiv; i++) {
    if (numDiv % i === 0) {
        total++;
    }
}

console.log("Tem " + total + " divisores.");