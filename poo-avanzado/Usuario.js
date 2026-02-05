class Usuario {
  #email;

  constructor(id, nombre, email) {
    this.id = id
    this.nombre = nombre
    this.#email = email
  }

  get email() {
    return this.#email
  }

  set email(newEmail) {
    if (typeof newEmail !== 'string' || newEmail.length === 0 || !newEmail.includes('.') || !newEmail.includes('@')) {
      console.log("email no valido")
      return;
    }
    this.#email = newEmail
  }

  presentacion() {
    return `Hola soy ${this.nombre} y mi email es ${this.#email}`
  }
}

const user1 = new Usuario(1, "Edgar", "edgaripatricio@tecmilenio.mx")
console.log(user1.email = "@.<")
console.log(user1.presentacion())