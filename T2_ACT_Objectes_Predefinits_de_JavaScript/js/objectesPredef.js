// import { newpp } from "./reloj.js";

// cookies para clients
if(!document.cookie){
    window.confirm('Utilizamos cookies propias y de terceros para obtener datos estadísticos de navegación de nuestros clientes');
    }else{
    alert('Cookies NO disponibles');
    };

const titulo = prompt("Introduce un nuevo título para la página");
const titleUper = titulo ? titulo.toUpperCase() : '';  // Verifica si se ingresa algo
document.title = titleUper;


// const titleUper = "hola";  //! Eliminar despues esto y reactivar todo lo demas variable control para pruebas


// objeto con los valores de la tabla
const datos = {
    numeroMasGrandeJS: Number.MAX_SAFE_INTEGER,
    numeroPequeJs: Number.MIN_SAFE_INTEGER,
    altopantalla: window.innerHeight,
    anchopantalla: window.innerWidth,
    altoPagina: document.body.scrollHeight,
    anchoPagina: document.body.scrollWidth,
    locationPage: window.location,
    urlssad: window.location.pathname,
    aleatorio: Math.floor(Math.random() * 200), // Random entre 0 y 200
    sistemaOP: window.navigator.appVersion,
};

// Obtener el contenedor de la tabla
const tableContent = document.querySelector(".tableContent");
// asignamos valores a la tabla
const datosTabla = [
    { label: "Valor máximo que puede tener un número en JavaScript", value: datos.numeroMasGrandeJS },
    { label: "Valor mínimo que puede tener un número en JavaScript", value: datos.numeroPequeJs },
    { label: "Altura total de la pantalla", value: `${datos.altopantalla}px` },
    { label: "Anchura total de la pantalla", value: `${datos.anchopantalla}px` },
    { label: "Altura de la página web", value: `${datos.altoPagina} vh` },
    { label: "Anchura de la página web", value: `${datos.anchoPagina} vw` },
    { label: "URL de la página web", value: datos.locationPage },
    { label: "Nombre de la página web con su extensión (index.html)", value: titleUper},
    { label: "Nombre de la página web sin su extensión (index)", value: datos.urlssad },
    { label: "Un valor aleatorio entre 0 y 200 (utiliza Math)", value: datos.aleatorio },
    { label: "Sistema operativo del ordenador", value: datos.sistemaOP },
];

// Crear las filas de la tabla
let tableHTML = `<tr class="tables__titles">
    <th class="titletab">PROPIETAT</th>
    <th class="titletab">VALOR OBTINGUT AMB JS</th>
</tr>`;

// recorremos y rellenamos informacion obtenida desde el objeto anterior
datosTabla.forEach(item => {
    tableHTML += `<tr>
        <td class="titletab">${item.label}</td>
        <td class="titletab">${item.value}</td>
    </tr>`;
});

// Insertar el HTML en el contenedor
tableContent.innerHTML = tableHTML;

// Función para manejar el prompt y la ventana con todas sus configuraciones
document.querySelector("#btncoma2").addEventListener("click", (e) => {
    // variales globales dentro de la función
    let valor1;
    let valor2;
    // Prevenimos que se active el evento al clicar donde no es
    e.preventDefault();
    // solcitamos los datos
    let datosPromt = prompt("Introduce 2 datos separados por ','");
    let aer = datosPromt.split(',');
    
    // Verifica que se introduzcan exactamente 2 valores
    if (aer.length !== 2) {
        window.alert("Debes introducir exactamente 2 valores separados por coma.");
        return;
    }
    // capturo el key y elimino los espacios
        valor1 = aer[0].trim();
        valor2 = aer[1].trim();

        // Validaciones
        if (valor1.length < 3 || valor1.length > 20 || (valor2 !== "yes" && valor2 !== "no")) {
            window.alert(`1- Debes introducir un dato que contenga entre 3 y 20 valores sin espacios,
            2- Ingresar "yes" o "no".`);
        } else {
            // Abrimos la nueva ventana
            const nuevaVentana = window.open(
                './finestra.html',
                '_blank', 
                `resizable=0, width=${rdwf}, height=${rdhf}`
            );
            // Espera a que la nueva ventana se cargue y pasa los datos
            nuevaVentana.onload = () => {
                nuevaVentana.document.title = valor1; // Modifica el título de la página
            // Bloquear barras de desplazamiento ajustando el estilo 
            if(valor2 === "no"){
                nuevaVentana.document.body.style.overflow = 'hidden'; // Deshabilita desplazamiento
            };
            };
        };
});


// Funciones para parametrizar el width y heigth de la ventana ( que sean randoms)
function rdw(){
    const getRandomNumberw = (min, max) => {
        return Math.floor((Math.random() * (max - min) + min)) * 125;
    };
    // numero random entre 2 y 4
    const randomNumberw = getRandomNumberw(2, 4);
    return randomNumberw;
}
const rdwf = rdw();

function rdh(){
    const getRandomNumberh = (min, max) => {
        return Math.floor((Math.random() * (max - min) + min)) * 100;
    };
    
    // numero random entre 6 y 9
    const randomNumberh = getRandomNumberh(6, 9);
    return randomNumberh;
}
const rdhf = rdh();


