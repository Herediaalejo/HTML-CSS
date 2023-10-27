function cambiarColor(){

    // const color = document.getElementById("color").value; //equivale a la línea de abajo para obtener el color del input type color cuya id es color
    const color = document.querySelector("#color").value;

    // document.querySelector selecciona el primer elemento que coincida con lo que está dentro del paréntesis. En este caso el primer p dentro del elemento cuya id es caja
    document.querySelector("#caja p").style.color = color;
}