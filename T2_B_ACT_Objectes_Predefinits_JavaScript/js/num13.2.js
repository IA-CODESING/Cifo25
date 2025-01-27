

// Capturamos el boton "enter" para que cuando demos enter poder guardar el mensaje y publicarlo
document.addEventListener("keydown", (e) =>  {
    let capturarEnter = e.key;
    if(capturarEnter === 'Enter' || capturarEnter === 'enter'){
        escribirenWin();
    }
});

// Capturamos el texto introducido y creamos el mensaje que se mostrara en pantalla
function escribirenWin(){
    let texto = document.querySelector('input#text').value;
    document.querySelector("div.informacio").innerHTML = `<p>El numero de caracteres introducidos es de: ${texto.length} y el texto introducido es: ${texto}</p>`
};

// variable de control para almacenar todos los botones
const btn = document.querySelectorAll("button");


// recorremos los botones para captutar cada vez que clikemos alguno, creamos reglas para cada btn
btn.forEach((boton) => {
    boton.addEventListener('click', e => {
        let texto = document.querySelector('input#text').value;
        const btnPress = e.target;
        let captura = btnPress.textContent;
        if(captura === "Cursiva"){
            document.querySelector(".info2").innerHTML = texto.italics();
        }else if(captura === "Negrita"){
            document.querySelector(".info2").innerHTML = texto.bold();
        }else if(captura === "Color Rojo"){
            document.querySelector(".info2").innerHTML = `<span style="color: red;">${texto}</span>`;
        }else if(captura === "Aumentar Tamaño"){
            document.querySelector(".info2").innerHTML = `<span style="font-size: 30px;">${texto}</span>`;
        }else if(captura === "Tildado"){
            document.querySelector(".info2").innerHTML = `"${texto}"`;
        }
    });
});


