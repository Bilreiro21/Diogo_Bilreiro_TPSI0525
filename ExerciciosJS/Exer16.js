const prompt = require("prompt-sync")();

let somaPares = 0; // Variável para armazenar a soma dos números pares  
let contadorPares = 0;

while (contadorPares < 30) {
    let num = parseInt(prompt("Digita um número par entre 1 e 50:"));

    if (num >= 1 && num <= 50 && num % 2 === 0) {
        somaPares += num; // Adiciona o número par à soma
        contadorPares++; // Incrementa o contador de números pares
    } else {
        console.log("Número inválido. Por favor, digite um número par entre 1 e 50.");
    }   
}

console.log("Media = " + (somaPares / 30)); // Calcula e exibe a média dos números pares
