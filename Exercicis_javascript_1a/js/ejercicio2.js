import { reload } from "./library.js";
reload;

//  ! Realiza un programa que solicite un número por prompt y escriba en la consola su factorial completo con do while, for y while

// Solicitar un número al usuario mediante prompt
let numero = parseInt(prompt("Ingresa un número para calcular su factorial:"));

// Validar que el número ingresado sea un entero positivo
while (isNaN(numero) || numero < 0) {
    numero = parseInt(prompt("Por favor, ingresa un número entero positivo:"));
}

// Calcular el factorial usando do while
let resultadoDoWhile = 1;
let i = 1;
do {
    resultadoDoWhile *= i;
    i ++;
} while (i <= numero);

document.querySelector(".boxtitle").innerHTML = `Factorizar un numero`
document.querySelector(".jsinfo").innerHTML = `Factorial de ${numero} usando do while: ${resultadoDoWhile}`

// // Calcular el factorial usando for
// let resultadoFor = 1;
// for (let j = 1; j <= numero; j++) {
//     resultadoFor *= j;
// }
// console.log(`Factorial de ${numero} usando for: ${resultadoFor}`);

// // Calcular el factorial usando while
// let resultadoWhile = 1;
// let k = 1;
// while (k <= numero) {
//     resultadoWhile *= k;
//     k++;
// }
// console.log(`Factorial de ${numero} usando while: ${resultadoWhile}`);

