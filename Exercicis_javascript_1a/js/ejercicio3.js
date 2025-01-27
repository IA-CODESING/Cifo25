import { reload } from "./library.js";
reload;

//  ! Realiza un programa que nos pida por pronto una nota de un alumno entre 0 y 10 puntos, recogerá la nota y nos dirá:
// * 1- Suspense (entre 0 y menos que 5)
// * 2- Aprobado (entre 5 y menos que 6)
// * 3-Bien (entre 6 y menos que 7)
// * 4- Notable (entre 7 y menos que 9)
// * 5- Excelente (de 9 a 10 incluidos)

let nota1 = Number(prompt("Introduce una nota (entre 0 y 10):"));


if (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
    document.querySelector(".jsinfo").innerHTML = "Por favor introduce un número válido entre 0 y 10.";
} else {
    if (nota1 >= 0 && nota1 <= 5) {
        document.querySelector(".jsinfo").innerHTML = "Suspendido";
    } else if (nota1 > 5 && nota1 <= 6) {
        document.querySelector(".jsinfo").innerHTML = "Aprobado";
    } else if (nota1 > 6 && nota1 <= 7) {
        document.querySelector(".jsinfo").innerHTML = "Bien";
    } else if (nota1 > 7 && nota1 < 9) {
        document.querySelector(".jsinfo").innerHTML = "Notable";
    } else if (nota1 >= 9 && nota1 <= 10) {
        document.querySelector(".jsinfo").innerHTML = "Excelente";
    }
};

