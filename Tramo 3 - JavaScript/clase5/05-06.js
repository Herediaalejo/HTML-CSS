function eliminarElemento(icono) {
    // Obtener el <li> padre del icono de borrar
    const listItem = icono.parentElement;
    
    // Eliminar el <li> del padre del icono
    listItem.remove();
}