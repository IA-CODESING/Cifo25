const btn = document.querySelectorAll("button");
const img = document.querySelector(".foco img");

btn.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        const captura = e.target.textContent;

        if (captura === "Apagar") {
            img.src = "/T2_B_ACT_Objectes_Predefinits_JavaScript/img/apagada.gif";
        } else if (captura === "Encender") {
            img.src = "/T2_B_ACT_Objectes_Predefinits_JavaScript/img/encendida.gif";
        }
    });
});


// Eliminando los datos del foco
let eliminarDatos = document.querySelector("div.foco");
eliminarDatos.innerHTML = ``;