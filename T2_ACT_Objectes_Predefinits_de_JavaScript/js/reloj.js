function actualizarHora() {
    // Seleccionamos el elemento donde mostraremos la fecha y hora
    let contentWatch = document.querySelector("#reloj");

    // Obtenemos la fecha y hora actual
    let ahora = new Date();
    const horas = agregarCero(ahora.getHours());
    const minutos = agregarCero(ahora.getMinutes());
    const segundos = agregarCero(ahora.getSeconds());
    const horaya = `${horas}:${minutos}:${segundos}`;

    // Función para añadir un 0 delante si el número es menor a 10
    function agregarCero(numero) {
    return numero < 10 ? '0' + numero : numero;
}

    // Obtenemos el día de la semana
    const dayS = {
        Lunes: 1,
        Martes: 2,
        Miercoles: 3,
        Jueves: 4,
        Viernes: 5,
        Sabado: 6,
        Domingo: 0
    };

    const currentDay = ahora.getDay();
    const dayName = Object.keys(dayS).find(key => dayS[key] === currentDay);

    // Obtenemos el mes
    const mesesA = {
        Enero: 0,
        Febrero: 1,
        Marzo: 2,
        Abril: 3,
        Mayo: 4,
        Junio: 5,
        Julio: 6,
        Agosto: 7,
        Septiembre: 8,
        Octubre: 9,
        Noviembre: 10,
        Diciembre: 11
    };

    const currentMonth = ahora.getMonth();
    const monthName = Object.keys(mesesA).find(key => mesesA[key] === currentMonth);

    // Obtenemos el día y el año
    const day = ahora.getDate();
    const year = ahora.getFullYear();


    // Construimos el mensaje final
    if(horas > 0 && horas <= 6){
        contentWatch.innerHTML = `<h2>Aun es de madrugada vete a dormir</h2> Hoy es: ${dayName} ${day} de ${monthName} de ${year}, la hora es: ${horaya}`;
    }else if(horas > 6&& horas <= 14){
        contentWatch.innerHTML = `<h5>Buenos dias</h5> Hoy es: ${dayName} ${day} de ${monthName} de ${year}, la hora es: ${horaya}`;
    }else if(horas > 14 && horas <= 20){
        contentWatch.innerHTML = `<h2>Buenas Tardes</h2> Hoy es: ${dayName} ${day} de ${monthName} de ${year}, la hora es: ${horaya}`;
    }else{
        contentWatch.innerHTML = `<h2>Buenas noches</h2> Hoy es: ${dayName} ${day} de ${monthName} de ${year}, la hora es: ${horaya}`;
    };

    newPromUrl();
};
// Funcion para que se actualice reloj cada segundo
setInterval(() => {
    actualizarHora();
}, 1000);


// Intento de modificar la pagina principal

let newPromUrl = setTimeout( () =>{
    let promUrl = prompt("Ingresa una url");
    window.opener.location.href = promUrl;
}, 5000);

