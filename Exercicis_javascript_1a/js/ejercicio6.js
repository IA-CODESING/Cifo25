import { reload } from "./library.js";
reload;

//  ! Crea y vincula con HTML un nuevo documento JavaScript con el nombre “ejercicioDia.js” que pida por “prompt()” el nombre del día de la semana (pej: “lunes”, “martes”, etc..) y utilizando una estructura de control “switch” almacene en una variable el número del día correspondiente empezando por lunes y una vez finalizado el switch muestre un alert() indicando el número de la semana correspondiente. pej: si se introduce “lunes”, se debe mostrar el mensaje “día de la semana 1”, si se introduce “domingo”, se debe mostrar el mensaje “día de la semana 7”.


let diaSemana = String(prompt("Ingresa el dia de la semana"));
let mayusc = diaSemana.toUpperCase();

switch (mayusc) {
    case "LUNES":
        day = 1;
        break;
    case "MARTES":
        day = 2;
        break;
    case "MIERCOLES":
        day = 3;
        break;
    case "JUEVES":
        day = 4;
        break;
    case "VIERNES":
        day = 5;
        break;
    case "SABADO":
        day = 6;
        break;
    case "DOMINGO":
        day = 7;
        break;

    default:
        day = "Introduce un dia de la semana valido"
    };

    // console.log(`El dia ${mayusc} corresponde al dia N ${day} de la semana`);
    document.querySelector(".jsinfo").innerHTML = `El dia ${mayusc} corresponde al dia N ${day} de la semana`;
