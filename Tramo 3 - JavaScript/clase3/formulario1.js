function escribir(){
    // Obtenemos lo que escribe el usuario en el campo de texto
    var nombre = document.getElementById("nombre").value;

    // Escribimos lo que obtuvimos en un elemento cuya id es respuesta
    document.getElementById("respuesta").innerHTML = nombre.toUpperCase();
}