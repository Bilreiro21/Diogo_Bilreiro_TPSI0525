const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número:"));
let primo = true;

if (num < 2) {
  primo = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      primo = false;
      break;
    }
  }
}

if (primo) {
  console.log("É primo");
} else {
  console.log("Não é primo");
}
