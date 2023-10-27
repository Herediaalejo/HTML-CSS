function agregar(){
    // Crear elemento HTML https://developer.mozilla.org/es/docs/Web/API/Document/createElement
    const nuevoParrafo = document.createElement("p");

    // Contenido de texto que se agregará en el párrafo
    nuevoParrafo.textContent = "Este es un nuevo párrafo agregado con createElement y appendChild.";

    // Dentro de que elemento vamos a agregar el párrafo
    const contenedor = document.getElementById("contenedor");

    // Agregar elemento https://developer.mozilla.org/es/docs/Web/API/Node/appendChild
    contenedor.appendChild(nuevoParrafo);
}