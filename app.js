import express from 'express';

const PORT = process.env.PORT ?? 1234
const app = express(); // Inicializa la aplicación de Express y guardas sus funciones en la constante app.

// primera ruta creada, con el primer metodo (get), que aparecerá al inicializar la página web
app.get('/', (request, response) => {
  response.send("Hola mundo")
})

let jugadores =
[
  {id: 1, nombre: "Juanito", edad: 15},
  {id: 2, nombre: "José", edad: 16},
  {id: 3, nombre: "Lara", edad: 17},
]

app.get('/jugadores',(request, response) => {
  response.json(jugadores)
})


// activa el middleware para json, Sin esta línea, no podría leer lo que el usuario manda en el cuerpo (body) de las peticiones.
app.use(express.json())

app.post('/jugadores',(request, response) => {
  let nuevoId = jugadores.length + 1;   
  let jugadorNuevo = {id: nuevoId, nombre: request.body.nombre, edad: request.body.edad}
  jugadores.push(jugadorNuevo)
  response.json(jugadorNuevo)
}
)

app.delete('/jugadores/:id', (request, response) => {
  jugadores = jugadores.filter((jugador) => 
  //Se chequea cada jugador.id con el id que el usuario quiere borrar, si no coincide devuelve true y se mantiene, si coincide devuelve false se descarta 
  // jugador siendo el nombre que se le da a los elementos dentro de jugadores
    jugador.id !== Number(request.params.id)  
) 
response.json(jugadores)
}
)

app.put('/jugadores/:id', (request, response)  => {
  // Buscar, dentro del array jugadores, el objeto cuyo id coincide con el que vino en la URL — usando find().
  let jugadorEditado = jugadores.find((jugadorAEditar) =>
    // Se busca el id a editar con su id existente 
    jugadorAEditar.id === Number(request.params.id))
    // Una vez encontrado, se reasignan edad y nombre
    jugadorEditado.nombre = request.body.nombre
    jugadorEditado.edad = request.body.edad
response.json(jugadorEditado)
}
)
let  clubes = [
  {id: 1, nombre: "Club 1"},
  {id: 2, nombre: "Club 2"},
  {id: 3, nombre: "Club 3"}
]
app.get('/clubes', (request, response) => response.json(clubes))

app.post('/clubes', (request, response) => {
  let nuevoIdClub = clubes.length + 1 ;
  let clubNuevo = {id: nuevoIdClub, nombre: request.body.nombre};
  clubes.push(clubNuevo);
  response.json(clubNuevo);
}
)
app.delete('/clubes/:id' , (request, response) => {
  clubes = clubes.filter((club) => clubes.id !== Number(request.params.id)
  )
  response.json(clubes)
}
)

// segunda ruta creada metodo listen, esta app escucha el puerto 1234, y aparece aviso de servidor levantado en...
app.listen(PORT, () =>{
  console.log(`Servidor levantado en: http://localhost:${PORT}`)
})
