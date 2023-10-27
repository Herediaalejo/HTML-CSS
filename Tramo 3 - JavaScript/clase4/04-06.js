const listadeproductos = document.getElementById("listadeproductos");
const mensaje = document.getElementById("mensaje");

function agregar(){
    // Obtenemos del input text lo que el usuario ha escrito
    const producto = document.getElementById("producto").value; 
    
    // Verificamos que el usuario escribió algo
    if(producto.length > 0){
        listadeproductos.insertAdjacentHTML("beforeend",`<li>${producto}</li>`);
        
        // Limpiamos el campo de texto donde escribe el usuario
        document.getElementById("producto").value = "";

        mensaje.innerHTML = `<strong class="exito">Se ha agregado el producto ${producto} a la lista</strong>`;
    } else{
        mensaje.innerHTML = `<strong class="error">NO Se ha agregado el producto. Escribe algo.</strong>`;
    }
}