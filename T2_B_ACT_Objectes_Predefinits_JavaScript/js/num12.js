let palabra = prompt("Introduce un texto");
let contenido = "";

if(palabra.length <= 10){
    window.alert(`El texto que has introducido es el siguiente: ${palabra}`);
}else{
    extraerCaracteres();
}

function extraerCaracteres(){
    let letras = palabra.split("");
    for(let i = 5; letras.length > i; i++){
        contenido += letras[i];
    }
    document.querySelector(".boxparraf").innerHTML = contenido;
    document.querySelector(".btnr").innerHTML = "Actualizar Pagina"
}

const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
    location.reload();
})

// Eliminando los datos del foco
let eliminarDatos = document.querySelector("div.foco");
eliminarDatos.innerHTML = ``;

