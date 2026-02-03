const express = require('express');

const app = express();
const PORT = 3000;

let products = [

  {
    "nombre": "Teclado",
    "costo": 1000,
    "stock": 10,
    "activo": true
  },
  {
    "nombre": "Monitor",
    "costo": 7000,
    "stock": 5,
    "activo": false
  },
  {
    "nombre": "PC",
    "costo": 10000,
    "stock": 10,
    "activo": true
  }

];

app.use(express.json());

app.get('/products', (req, res) => {

  // let showProducts = [];
  // products.forEach(product => {
  //   if (product.activo) {
  //     showProducts.push(product);
  //   }

  // })
  // res.json(showProducts);
  const activeProducts = products.filter(product => product.activo);
  res.json(activeProducts);
  
});
app.post('/products', (req, res) => {
  const product = req.body;
  if (!product.stock) product.stock = 0;

  if (Number(product.stock) < 0) {
    res.status(400).json({ "messaje": "Stock no puede ser negativo" })
    return;
  }
  if (!product.nombre) {
    res.status(400).json({ "messaje": "Faltan datos de nombre obligatorios" })
    return;
  }
  if (product.nombre.trim() == "") {
    res.status(400).json({ "messaje": "Nombre no debe estar vacío" })
    return;
  }
  if (!product.costo) {
    res.status(400).json({ "messaje": "Faltan datos de costo obligatorios" })
    return;
  }
  if (product.costo <= 0) {
    res.status(400).json({ "messaje": "Costo debe ser mayor a 0" })
    return;
  }
  product.activo = true
  products.push(product)
  res.json(product)
})
app.put('/products/:id', (req, res) => {
  const product = req.body;
  const id = req.params.id;

  if (!products[id]) {
    res.status(404).json({ "message": "id no existe" })
    return;
  }

  if (product.nombre) {
    if (product.nombre.trim() === "") {
      res.status(400).json({ "message": "nombre no puede estar vacío" })
      return
    }
    products[id].nombre = product.nombre
  }
  if (product.costo) {
    if(product.costo <= 0) {
      res.status(400).json({ "message": "costo debe ser mayor a 0" })
      return
    }
    products[id].costo = product.costo
  }
  if (Number(product.stock) >= 0) {
    products[id].stock = product.stock
  }
  
  res.json(products[id])
})
app.delete('/products/:id', (req, res) => {
  const id = req.params.id;

  if (!products[id]) {
    res.status(404).json({ "message": "id no existe" })
    return;
  }
  if (products[id].activo === false) {
    res.status(400).json({ "message": "el producto ya está inactivo" })
    return;
  }
  
  products[id].activo = false;
  res.status(204)
})

app.listen(PORT, () => {
  console.log(`server on http://localhost:${PORT}`)
})
