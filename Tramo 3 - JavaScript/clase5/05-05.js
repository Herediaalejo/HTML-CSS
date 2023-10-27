function removeNext(button) {
    // Del emento que llama a la función elegir siguiente hermano https://developer.mozilla.org/es/docs/Web/API/Node/nextSibling
    const siguienteElemento = button.nextElementSibling;

    // Verificamos si existe un elemento siguiente y lo removemos (en este caso el span con el arroba)
    if (siguienteElemento) {
        siguienteElemento.remove();
    }
}