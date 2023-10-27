// Seleccionamos el body
const body = document.querySelector("body");

function cambiarTema(tema){
    if(tema == "oscuro"){
        // Reemplaza la clase claro por oscuro
        body.classList.replace("claro","oscuro");     
    } else{
        // Reemplaza la clase oscuro por la clase claro
        body.classList.replace("oscuro","claro"); 
    }
}