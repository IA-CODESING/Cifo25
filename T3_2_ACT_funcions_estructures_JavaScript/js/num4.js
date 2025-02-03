import { reload, mostrarInfo, apartado } from "./library.js";
reload;

apartado.innerHTML = `Escriu un html que ens permeti mitjançant una funció mostrar les dades d'un array associatiu d'una persona amb les dades següents </br> 
a- Nom  </br> 
b- Cognom   </br>
c- Edat   </br>
d- DNI </br>`

const data = [
    {codigo: "A", nombre: "Juan", apellido: "Ramirez", edad: 32, dni: "78451245A"}
];

function pedirInfo(){
let dato = prompt("Ingresa A, B, C o D para obtener la información");
let convert = dato.toUpperCase();

    switch (convert) {
        case "A" :
            mostrarInfo.innerHTML = `<p style ="color: #fff; ">El nombre es: ${data[0].nombre}</p>`
            break;
        case "B" :
            mostrarInfo.innerHTML = `<p style ="color: #fff; ">El Apellido es: ${data[0].apellido}</p>`
            break;
        case "C" :
            mostrarInfo.innerHTML = `<p style ="color: #fff; ">La edad es: ${data[0].edad}</p>`
            break;
        case "D" :
            mostrarInfo.innerHTML = `<p style ="color: #fff; ">El DNI es: ${data[0].dni}</p>`
            break;

        default:
            mostrarInfo.innerHTML = `<p style="color: #fff;">Ingresa una letra correcta</p>`
            break;
    }
};

pedirInfo();