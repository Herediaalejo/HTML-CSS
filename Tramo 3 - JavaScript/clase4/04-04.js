const texto = "Hoy es un día hermoso de sol y vamos a seguir aprendiendo JavaScript. En esta clase veremos muchos temas nuevos y aprenderemos a utilizarlos en el código."

const respuesta = document.getElementById("respuesta");


function buscar(){
    // Obtenemos lo que escribe el usuario
    const busqueda = document.getElementById("buscador").value;    

    // Pasamos el texto sobre el que buscamos a minúscula y comparamos con lo que escribió el usuario en minúsculas
    const encontrado = texto.toLowerCase().includes(busqueda.toLowerCase());

    if(encontrado){
        respuesta.innerHTML = `<strong class="exito">El nombre ${busqueda} se ha encontrado en la lista</strong>`;
    } else{
        respuesta.innerHTML = `<strong class="error">El nombre ${busqueda} NO se ha encontrado en la lista</strong>`;        
    }
}