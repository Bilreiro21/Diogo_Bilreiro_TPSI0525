let pares = 0;
let impares = 0;
let numero = 1;

while (pares < 30 || impares < 30) {
    if (numero % 2 === 0 && pares < 30) {
        console.log(numero);
        pares++;
    }
    else if (numero % 2 !== 0 && impares < 30) {
        console.log(numero);
        impares++;
    }
    numero++;
}