const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hola en mi nueva aplicacion en express js')
})

app.get('/saludo', (req, res) => {
  res.send('Hola desde ruta /saludo')
})

app.get('/json', (req, res) => {
  res.json({
    message: "Este es un mensaje en formato JSON",
    status: "ok",
    data: [
      {
        id: 1,
        nombre:"juan"
      },
      {
        id: 2,
        nombre:"pedro"
      }
    ]
  })
})

app.get('/info', (req, res) => {
  res.json({
    curso: "Desarrollo Full Stack",
    semana: 3,
    dia: 2
  })
})

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`)
})