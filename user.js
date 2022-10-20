//FORMULARIO DE REGISTRO
const formRegistro = document.getElementById('FormRegistro');
const inputNameRegistro = document.getElementById('InputNameRegistro');
const inputLastNameRegistro = document.getElementById('InputLastNameRegistro');
const inputEmailRegistro = document.getElementById('InputEmailRegistro');
const inputPassRegistro = document.getElementById('InputPasswordRegistro');
const modalRegistro = document.getElementById('Registro');
const pAlreadyEmail = document.getElementById('alreadyEmail');
const pPassInvalid = document.getElementById('passValid');

//REGEX
const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

//FORMULARIO DE LOGIN
const formLogin = document.getElementById('FormularioLogin');
const inputEmailLogin = document.getElementById('InputEmailLogin');
const inputPassLogin = document.getElementById('InputPasswordLogin');
const modalLogin = document.getElementById('Login');
const pUserNotExist = document.getElementById('noExiste');
const formSearch = document.getElementById('formSearch');
const inputSearch = document.getElementById('inputSearch');

//INFO LOCAL STORAGE
const users = JSON.parse(localStorage.getItem('users')) || [];
const userLogged = JSON.parse(localStorage.getItem('userLogged'));
const productos = JSON.parse(localStorage.getItem('productos')) || [];

//HTML
const divShowbtnNavbar = document.querySelector('#divShowbtnNavbar');
const divContainerProductos = document.querySelector('#ContainerProductos');

if (!userLogged) {
  divShowbtnNavbar.innerHTML = `
  <button type="button" class="btn btn-primary" >
    Login
  </button>
  <button type="button" class="btn btn-success" >
    Registro
  </button>
  `;
} else {
  divShowbtnNavbar.innerHTML = `
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    ${userLogged.name}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <button type="button" class="dropdown-item" onclick="redirect()">Mi perfil</button>
    <button type="button" class="dropdown-item" onclick="logOut()">Cerrar Sesión</button>
  </div>
</div>
  `;
}


const redirect = (url) => {
  setTimeout(() => {
    window.location.href = url;
  }, 1000);
};

const logOut = () => {
  localStorage.removeItem('userLogged');
  redirect('./index.html');
  
};

const clearSearch = () => {
  displayProducts(productos);
}
