const persona = {
    "dni":"999999999",
    "pais":"Argentina",
    "ciudad":"Buenos Aires",
    "nombre":"Dami",
    "usuario": "damiande"
};

function buscarDatos(){
    // Obtenemos lo que el usuario escribe y lo pasamos a minúsculas
    const dato = document.querySelector("#dato").value.toLowerCase();

    // Limpiamos el input donde escribió el usuario
    document.querySelector("#dato").value = "";

    // Agregamos en el div de respuestas la información del JSON dependiendo del "key" que escribió el usuario
    document.querySelector("#respuesta").insertAdjacentHTML("beforeend", dato +": "+persona[dato]+"<br>");
}