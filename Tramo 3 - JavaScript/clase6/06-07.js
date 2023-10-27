const peliculas = [
    {"titulo":"Titanic","director":"James Cameron","year":1997,"reparto":["Leonardo DiCaprio","Kate Winslet"]},
    {"titulo":"Terminator","director":"James Cameron","year":1984,"reparto":["Arnold Schwarzenegger","Linda Hamilton"]},
    {"titulo":"Inception","director":"Nolan","year":2010,"reparto":["Leonardo DiCaprio","Cillian Murphy"]}
];


for(let pelicula of peliculas){

    /*
    // Creamos una variable para acumular los li que tienen a los intérpretes (el repart)
    let actores = "";
    for(let actor of pelicula.reparto){
        actores += `<li>${actor}</li>`;
    }
    */

    document.getElementById("contenedor").insertAdjacentHTML("beforeend",`
        <h1>${pelicula.titulo} (${pelicula.year})</h1>
        <h2>Director: ${pelicula.director}</h2>
        <p>Reparto</p>
        <ul>
            ${pelicula.reparto.map(actor => `<li>${actor}</li>`).join("")}
        </ul>    
    `    
    )
}