class UsuariosRepository {
  #usuarios;
  #nextId;
  constructor() {
    this.#usuarios = [];
    this.#nextId = 1;
  }
  create(nombre, email) { 
    if (typeof nombre !== 'string' || nombre.length === 0) {
      return "Nombre inválido"
    }
    if (typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
      return "Email inválido"
    }

    const nuevo = {
      id: this.#nextId++,
      nombre,
      email
    }

    this.#usuarios.push(nuevo)
    return nuevo
  }

  getAll() { 
    return [...this.#usuarios]
  }

  getById(id) { 
    const index = this.#usuarios.findIndex(u => u.id === id);
    if (index === -1) return false
    
    return this.#usuarios[index]
  }
  delete(id) { 
    const index = this.#usuarios.findIndex
  }
  
  update(id,data){}  // por 5 décimas
}

const repo = new UsuariosRepository();

repo.create("edgar", "edgaripatricio@tecmilenio.mx")
repo.create("juan", "juan@tecmilenio.mx")
console.log(repo.getAll())
console.log(repo.getById(1))

// repo.update(1, {nombre: 'Nuevo nombre'})
// repo.update(2, {email: 'email@test.com'})
// repo.update(3, { nombre: 'Otro nombre', email: 'otroemail@test.com' })


// nombre no debe estar vacío
// email tenga "@" "."

//reglas para udate
/* 
- id debe existir
- data puede traer:
  nombre
  email
- si un campo No viene, No se modifica
- si no existe, regresa null

*/