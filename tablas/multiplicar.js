function generarTablas() {
    let divContenedor = document.getElementById("divContenedor");
    let contenido = "";

    for(let i=1; i<=12; i++ )
    {
       contenido = contenido + "<div class='fila'>3 × " + i + " = " + (5 * i) + "</div>";
        
    }
    divContenedor.innerHTML = contenido;
}