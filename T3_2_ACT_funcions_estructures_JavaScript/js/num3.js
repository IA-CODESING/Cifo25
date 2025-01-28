import { reload } from "./library.js";
reload;

const datosDNI = [
    {Nombre: "Juancito"},
    {Apellido: "Gutierrez"},
    {Edad: 28},
    {dni: "12345678Z"}
];

const mostrarDatos = document.querySelector(".jscontent");

datosDNI.forEach((dat, index) => {
    const nombre = datosDNI[0].Nombre;
    const apellido = datosDNI[1].Apellido;
    const edad = datosDNI[2].Edad;
    const dni = datosDNI[3].dni;

    mostrarDatos.innerHTML += `<p style="color:white;">Este usuario está asignado a: ${nombre} ${apellido} de ${edad} años y con DNI: ${dni}</p>`;
});