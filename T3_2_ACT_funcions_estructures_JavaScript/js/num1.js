import { reload } from "./library.js";
reload;

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiemrbre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];


meses.forEach(mes => {
    document.querySelector(".jscontent").innerHTML += `
    <div>
    <p style="color: #fff";>${mes}</p>
    </div>
    
    `;
});

const alfabeticamente = meses.sort();
alfabeticamente.forEach(alf => {
    document.querySelector(".jscontent").innerHTML += `
    <div>
    <p style="color: #fff;">${alf}</p>
    </div>
    `;
})

const arrayCadena = meses.split(",");
console.log(arrayCadena);
console.log(meses);