import { reload } from "./library.js";
reload;

const problema = document.querySelector(".boxparraf"). innerHTML = `A partir del mètode bgColor del document, construeix una funció que en carregar un html permeti en un select, seleccionar un color de quatre i amb un botó que rasigni a la pàgina aquest color de forndo.`;
const cajaColores = document.querySelector(".jsinfo");

function cargarCaja(){
    cajaColores.innerHTML = `
    <select name="colores" id="bgcolors" class="bgcolors">
        <option value="blue">Azul</option>
        <option value="red" >rojo</option>
        <option value="yellow" >amarillo</option>
        <option value="pink" >rosa</option>
    </select>
    `;
}
cargarCaja();

const colorAdd = document.querySelector("#bgcolors");
colorAdd.addEventListener( 'click', () => {
    const eleccion = document.querySelector("#bgcolors").value;
    document.body.style.backgroundColor = eleccion;
})