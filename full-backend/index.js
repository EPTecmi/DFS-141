const express = require('express')
const { router: productosRouter } = require('./src/routes/productos.routes')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API OK');
})

app.use('/productos', productosRouter);

app.listen(3000, () => {
  console.log("Servidor Corriendo")
})