// Crear la función que es llamada desde el botón del HTML
// La función debe agregar a la caja la clase seleccionado (creada en el CSS). Para realizar esta operación utilizar classList.

const caja = document.getElementById("caja")

function convertir(){
    caja.classList.toggle("seleccionado")
}