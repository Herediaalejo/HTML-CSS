const resultado = document.getElementById("resultado");

function mostrar(){
    // Obtenemos los datos que escribió el usuario y lo guardamos en variables
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const pais = document.getElementById("pais").value;  

    // Usamos template strings para escribir en el HTML con ${} podemos escribir el valor de la variable dentro de las comillas inclinadas
    
    resultado.innerHTML = `
        <p class="parrafo">Nombre: <strong>${nombre}</strong></p>
        <p class="parrafo">Apellido: <strong>${apellido}</strong></p>
        <p class="parrafo">País: <strong>${pais}</strong></p>
    `
}