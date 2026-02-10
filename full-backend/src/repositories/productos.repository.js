class ProductosRepository {
  constructor() {
    this.productos = [];
    this.nextId = 1;
  }

  getAll() {
    return this.productos;
  }

  getAllActive() {
    return this.productos.filter(producto => producto.active);
  }

  getById(id) {
    return this.productos.find(producto => producto.id === id);
  }

  create(nombre, precio) {
    const newProducto = { id: this.nextId++, nombre, precio };
    this.productos.push(newProducto);
    return newProducto;
  }
  update(id, data) {
    const producto = this.getById(id);
    if (producto) {
      producto.nombre = data.nombre;
      producto.precio = data.precio;
      return producto;
    }
    return null;
  }

  delete(id) {
    const index = this.productos.findIndex(producto => producto.id === id);
    if (index !== -1) {
      return this.productos.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = { ProductosRepository }