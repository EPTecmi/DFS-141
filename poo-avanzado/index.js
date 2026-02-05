// Encapsulamiento por convención

// class  Producto {
//   constructor(id, nombre, precio) {
//     this.id = id;
//     this.nombre = nombre;
//     this._precio = precio;
//   }
//   descripcion() {
//     return `Producto [ID: ${this.id}, Nombre: ${this.nombre}, Precio: $${this._precio}]`;
//   }
//   getPrecio() {
//     return this._precio
//   }
//   setPrecio(monto) {
//     if (typeof monto !== 'number' || monto <= 0) {
//       return "Precio inválido"
//     }
//     this.precio = monto
//     return "Precio actualizado"
//   }
// }
// const producto1 = new Producto(1, 'Laptop', 15000);
// console.log(producto1.descripcion());
// console.log(producto1.setPrecio(-20000))
// console.log(producto1.getPrecio());

// Encapsulamiento con EC2022

// class Producto {
//   #precio;
//   constructor(id, nombre, precio) {
//     this.id = id;
//     this.nombre = nombre;
//     this.#precio = precio;
//   }
//   descripcion() {
//     return `Producto [ID: ${this.id}, Nombre: ${this.nombre}, Precio: $${this.#precio}]`;
//   }
//   getPrecio() {
//     return this.#precio
//   }
//   setPrecio(monto) {
//     if (typeof monto !== 'number' || monto <= 0) {
//       return "Precio inválido"
//     }
//     this.#precio = monto
//     return "Precio actualizado"
//   }
// }
// const producto1 = new Producto(1, 'Laptop', 15000);
// console.log(producto1.descripcion());
// console.log(producto1.setPrecio(20000))
// console.log(producto1)
// console.log(producto1.getPrecio());

// Encapsulamiento mas Pro
class Producto {
  #precio;
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.#precio = precio;
  }
  descripcion() {
    return `Producto [ID: ${this.id}, Nombre: ${this.nombre}, Precio: $${this.#precio}]`;
  }
  get precio() {
    return this.#precio
  } 
  set precio(monto) {
    if (typeof monto !== 'number' || monto <= 0) {
      return "Precio inválido"
    }
    this.#precio = monto
    return "Precio actualizado"
  }
  aplicarDescuento(descuento) {
    let totalDescuento = this.#precio - (this.#precio * descuento / 100)
    return totalDescuento;
  }
}
const producto1 = new Producto(1, 'Laptop', 15000);
console.log(producto1.descripcion());
console.log(producto1.precio = 20000)
console.log(producto1.aplicarDescuento(20))
console.log(producto1)
console.log(producto1.precio);
