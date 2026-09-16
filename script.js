// Hace una petición GET a tu backend. fetch devuelve una "promesa"
fetch('http://localhost:1234/jugadores')
        .then(response => response.json())
        .then(jugadores => {
            let html = ""
            jugadores.forEach((jugador) => {
            html += `<li>${jugador.nombre} - ${jugador.edad} años</li>`
            // buscar input con getlementbyid
    })
    let buscador = document.getElementById('buscador')
    buscador.addEventListener('input', (event) => {
        console.log(event.target.value)  // el texto que el usuario tiene escrito, en este momento
    let textoBuscado = event.target.value.toLowerCase()
    let jugadorBuscado = jugadores.filter((jugador) =>
    jugador.nombre.toLowerCase().includes(textoBuscado))
})
        
          //busca el elemento que tenga ese id exacto
        let contenedor = document.getElementById('lista-jugadores')
        // innerHTML cambia el código HTML que está dentro de un elemento, en este caso por el contenido de 'html'
        contenedor.innerHTML = html
    })
    