function generarTablas() {
    let resultado = document.getElementById("resultado");
    let contenido = "";
    let numero= parseInt(document.getElementById("txtNumero").value);

    for(let i=1; i<=12; i++ )
    {
       contenido = contenido + "<div class='fila'>"+ numero + "× " + i + " = " + (numero * i) + "</div>";
        
    }
    resultado.innerHTML = contenido;
}