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


app.post('/jugadores',(request, response) =>{
  const nuevoId = jugadores.length + 1;   
  const jugadorNuevo = {id: nuevoId, nombre: request.body.nombre, edad: request.body.edad}
  jugadores.push(jugadorNuevo)
  response.json(jugadorNuevo)
}
)

app.delete('/jugadores/:id', (request, response)=> {
  jugadores = jugadores.filter((jugador) => 
  //Se chequea cada jugador.id con el id que el usuario quiere borrar, si no coincide devuelve true y se mantiene, si coincide devuelve false se descarta 
  // jugador siendo el nombre que se le da a los elementos dentro de jugadores
    jugador.id !== Number(request.params.id)  
) 
response.json(jugadores)
}
)
 

// segunda ruta creada metodo listen, esta app escucha el puerto 1234, y aparece aviso de servidor levantado en...
app.listen(PORT, () =>{
  console.log(`Servidor levantado en: http://localhost:${PORT}`)
})
