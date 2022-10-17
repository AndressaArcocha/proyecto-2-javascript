class User {
  constructor(nombre, apellido, email, password) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
    this.role = 'user';
  }
  getFullName = () => {
    return `${this.nombre} ${this.apellido}`;
  };

  changeRole = (role) => {
    this.role = role;
  };
}

