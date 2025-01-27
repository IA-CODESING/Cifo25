import { reload } from "./library.js";
reload;

//  ! Crea y vincula con HTML un nuevo documento JavaScript con el nombre “numeroMayor.js” que solicite números al usuario (por “prompt()”) mientras el usuario no introduzca un número superior a 50. Si el usuario introduce un número superior o igual a 50 debe mostrar un “alerta ()” con un mensaje que indique cuántas veces se ha introducido un número menor a 50.


let num1 = 0; 
while (num1 <= 50) {
    num1 = Number(prompt("Introduce un número:")); 
    if (num1 > 50) {
        break; 
    }
    console.log(num1); 
}
// console.log("El bucle ha terminado porque introdujiste un número mayor a 50.");
document.querySelector(".jsinfo").innerHTML = `El bucle ha terminado porque el ${num1} es mayor a 50`;

