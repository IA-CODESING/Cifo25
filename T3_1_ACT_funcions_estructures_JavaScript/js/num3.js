import { reload } from "./library.js";
reload;

const segudnoInput = document.querySelector(".jsinfo");
segudnoInput.innerHTML = `
<input class="dataInput" type="text" placeholder="Escribe el precio sin IVA">
<input class="segundoinput" type="text" placeholder="Escribe el IVA">
<button id="calcular">Calcular</button>
`;

const button = document.querySelector("#calcular");
    button.addEventListener("click", () => {
        const datos = {
            sinIva: document.querySelector(".dataInput").value,
            iVa: document.querySelector(".segundoinput").value
        };
        let resultado = Number(datos.sinIva) * ( 1 + (Number(datos.iVa) / 100));
        window.alert(`El precio total con Iva es de: ${resultado.toFixed(2)}€`);
    });

