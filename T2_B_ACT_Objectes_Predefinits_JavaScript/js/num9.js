// Programo para que se autoinicie
setInterval(()=>{
    // Creo el objeto con los datos a cargar
    const datos= { 
    anchoPantall: screen.width,
    anchoPantallUtil: screen.availWidth,
    altoPantall: screen.height,
    altoPantallUtil: screen.availHeight,
};

// Contendor de los datos
const contentData = document.querySelector(".jscontent");

// Asigno valors a la informacion:

const valuesData = [
    {label: "Ancho de la pantalla", value: datos.anchoPantall},
    {label: "Ancho Util de la pantalla", value: datos.anchoPantallUtil},
    {label: "alto de la pantalla", value: datos.altoPantall},
    {label: "alto Util de la pantalla", value: datos.altoPantallUtil}    
];

// Creo las filas
let infoData = `<h4></h4>
<p></p>`;

// Recorro y relleno los datos

valuesData.forEach(item => {
    infoData += `<h4>${item.label}</h4>
    <p>${item.value}</p>`
});

contentData.innerHTML = infoData;
}, 1000);

const reload = document.querySelector("#reload");
reload.addEventListener("click", (_) => {
        location.reload();
});

// Eliminando los datos del foco
let eliminarDatos = document.querySelector("div.foco");
eliminarDatos.innerHTML = ``;