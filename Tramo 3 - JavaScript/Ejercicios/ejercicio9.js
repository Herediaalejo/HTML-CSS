
/*Crear la función que es llamada por el botón del formulario.
Obtenga el valor numérico que ingresa el usuario.
Validar que el valor sea igual o mayor a 10.
Si se cumple que sea mayor o igual que 10, aplicar al elemento cuya id es párrafo el valor indicado por el usuario como estilo desde JavaScript, cambiando el tamaño de fuente (fontSize) en píxeles. Escribir un mensaje indicando que se ha aplicado el cambio de tamaño.
En caso contrario mostrar el error en un párrafo destinado al mensaje. */

const parrafo = document.getElementById("parrafo")
const respuesta = document.getElementById("respuesta")
function validar(){
    const numero = document.getElementById("numero").value
    if (Number(numero)>=10){
        parrafo.style.fontSize = numero+"px"
        respuesta.innerHTML = "Exito! El número ingresado es valido, tamaño de letra modificado"

    }else{
        respuesta.innerHTML = "Fracaso! El número no es valido."
    }
}