    // Creamos un array de JSON
    const personas = [
        {
            "dni":"999999999",
            "pais":"Argentina",
            "ciudad":"Buenos Aires",
            "nombre":"Dami",
            "usuario": "damiande234923094"
        },
        {
            "dni":"999999998",
            "pais":"Argentina",
            "ciudad":"Santa Fé",
            "nombre":"Daniela",
            "usuario": "daniela278927349823798423"
        },
        {
            "dni":"999999995",
            "pais":"Argentina",
            "ciudad":"Córdoba",
            "nombre":"Javier",
            "usuario": "javi2348923794893480293"
        },
        {
            "dni":"999999991",
            "pais":"Argentina",
            "ciudad":"Rosario",
            "nombre":"María",
            "usuario": "mari3342348923794872480293"
        }
        
    ];


    for(let persona of personas){
        document.getElementById("caja").insertAdjacentHTML("beforeend",
        `
            <div class="persona">
                <p>Nombre: ${persona.nombre}</p> 
                <p>Usuario: ${persona.usuario}</p> 
                <p>País: ${persona.pais}</p> 
                <p>Ciudad: ${persona.ciudad}</p> 
                <p>DNI: ${persona.dni}</p> 
            </div>
        `
        )
    }