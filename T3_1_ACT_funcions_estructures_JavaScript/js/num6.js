import { reload } from "./library.js";
reload;

const problema = document.querySelector(".boxparraf"). innerHTML = `Crea un nou document HTML amb una funció que ens mostri l'amplada de pantalla, alt de pantalla, amplada útil, alt útil, profunditat de color i diagonal de pantalla en píxels i ens ho mostri en un div en accionar un hiperenllaç.`;

const datos = document.querySelector(".jsinfo");
const creandoBtn = document.querySelector(".jscontent").innerHTML = ` <a style="color: #fff;" class="btncalle" href="#">Ver datos</a>`;
const btncall = document.querySelector(".btncalle");


const info = {
    ancho : screen.width,
    alto : screen.height,
    anchoutil : screen.availWidth,
    profundidadColor : screen.colorDepth,
    diagonal : Math.sqrt(Math.pow(screen.width, 2) + Math.pow(screen.height, 2))
};


btncall.addEventListener("click", () => {
    datos.innerHTML = `
        <p>El ancho de la pantalla es: ${info.ancho}</p>
        <p>El alto de la pantalla es: ${info.alto}</p>
        <p>El ancho util de la pantalla es: ${info.anchoutil}</p>
        <p>La profundad de color de la pantalla es: ${info.profundidadColor}</p>
        <p>La diagonal de la pantalla en pixeles es: ${info.diagonal.toFixed(2)}</p>
    `;
})
