document.querySelector("div.content").innerHTML = `
<pre>
    <code>
    const btnEscucha = document.querySelector(".btnr");
        btnEscucha.addEventListener('click', () => {
            let nuevaVentana = window.open(
            './html/num10.html',
            '_blank', 
            resizable=0, width=600, height=800);
    });
    </code>
</pre>

<button class="btnclose">Cerrar esta ventana</button>
`;

const btnClose = document.querySelector(".btnclose");
btnClose.addEventListener('click', (e) =>{
    window.close();
});