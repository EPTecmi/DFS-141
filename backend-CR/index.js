// npm install --save-dev nodemon
// npm run dev 

const express = require('express')

const app = express()
const port = 3000

let productos = []

// Middleware para leer datos
app.use(express.json())


app.get('/', (req, res) => {
  res.send('mucho texto')
})

app.get('/productos', (req, res) => {
  res.json(productos)
})

app.post('/productos', (req, res) => {
  const nuevosProductos = req.body
  
  if (Array.isArray(nuevosProductos)) {      
    nuevosProductos.forEach(producto => {
      productos.push(producto)
    });
    res.status(201).json(nuevosProductos)
    return;
  }
  
  productos.push(nuevosProductos)
  res.status(201).json(nuevosProductos)
})

app.listen(port, () => {
  console.log(`servdor en http://localhost:${port}`)
})