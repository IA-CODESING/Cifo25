import { reload } from "./library.js";
reload;

const problema = document.querySelector(".boxparraf"). innerHTML = `Escriu un programa que demani un primer número, ens permeti triar un select: suma, resta, multiplica, divideix, o mòdul, després ens demani un segon número i ens doni el resultat de l'operació seleccionada. Tot això amb camps de text i select.`;

const respuesta = document.querySelector(".jsinfo");
respuesta.innerHTML = `
<input class="dataInput1" type="text" placeholder="Introduce el primer numero"> 
<select name="cars" id="oper">
    <option class="suma" value="+">+</option>
    <option class="resta" value="-">-</option>
    <option class="multiplicacion" value="*">*</option>
    <option class="division" value="/">/</option>
    <option class="modulo" value="%">%</option>
</select>
<input class="dataInput2" type="text" placeholder="Introduce el segundo numero"> 
<p class="resultado"></p>
<button id="calcular">calcular</button>`;

let resultadoHtml = document.querySelector(".resultado");

const button = document.querySelector("#calcular");
button.addEventListener("click", () => {
     const operacion = document.querySelector("#oper").value;
     const valores = {
        dato1: document.querySelector(".dataInput1").value,
        dato2: document.querySelector(".dataInput2").value
    };

    let new1 = Number(valores.dato1);
    let new2 = Number(valores.dato2);

    if (isNaN(new1) || isNaN(new2)) {
        window.alert("Por favor, ingresa números válidos");
        return;
    }

    let resultado;
    switch (operacion) {
        case "+":
            resultado = new1 + new2;
            resultadoHtml.innerHTML = `El resultado de la suma es: ${resultado}`;
            break;
        case "-":
            resultado = new1 - new2;
            resultadoHtml.innerHTML = `El resultado de la resta es: ${resultado}`;
            break;
        case "*":
            resultado = new1 * new2;
            resultadoHtml.innerHTML = `El resultado de la multiplicación es: ${resultado}`;
            break;
        case "/":
            if (new2 === 0) {
                window.alert("No se puede dividir entre 0");
            } else {
                resultado = new1 / new2;
                resultadoHtml.innerHTML = `El resultado de la división es: ${resultado}`;
            }
            break;
        case "%":
            resultado = new1 % new2;
            resultadoHtml.innerHTML = `El resultado del resto es: ${resultado}`;
            break;
        default:
            window.alert("Selecciona una operación válida");
    }
});