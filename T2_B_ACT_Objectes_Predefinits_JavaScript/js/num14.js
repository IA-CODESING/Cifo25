let textos = prompt("Ingresa 4 frases separadas por ',");
let arraytext = textos.split(",");
let vl1 = arraytext[0].trim();
let vl2 = arraytext[1].trim();
let vl3 = arraytext[2].trim();
let vl4 = arraytext[3].trim(); 

if(arraytext.length > 4){
    window.alert(`1- debes introducir 4 o mas fraces separadas por una ","`)
}else{
    document.querySelector(".jscontent").innerHTML = `
    <table style="border-collapse: collapse; width: 100%; text-align: left; color: #fff;">
        <tr>
            <th>${vl1}</th>
            <th>${vl2}</th>
        </tr>
        <tr>
            <td>${vl3}</td>
            <td>${vl4}</td>
        </tr>
    </table>
    `;
};

const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
    location.reload();
});

// Eliminando los datos del foco
let eliminarDatos = document.querySelector("div.foco");
eliminarDatos.innerHTML = ``;