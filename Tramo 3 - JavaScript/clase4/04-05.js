const nombres = ["Alejandro","Damián","Laura","Guadalupe","Marcela","Ana","Carolina","Andrea","Verónica","Alejandra","María","Carlos","José","Alberto"];

const respuesta = document.getElementById("respuesta");
const contador = document.getElementById("contador");

function buscar(){
    // Obtenemos lo que escribe el usuario
    const busqueda = document.getElementById("buscador").value;    
    // Creamos una variable de bloque para el contador
    let contar = 0;

    // Limpiamos la lista
    respuesta.innerHTML = "";
    
    // Verificamos si el usuario escribió algo o el input de búsqueda está vacía
    if(busqueda.length >0){
        // Recorremos todos los nombres del array
        for(let nombre of nombres){
            // Comparamos cada nombres en minúscula con el nombre en minúsculas que escribió el usuario
            let encontrado = nombre.toLowerCase().includes(busqueda.toLowerCase());  
            if(encontrado){
                respuesta.insertAdjacentHTML("beforeend", `<li>${nombre}</li>`);
                // Incrementamos en 1 el contador
                contar++
            }
        }
    }
    // Escribimos la cantidad de nombres encontrados
    contador.innerHTML = `Nombres encontrados: ${contar}`;
}