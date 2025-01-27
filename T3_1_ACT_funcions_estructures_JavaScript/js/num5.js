import { reload } from "./library.js";
reload;

const problema = document.querySelector(".boxparraf"). innerHTML = `Crea un nou document HTML que ens demani un nombre d'etiquetes a imprimir, i les imprimiu a la pàgina un llistat dels codis d'un producte inventat… codi_producte 0 , codi_producte 1…….`;

const peticion = document.querySelector(".jsinfo");
peticion.innerHTML = `
<input class="dataInput1" type="text" placeholder="Introduce el numero de etiquetas a generar"> 
<button id="generar">Generar</button>
<div class="resultado"></div>
`;

const button = document.querySelector("#generar");
button.addEventListener("click", () => {
    const valor = Number(document.querySelector(".dataInput1").value);
    for(let i = 1; i <= valor; i++){
        let numbramdom = Math.floor(Math.random() * 1000);
        let etiqueta = document.querySelector(".resultado");
        etiqueta.innerHTML += `<p>El codigo del producto ${i} es: 00000${numbramdom}</p>`;
    }
})