import { reload } from "./library.js";
reload;

const problema = document.querySelector(".boxparraf"). innerHTML = `Escriu un html que et demani per funció i des d'un camp de text, el resultat de dividir 144/12. Aquest resultat es calcula en una altra funció i recollit en aquesta primera per deixar passar l'usuari o no segons la resposta. Crea un botó per esborrar les dades`;

const respuesta = document.querySelector(".jsinfo");
respuesta.innerHTML = `
<input class="dataInput" type="text" placeholder="¿144/12?"> <button id="validar">validar</button>`;

const button = document.querySelector("#validar");
button.addEventListener('click', () => {
    const datos = document.querySelector(".dataInput").value;
    const convert = Number(datos)
    if(isNaN(convert)){
        window.alert("Escribe un numero");
    }else if(convert  !== 12){
        window.alert("vuelve a intentarlo");
    }else{
        window.alert("WIN haz ganado!!");
    };
    
});
