import { reload } from "./library.js";
reload;

const creandoinput = document.querySelector(".jsinfo");
creandoinput.innerHTML = `
<input class="dataInput" type="text" placeholder="Introduce un Numero">
<button id="validar">validar</button>
`;

const button = document.querySelector("#validar");
button.addEventListener('click', () => {
    const datos = document.querySelector(".dataInput").value;
    const convert = Number(datos)
    if(isNaN(convert)){
        window.alert("Escribe un numero");
    }else if(convert % 2 === 0){
        window.alert("Es par");
    }else{
        window.alert("Es impar");
    };
    
})

