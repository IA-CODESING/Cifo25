
const btnEscucha = document.querySelector(".btnr");
btnEscucha.addEventListener('click', () => {
    let nuevaVentana = window.open(
        './html/num11.html',
        '_blank', 
        `resizable=0, width=600, height=800`);
    });
    
    // Eliminando los datos del foco
let eliminarDatos = document.querySelector("div.foco");
eliminarDatos.innerHTML = ``;