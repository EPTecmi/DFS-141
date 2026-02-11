const { pool } = require('../db');

class ProductosRepository {

  async getAll() {
    const result = await pool.query(
      'select id, nombre, precio from productos;'
    );
    return result.rows;
  }

  async getAllActive() {
    const result = await pool.query(
      'select id, nombre, precio from productos where activo = true;'
    );
    return result.rows;
    // return this.productos.filter(producto => producto.active);
  }

  async getById(id) {
    const result = await pool.query(
      'select id, nombre, precio, stock, descripcion from productos where activo = true and id = $1;', [id]
    );
    return result.rows[0];
    // return this.productos.find(producto => producto.id === id);
  }

  async create(nombre, precio) {
    const result = await pool.query(
      'insert into productos (nombre, precio) values ($1,$2) returning id, nombre, precio;',[nombre, precio] 
    );
    return result.rows[0];
    // const newProducto = { id: this.nextId++, nombre, precio };
    // this.productos.push(newProducto);
    // return newProducto;
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