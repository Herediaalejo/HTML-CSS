/*
fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(albumes => {
        // Mostramos los títulos de los albumes del usuario 1

        for(let album of albumes){
                if(album.userId == 1){
                    document.getElementById("contenedor").insertAdjacentHTML("beforeend",`
                            <p>${album.title}</p>                    
                    `)
                }     

            }
        }        
    )  
 */   
    
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(albumes => {
        
        // Mostramos los títulos de los albumes del usuario 1
        const ambumesFiltrados = albumes.filter( (album) => album.userId === 1);

        for(let album of ambumesFiltrados){
               {
                    document.getElementById("contenedor").insertAdjacentHTML("beforeend",`
                            <p>${album.title}</p>                    
                    `)
                }     

            }
        }        
    )   


