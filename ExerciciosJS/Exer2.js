const prompt = require('prompt-sync')();

for (let i = 1; i <= 10; i++) {
  let num = parseInt(prompt("Digite o " + i + "º número:"));
  // Se o resto for 0, o número é par senão é ímpar.
  if (num % 2 === 0) {
    console.log(num + " é par");
  } else {
    console.log(num + " é ímpar");
  }
}
