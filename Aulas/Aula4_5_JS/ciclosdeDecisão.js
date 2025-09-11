// Ciclos de decisão (if, else)
// Exemplo de uso do if e else

let Num1 = 1;
let Num2 = 1;

if (Num1 > Num2) {
    console.log('Maior entre Num1 e Num2 é: ' + Num1);
} else if (Num1 === Num2) {
    console.log("Num1 é igual a Num2");
} else {
    console.log('Maior entre Num1 e Num2 é: ' + Num2);
}

// Switch

switch (opc) {
    case 1:
        console.log('esc 1');
    break;

    case 2:
        console.log('esc 2');
    break;

    case 3:
        console.log('esc 3');
    break;
    default:
        console.log('Default');
    break;
}