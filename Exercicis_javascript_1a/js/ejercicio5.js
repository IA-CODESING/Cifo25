import { reload } from "./library.js";
reload;

//  ! Crea y vincula con un HTML un nuevo documento JavaScript con el nombre “ejercicioSupInf.js” que solicite dos números al usuario mediante dos “prompt()” Y muestre un “alert()” indicando cuál de los dos es superior y qué inferior a menos que los dos sean iguales, en tal caso debe indicar que ambos son iguales. En todos los casos deben mostrarse los números introducidos.

let num1 = Number(prompt("Introduce el primer numero"));
let num2 = Number(prompt("Introduce el segundo numero"));

if(num1 === num2){
    document.querySelector(".jsinfo").innerHTML = `El numero ${num1} es igual al ${num2}`
}else if(num1 > num2){
    document.querySelector(".jsinfo").innerHTML = `El numero ${num1} es mayor al ${num2}`
}else{
    document.querySelector(".jsinfo").innerHTML = `El numero ${num1} es menor al ${num2}`
};