// const productos = []

// productos.push({ id: 1, nombre: "teclado", costo: 1000 });

// productos[0].costo = -999

// console.log(productos)

// Repositorio

class ProductosRepository{
  #productos;
  #nextId;
  constructor() {
    this.#productos = [];
    this.#nextId = 1;
  }

  getAll() {
    //return this.#productos;
    return [...this.#productos]; // copia segura
  }

  getById(id) {
    return this.#productos.find(producto => producto.id === id);
  }

  create(nombre, precio) {
    if (typeof nombre !== 'string' || nombre.length === 0) {
      return "Nombre inválido"
    }

    if (typeof precio !== 'number' || precio <= 0) {
      return "Precio inválido"
    }

    const nuevo = {
      id: this.#nextId++,
      nombre,
      precio
    }

    this.#productos.push(nuevo);
    return nuevo;
  }

  delete(id) {
    const index = this.#productos.findIndex(producto => producto.id === id);
    if (index === -1) {
      return false
    }
    this.#productos.splice(index, 1);
    return true
  }
}

const repo = new ProductosRepository()

repo.create('Mouse', 250);
repo.create('Teclado', 2500);

console.log(repo.getAll())
console.log(repo.getById(2))
console.log(repo.delete(4))
console.log(repo.getAll())