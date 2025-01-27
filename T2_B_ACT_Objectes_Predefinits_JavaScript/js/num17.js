// Eliminando los datos del foco
let eliminarDatos = document.querySelector("div.foco");
eliminarDatos.innerHTML = ``;

// variables
let titulo = "FIN DEL MUNDO";
let texto = `La interpretación más dramática anunciaba que el 21 de diciembre de 2012 se produciría la colisión de la Tierra con otro cuerpo celeste, o que el planeta sería atrapado por un agujero negro, o que tal vez se “incendiaría” debido a una actividad solar sin precedentes. Qué dijo la NASA y los que se prepararon para el trágico final

La interpretación más dramática de una profecía supuestamente oculta en el calendario maya aseguraba que el mundo iba a terminar de manera apocalíptica hace exactamente nueve años, el 21 de diciembre de 2012, en el momento justo del solsticio de invierno en el hemisferio norte a las 12 y 12, hora del Tiempo Universal Coordinado (UTC), correspondiente a las 11.30 marcadas por reloj del meridiano de Greenwich.
`;
let imagenmaya = document.querySelector(".jscontent");

// seleccion de elementos DOM
document.querySelector("p.boxparraf").innerHTML = texto;
document.querySelector("h1.boxtitle").innerHTML = titulo;

// Modificador de elementos
imagenmaya.innerHTML = `<img src="./img/imgmaya.avif" style="width: 100%; margin: 0 auto;"/>`


function calculotiempoMaya() {

    const fechaMaya = new Date('2012-12-21T11:30:00Z');


    const fechaActual = new Date();

    const difMilisegundos = fechaActual - fechaMaya;

    function agregarCero(numero) {
        return numero < 10 ? '0' + numero : numero;
    };

    const dia = agregarCero(fechaActual.getDate())
    const mes = agregarCero(fechaActual.getMonth() + 1); 
    const any = agregarCero(fechaActual.getFullYear());
    const horas = agregarCero(fechaActual.getHours());
    const minutos = agregarCero(fechaActual.getMinutes());
    const segundos = agregarCero(fechaActual.getSeconds());


    const diaSem = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const diaSemana = diaSem[fechaActual.getDay()];

    // document.querySelector("div.jsinfo").addClass("style='margin: 0 auto'")

    document.querySelector("div.jsinfo").innerHTML = `
    <table style="margin: 0 auto; text-align: left;">
    <tr style="padding: 2px;">
        <th>Concepto</th>
        <th>Información</th>
    </tr>
    <tr>
        <td>Tiempo transcurrido desde el 21 de Diciembre del 2012: </td>
        <td>${difMilisegundos}</td>>
    </tr>
    <tr>
        <td>Fecha actual</td>
        <td>${dia}/${mes}/${any}</td>>
    </tr>
    <tr>
        <td>Hora actual: </td>
        <td>${horas}:${minutos}:${segundos}</td>>
    </tr>
    <tr>
        <td>Dia de la Semana: </td>
        <td>${diaSemana}</td>>
    </tr>
    </table>
    `;
    
    // console.log(`Tiempo transcurrido desde el 21 de Diciembre del 2012: ${difMilisegundos} Milisegundos`);
    // console.log(`Fecha actual: ${dia}/${mes}/${any}`);
    // console.log(`Hora actual: ${horas}:${minutos}:${segundos}`);
    // console.log(`Dia de la Semana: ${diaSemana}`);
};

// Executar la funció
calculotiempoMaya();