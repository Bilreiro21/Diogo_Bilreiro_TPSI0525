let contador = 0;
let numAtual = 2;

while (contador < 10) {
  let ehPrimo = true;

  for (let i = 2; i < numAtual; i++) {
    if (numAtual % i === 0) {
      ehPrimo = false;
      break;
    }
  }

  if (ehPrimo) {
    console.log(numAtual);
    contador++;
  }

  numAtual++;
}
