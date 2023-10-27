var divrespuesta= document.getElementById("respuesta");

function validar(){
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("comentario").value;

    // Todos los campos son obligatorios

    if(nombre.length > 0 && email.length>0 && comentario.length>0){

        if(comentario.length <= 30){
            divrespuesta.innerHTML = "<p>Nombre: "+nombre+"</p><p>Email: "+email+"</p><p>Comentario: "+comentario+"</p>"

            // Limpiamos todos los campos asignando ""
            document.getElementById("nombre").value = "";
            document.getElementById("email").value = "";
            document.getElementById("comentario").value = "";
        } else{
            divrespuesta.innerHTML = '<p class="error">El comentario es demasiado largo. Máximo 30 caracteres.</p>';
        }


    }else{
        divrespuesta.innerHTML = '<p class="error">Todos los campos deben estar completos</p>';
    }

}