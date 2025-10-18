const prompt = require("prompt-sync")();

let num = parseInt(prompt("Digite um número:"));
let perfeitos = 0;

for (let n = 1; n <= num; n++) {
  let somaDiv = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) somaDiv = somaDiv + i;
  }

  if (somaDiv === n) {
    console.log(n + " é perfeito");
    perfeitos++;
  }
}

console.log("Existem " + perfeitos + " números perfeitos até " + num);
