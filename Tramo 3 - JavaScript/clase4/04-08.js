// La función recibe el size de cada botón (en esta caso 1, 2 o 3)

function cambiarFontSize(size){
    // Aplicamos el contenedor el font-size (aquí en JavaScript se usa "camel case" fontSize) y la asignamos en rem
    document.getElementById("contenedor").style.fontSize = size+"rem";
}