class Producto {
  constructor(id, nombre, precio) {
    if (typeof id != "number") {
      console.log("id debe ser de tipo numero")
      return;
    }
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  aplicarDescuento(descuentoPorcentaje) {
    // this.productos.forEach(producto => {
    //   producto.precio = producto.precio-producto.precio*(descuentoPorcentaje/100)
    // })
    let total = this.total()
    let descuento = total * (descuentoPorcentaje / 100)
    let totalConDescuento = total - descuento
    return totalConDescuento;
  }

  aplicarIVA(iva=16) {
    let total = this.total()
    const IVA = total * (iva / 100)
    let totalConIva = total + IVA;
    console.log("con iva "+totalConIva)
  }

  total() {
    let sumaTotal = 0;
    this.productos.forEach(producto => {
      sumaTotal += producto.precio
    })
    return sumaTotal;
  }
}

const carrito = new Carrito()

const product1 = new Producto(1, "Teclado", 2000)
const product2 = new Producto(2, "Memoria RAM", 30000)

carrito.agregarProducto(product1)
carrito.agregarProducto(product2)

// console.log(carrito.productos)
console.log(carrito.total())

carrito.aplicarIVA()

let totalDescuento = carrito.aplicarDescuento(40)


// console.log(carrito.productos)
