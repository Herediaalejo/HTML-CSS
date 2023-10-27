// Los números de socios válidos van desde 1000 a 5000 (inclusive)

var presultado = document.getElementById("resultado");

function validar(){

    // Obtenemos el número de socio que escribe el usuario
    var nsocio = document.getElementById("nsocio").value;

    if(nsocio >=1000 && nsocio <=5000){
        presultado.innerHTML = '<strong class="exito"><i class="fa-regular fa-circle-check"></i> Número de socio: '+ nsocio +' esválido</strong>';
    } else{
        presultado.innerHTML = '<strong class="error"><i class="fa-solid fa-triangle-exclamation"></i> Número de socio: '+ nsocio +' NO es válido</strong>';
    }
}