// Pide al servidor los datos de /jugadores (devuelve una promesa)
fetch('http://localhost:1234/jugadores')
        // Cuando llega la respuesta cruda, la convierte a datos usables (JSON)
        .then(response => response.json())
        // Cuando los datos ya están convertidos, los llama "jugadores" y sigue:
        .then(jugadores => {
            // Crea una caja de texto vacía
            let html = ""
            
            // Por cada jugador del array, hace lo siguiente:
            jugadores.forEach((jugador) => {
                // Le agrega a "html" un <li> con nombre y edad de ESTE jugador
                html += `<li>${jugador.nombre} - ${jugador.edad} años</li>`
    }) // Acá "html" ya tiene los <li> de todos los jugadores juntos

    // Busca en la página el elemento con id="buscador"
    let buscador = document.getElementById('buscador')
     // Registra qué hacer cuando el usuario escriba algo (no se ejecuta todavía)
    buscador.addEventListener('input', (event) => {
        // Muestra en consola el texto que el usuario tiene escrito ahora
        console.log(event.target.value)  
    // Guarda ese texto convertido a minúsculas
    let textoBuscado = event.target.value.toLowerCase()
    // Filtra "jugadores": se queda solo con los que incluyen el texto buscado en su nombre
    let jugadorBuscado = jugadores.filter((jugador) =>
    jugador.nombre.toLowerCase().includes(textoBuscado))
})  // Hasta acá llega lo que se ejecuta cuando el usuario escribe

    // Busca en la página el elemento con id="lista-jugadores"
    let contenedor = document.getElementById('lista-jugadores')
        // Reemplaza el contenido del contenedor por "html" (los jugadores originales)
        contenedor.innerHTML = html
    })
    