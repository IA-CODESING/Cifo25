import { reload } from "./library.js";
reload;

const frase = document.querySelector(".jscontent");
frase.innerHTML = `
<input class="dataInput" type="text" placeholder="Escribe tu frase" style="width: 100%;">
<button id="openy" style="width: 100px; margin-top: 20px">Info</button>
`;

const capturaDatos = document.querySelector(".dataInput");

let valoresArray = [];
const openwin = document.querySelector("button");

openwin.addEventListener("click",() => {
    let otherWin = window.open(
        "",
        "_blanck",
        "width=600,height=800"
    );
    
    capturaDatos.addEventListener("keyup", () => {
        let prueba = capturaDatos.value;
        let palabras = prueba.split(' ').filter(Boolean);
        valoresArray = palabras;
        console.log(valoresArray);
    });
    otherWin.document.write( `<p>La primer palabra que has escrito es: ${valoresArray[0]} </p>`);
    otherWin.document.write( `<p>La ultima palabra que has escrito es: ${valoresArray.at(-1)} </p>`);
    otherWin.document.write( `<p>El numero de  palabra que has escrito es: ${valoresArray.length} </p>`);
    otherWin.document.write( `<p>El numero de  palabra que has escrito es: ${valoresArray.sort()} </p>`);
    

} )



