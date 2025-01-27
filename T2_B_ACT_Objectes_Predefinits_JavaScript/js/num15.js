const baseTriangulo = Number(prompt("Ingresa la base del triángulo:"));
const alturaTriangulo = Number(prompt("Ingresa la altura del triángulo:"));
const calcular = (baseTriangulo * alturaTriangulo) / 2;

if (isNaN(baseTriangulo) || isNaN(alturaTriangulo) || baseTriangulo <= 0 || alturaTriangulo <= 0) {
    document.write("<h2>Por favor, ingresa valores numéricos válidos mayores a 0.</h2>");
} else {
    let myWin = window.open("../html/num15.html", "_blanc");
    myWin.document.write(`<h2>La respuesta a tu solicitud es: ${calcular}</h2>`);
}
reload.addEventListener("click", () => {
    location.reload();
});

// Eliminando los datos del foco
let eliminarDatos = document.querySelector("div.foco");
eliminarDatos.innerHTML = ``;