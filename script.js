let listaJugadoresGlobal = []
let inputBuscador = document.getElementById('buscador');
let divListaJugadores = document.getElementById('lista-jugadores');

// Esta función recibe un array de jugadores y los muestra en la página
function mostrarJugadoresEnPantalla (listaJugadores){
    let listaHtmlJugadores = ""
    listaJugadores.forEach((jugadores) => {
        htmlResultado += `<li>${jugador.nombre} - ${jugador.edad} años</li>`;       
    });
    divListaJugadores.innerHTML = htmlResultado
}

//datos del servidor
fetch('http://localhost:1234/jugadores')
    .then(response => response.json())
    .then(jugadoresBackend => {
        listaJugadoresGlobal = jugadoresBackend;
        // Dibujamos la lista completa por primera vez
        mostrarJugadoresEnPantalla(listaJugadoresGlobal);
    });

//cuando el usuario escribe
inputBuscador.addEventListener('input', (event) => {
    let textoFiltro = event.target.value.toLowerCase();
    let jugadoresFiltrados = listaJugadoresGlobal.filter((jugador) => 
        jugador.nombre.toLowerCase().includes(textoFiltro)
    )
    mostrarJugadoresEnPantalla(jugadoresFiltrados);
});


let nombre = document.getElementById('nombre')
let edad = document.getElementById('edad')
let botonGuardar = document.getElementById('guardar-usuario')

botonGuardar.addEventListener('click', (event)=>{
    console.log(event.target.value)
    let nuevoJugador = {nombre:nombre.value , edad: edad.value};
fetch('http://localhost:1234/jugadores', {
    method: 'POST',
    header:{
        'Content-type' : 'application/json'
    },
    body : JSON.stringify(nuevoJugador)
}) 
.then(response => response.json())
.then(jugadorCreado =>{
    //1. Sumamos nuevo jugador a lista global
    listaJugadoresGlobal.push(jugadorCreado)
    //2. volvemos a pintar lista en html
    mostrarJugadoresEnPantalla(listaJugadoresGlobal)
    //3.limpiar input de formulario
    nombre.value="";
    edad.value="";
})
})
