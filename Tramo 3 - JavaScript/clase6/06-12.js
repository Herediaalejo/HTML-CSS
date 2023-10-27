fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(usuarios => {
        // Mostramos los usuarios

        for(let usuario of usuarios){
                document.getElementById("contenedor").insertAdjacentHTML("beforeend",`
                    <h1>${usuario.name}</h1>
                    <p>Username: ${usuario.username}</p>
                    <p>Email: ${usuario.email}</p>
                    <p>Ciudad: ${usuario.address.city}</p>
                `)

            }
        }        
    )    
