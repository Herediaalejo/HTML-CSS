function agregarFondo(){
    // obtiene del select el número de párrafo al que vamos a cambiar el fondo
    const n = Number(document.querySelector("#selectparrafo").value);
    
    // Obtenemos el array de los párrafos de la caja
    const parrafos = document.querySelectorAll("#caja p");

    // sobre el array de párrafos usamos el número elegido n y le restamos 1 porque el array comienza en cero y aplicamos el color de fondo dorado
    parrafos[n-1].style.backgroundColor = "gold";
}