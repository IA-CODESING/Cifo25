import { reload } from "./library.js";
reload;

//  ! Realiza otro programa que nos pida por pronto una nota de un alumno entre 0 y 10 puntos, después otra y devuelva la nota media de los dos ejercicios con los mismos parámetros que el programa anterior.

let nota1 = Number(prompt("Introduce una nota (entre 0 y 10):"));
let nota2 = Number(prompt("Introduce una nota (entre 0 y 10):"));
let promedio = (nota1 + nota2) / 2;

if(nota1 <0 || nota1 >10 || nota2 < 0 || nota2 >10){
    document.querySelector(".jsinfo").innerHTML = "Por favor introduce un número válido entre 0 y 10.";
    }else if (promedio >= 0 && promedio <= 5) {
        document.querySelector(".jsinfo").innerHTML = `has suspendido con ${promedio}`;
    } else if (promedio > 5 && promedio <= 6) {
        document.querySelector(".jsinfo").innerHTML = `has Aprobado con ${promedio}`;
    } else if (promedio > 6 && promedio <= 7) {
        document.querySelector(".jsinfo").innerHTML = `has sacado un Bueno con ${promedio}`;
    } else if (promedio > 7 && promedio < 9) {
        document.querySelector(".jsinfo").innerHTML = `has sacado un Notable con ${promedio}`;
    } else if (promedio >= 9 && promedio <= 10) {
        document.querySelector(".jsinfo").innerHTML = `has sacado un Excelente con ${promedio}`;
    };