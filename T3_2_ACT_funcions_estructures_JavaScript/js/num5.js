import { reload, mostrarInfo, apartado } from "./library.js";
reload;
apartado.innerHTML = ` Escriu un prrograma que ens permeti introduir en inputs de text, Nom, Cognoms, edat i DNI, validi els imputs i ho emmagatzemi en un array amb aquests índexs de posició. els mostri en un div, i permeti afegir tants persones com faci falta, eliminar l’últim, o borrar tots`

mostrarInfo.innerHTML = `
<div id="containerl" style="margin: 2rem auto; color:white;">
    <h2>Clicka sobre el boton para añadir mas elementos a la lista</h2>
        <ul id="lista" style="display:flex; flex-direction:column; margin: 2rem auto">

        </ul>
        <div style="margin: 1rem;">
            <input type="text" class="" name="nombre" id="nombre" placeholder="Nombre"/>
            <input type="text" class="" name="apellido" id="apellido" placeholder="Apellido"/>
            <input type="text" class="" name="edad" id="edad" placeholder="Edad"/>
            <input type="text" class="" name="dni" id="dni" placeholder="DNI"/>
        </div>

    <input id="more" type="button" class="w3-button w3-white w3-border" value="Añadir elemento" />
    <input id="less" type="button" class="w3-button w3-white w3-border" value="Borrar ultimo elemento" />

    <button id="borrar_nuevos">Borra todo</button>
</div>
`

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
let edad = document.querySelector("#edad");
const dni = document.querySelector("#dni");
const listado = document.querySelector("#lista");
const borrar_nuevos = document.querySelector("#borrar_nuevos");
let contador = 0;
const dnivalidator = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
// const nievalidator = `^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$`


const addMore = document.querySelector("#more");
addMore.addEventListener("click", () => {

// if(nombre.value === ""  || apellido.value === ""  || dni.value === "" || !dnivalidator.test(dni.value) || edad.value < 0 || edad.value > 100 || edad.value === "" || isNaN(edad.value)){
//     console.log("debes rellenar todos los campos correctamente");
// Meter un switch para indicar que valor es el que esta incorrecto y ponerle que haga un focus rojo
// }else{
    const  arrayDatos = [nombre.value, apellido.value, edad.value, dni.value];
    let elementList = document.createElement("li"); 
    let contentElement = document.createTextNode(`Nombre: ${arrayDatos[0]} Apellido: ${arrayDatos[1]} Edad: ${arrayDatos[2]} DNI: ${arrayDatos[3]}`);
    
    listado.appendChild(elementList);
    elementList.appendChild(contentElement);
    contador++;
// };

    const removeLast = document.querySelector("#less");
    removeLast.addEventListener("click", () => {
        // const listado = document.querySelector("#lista");
        console.log(listado);
        let prueba = listado.lastChild;
        console.log(prueba);
 
    
    });

});

