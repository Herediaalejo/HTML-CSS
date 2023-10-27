const peliculas = [
    {"titulo":"Titanic","year":1997,"pais":"USA"},
    {"titulo":"Esperando la carroza","year":1985,"pais":"AR"},
    {"titulo":"Terminator","year":1984,"pais":"USA"},
    {"titulo":"Inception","director":"Nolan","year":2010,"pais":"USA"},
    {"titulo":"La Nona","year":1979,"pais":"AR"},
    {"titulo":"A Haunting in Venice","year":2023,"pais":"USA"},
    {"titulo":"Argentina, 1985","year":2022,"pais":"AR"},
];


// Películas que el título comienza con A

for(let pelicula of peliculas){
    if(pelicula.titulo[0]=="A")  {
        document.getElementById("contenedor").insertAdjacentHTML("beforeend",`
        <h1>${pelicula.titulo} (${pelicula.year})</h1>     
    `)            
    }     
}