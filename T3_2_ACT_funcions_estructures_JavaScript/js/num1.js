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

const meses2 = [
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

const alfabeticamente = meses2.sort();
alfabeticamente.forEach(alf => {
    document.querySelector(".jscontent").innerHTML += `
    <div>
    <p style="color: #fff;">${alf}</p>
    </div>
    `;
})


const meses3 = [
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
let prueba = meses3.join("-");
document.querySelector(".jscontent").innerHTML += `
<div>
<p style="color: #fff;">${prueba}</p>
</div>
`;

const meses4 = [
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
let inverso = meses4.reverse();
document.querySelector(".jscontent").innerHTML += `
<div>
<p style="color: #fff;">${inverso}</p>
</div>
`;


const meses5 = [
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
let prueba2 = meses5.join("*_*");
document.querySelector(".jscontent").innerHTML += `
<div>
<p style="color: #fff;">${prueba2}</p>
</div>
`;