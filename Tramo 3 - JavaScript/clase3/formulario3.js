var divresultado = document.getElementById("resultado");

function sumar(){

    // Obtenemos los valores de los campos numéricos y los convertimos a número, porque desde el formulario "viajan" como string      
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);

    // para este ejemplo validamos que ambos números obtenidos del formulario sean positivos, mayores a cero

    if(n1>0 && n2>0){
        var resultado = n1 + n2;
        divresultado.innerHTML = resultado;
    } else{
        divresultado.innerHTML = "Ambos números deben ser positivos"     
    }   
    
}