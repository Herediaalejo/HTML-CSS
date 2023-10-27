function cambiarColor(){
    // const color = document.getElementById("color").value; //equivale a la línea de abajo para obtener el color del input type color cuya id es color
    const color = document.querySelector("#color").value;

    // document.querySelectorAll crea un array con loa párrafos de caja
    const parrafos = document.querySelectorAll("#caja p");
    const cantidad = parrafos.length;
    console.log("Parrafos dentro de la caja:" + cantidad);

     /*
    for(let i=0;i<cantidad;i++){
        // parrafos es el array ; i es el indice
        parrafos[i].style.color = color
    }
    */
   
    for(let parrafo of parrafos){
        parrafo.style.color = color
    }
    
}