const prompt = require("prompt-sync")();

let n = parseInt(prompt("Digita um número: "));
let contador = 0;

for (let i = 1; i <= n; i++) {
    console.log(n + " + " + i + " = " + (n + i));
    console.log(n + " - " + i + " = " + (n - i));
    console.log(n + " * " + i + " = " + (n * i));
    console.log(n + " / " + i + " = " + (n / i));
    contador = contador + 4;
}

console.log("Total de operações: " + contador);