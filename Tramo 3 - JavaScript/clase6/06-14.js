fetch('https://jsonplaceholder.typicode.com/photos/1')
      .then(response => response.json())
      .then(datos => {  
            document.getElementById("contenedor").innerHTML = `
                <img src="${datos.url}">
                <p>${datos.title}</p>
            `;
            }              
    )    
