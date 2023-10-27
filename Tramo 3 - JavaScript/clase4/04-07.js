const menu = document.getElementById("menu");
menu.style.display = "none";


function toogleMenu(){
    // Verificamos si el menú esta "No visible"
    if(menu.style.display == "none"){
        // Mostramos el menú
        menu.style.display = "block";
    } else{
        // Ocultamos el menú
        menu.style.display = "none";
    }
}