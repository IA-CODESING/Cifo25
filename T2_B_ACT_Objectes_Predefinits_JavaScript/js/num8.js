const hdecimals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];


function generateRandomColor(hdecimals) {
    let bgColor = "#";

    for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hdecimals.length);
    bgColor += hdecimals[index];
    }
    return bgColor;
}

function changeBgColor() {
    const color = generateRandomColor(hdecimals);
    document.body.style.backgroundColor = color;
}

function changeTextColor(){
    const textColor = generateRandomColor(hdecimals);
    document.querySelectorAll(".boxtitle, .boxparraf").forEach(element => {
        element.style.color = textColor;
    });
}

setInterval(() =>{
    document.querySelector(".boxtitle").innerHTML = "Esto es un nuevo titulo";
    changeBgColor();
    changeTextColor();
}, 2000);


// Eliminando los datos del foco
let eliminarDatos = document.querySelector("div.foco");
eliminarDatos.innerHTML = ``;