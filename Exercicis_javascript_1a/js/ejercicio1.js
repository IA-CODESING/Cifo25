import { reload } from "./library.js";
reload;

// ! Realiza un programa que solicite un número por prompt y escriba en la consola toda la cuenta hasta 0, con los Bucles For, con while y con Do While

// * FOR

// let num1 = Number(prompt("Escribe un numero"));
// let result = typeof num1;

// if (result === "number") {
//     for (let i = 0; i < num1; num1--){
//         document.querySelector(".jsinfo").innerHTML=`${num1}`
//         console.log(num1);
//     }
// }else{
//     console.log("Introduce un valor valido");
// }

// let num1 = Number(prompt("Escribe un número"));

// if (!isNaN(num1) && num1 > 0) { // Verificar que es un número positivo
//     let output = ""; // Variable para acumular los números
//     for (let i = num1; i > 0; i--) {
//         output += `${i} `; 
//     }
//     document.querySelector(".jsinfo").innerHTML = output; // Mostrar todos los números
// } else {
//     console.log("Introduce un valor válido");
// }

// * WHILE

// let num1 = Number(prompt("Escribe un número"));

// let output = "";
// while (!isNaN(num1) && num1 >= 0) {
//     output += `${num1--} `
//     document.querySelector(".jsinfo").innerHTML = output;
//     document.querySelector(".boxtitle").innerHTML = "WHILE";
// }

// * DO WHILE
// Configuramos para que sea un numero 
let num1 = Number(prompt("Escribe un número"));
// variable de control para almacenar datos
let output = "";

do {
    output += `${num1--} `
        document.querySelector(".jsinfo").innerHTML = output;
        document.querySelector(".boxtitle").innerHTML = "DOWHILE";
} while (!isNaN(num1) && num1 >= 0);
