const nombres = ["Alejandro","Damián","Laura","Guadalupe","Marcela","Ana","Carolina","Andrea","Verónica","Alejandra","María","Carlos","José","Alberto"];

const respuesta = document.getElementById("respuesta");

function buscar(){
    // Obtenemos lo que escribe el usuario
    const busqueda = document.getElementById("buscador").value;    

    // Buscamos en cada posición del array si se encuentra el nombre
    const encontrado = nombres.includes(busqueda);

    // Si se ha encontrado el nombre, encontrado vale true, de lo contrario false
    if(encontrado){
        respuesta.innerHTML = `<strong class="exito">El nombre ${busqueda} se ha encontrado en la lista</strong>`;
    } else{
        respuesta.innerHTML = `<strong class="error">El nombre ${busqueda} NO se ha encontrado en la lista</strong>`;        
    }
}