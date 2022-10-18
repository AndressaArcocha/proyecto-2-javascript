// PRODUCTOS HARDCODE
productosDefault = [
  {id:1111, img:'https://mexx-img-2019.s3.amazonaws.com/Auricular-Gamer-Redragon-Zeus-H510-Rgb_41187_1.jpeg', name:'Auricular', categoria:'HEADPHONES', descripcion:'Negro',precio:'4500', publish: false},
  {id:2222, img: 'https://www.venex.com.ar/products_images/1643915198_cetrophorus-rgb.png', name: 'Ratón', categoria: 'MOUSE', descripcion:'Negro', precio:'3500', publish: false},
  {id:3333, img:'https://mexx-img-2019.s3.amazonaws.com/38539_1.jpeg', name:'Teclado', categoria: 'KEYBOARD', descripcion: 'Negro', precio:'5500', publish: false},
  {id:4444, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl27auufAofteMhRNQfeBCeQD3uL5nB-X42w&usqp=CAU', name:'Auricular', categoria: 'HEADPHONES', descripcion: 'Blanco y Rosa', precio:'4700', publish: false},
  {id:5555, img:'http://www.thekingoftechnology.com/images/1647528060983.jpg', name:'Ratón', categoria: 'MOUSE', descripcion: 'Blanco', precio:'3700', publish: false},
  {id:6666, img:'https://mexx-img-2019.s3.amazonaws.com/39014_1.jpeg', name:'Teclado', categoria: 'KEYBOARD', descripcion: 'Blanco', precio:'5700', publish: false}
]


//DECLARACIÓN DE VARIABLES
const tablaProductos = document.getElementById('TablaProductos');

// FORMULARIO AGREGAR PRODUCTOS
const formProductos = document.getElementById('FormProductos');
const inputImgProductos = document.getElementById('InputImgProductos');
const inputNameProductos = document.getElementById('InputNameProductos');
const inputCatProductos = document.getElementById('InputCatProductos');
const inputDescripcionProductos = document.getElementById(
  'InputDescripcionProductos'
);
const inputPrecioProductos = document.getElementById('InputPrecioProductos');

//INFORMACION LOCAL STORAGE
const userAdmin = JSON.parse(localStorage.getItem('isAdmin'));
const productos = JSON.parse(localStorage.getItem('productos')) || productosDefault;

localStorage.setItem('productos', JSON.stringify(productos));

//FUNCION PARA CONTROL DE ACCESO
const redirect = (url) => {
  window.location.href = url;
};

const accessControl = () => {
  if (!userAdmin) {
    redirect('./index.html');
  }
};
accessControl();

const logOutAdmin = () => {
  localStorage.removeItem('isAdmin');
  setTimeout(() => {
    redirect('./index.html');
  }, 1000);
};

function idRandom() {
  return new Date().getTime();
}

//AGREGAR HTML
const showAdminName = document.querySelector('#showAdminName');
showAdminName.innerHTML = `
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
    data-bs-toggle="dropdown" aria-expanded="false">
    ${userAdmin.name}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <button type="button" class="dropdown-item" onclick="redirect()">Mi perfil</button>
    <button type="button" class="dropdown-item" onclick="logOutAdmin()">Cerrar Sesión</button>
  </div>
</div>

<!-- Modal Editar Productos -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Editar Producto</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="FormEditProductos">
            <div class="mb-3">
              <label for="dir_img" class="form-label">Imágen</label>
              <input type="text" class="form-control" id="InputImgProductosE" aria-describedby="emailHelp" required>
            </div>
            <div class="mb-3">
              <label for="prod" class="form-label">Nombre</label><span class="text-danger">*</span>
              <input type="text" class="form-control" id="InputNameProductosE" aria-describedby="emailHelp" required>
            </div>
            <div class="mb-3">
              <label for="cat" class="form-label">Categoría</label>
              <input type="text" class="form-control" id="InputCatProductosE" aria-describedby="emailHelp" required>
            </div>
            <div class="mb-3">
              <label for="desc" class="form-label">Descripción</label>
              <input type="text" class="form-control" id="InputDescripcionProductosE" aria-describedby="emailHelp" required>
            </div>
            <div class="mb-3">
              <label for="precio" class="form-label">Precio</label><span class="text-danger">*</span>
              <input type="texto" class="form-control" id="InputPrecioProductosE" aria-describedby="emailHelp" autocomplete="off" required>
            </div>
            <button type="submit" class="btn btn-outline-primary">Editar</button>
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar</button>
            </form>
        </div>
      </div>
    </div>
  </div>
`;

// VARIABLES FORMULARIO EDITAR PRODUCTOS
const formProductosE = document.getElementById('FormEditProductos');
const inputImgProductosE = document.getElementById('InputImgProductosE');
const inputNameProductosE = document.getElementById('InputNameProductosE');
const inputCatProductosE = document.getElementById('InputCatProductosE');
const inputDescripcionProductosE = document.getElementById(
  'InputDescripcionProductosE'
);
const inputPrecioProductosE = document.getElementById('InputPrecioProductosE');


//FUNCION CREAR PRODUCTOS
const createProducts = (productos) => {
  tablaProductos.innerHTML = productos
    .map(
      (producto, index) =>
        `
    <tr table-warning>
      <td>${++index}</td>
      <td class="w-25"><img src="${producto.img}" alt="${producto.name}" class="w-25"/></td>
      <td>${producto.name}</td>
      <td>${producto.categoria}</td>
      <td>${producto.descripcion}</td>
      <td>${producto.precio}</td>
      <td>
      <button type="button" onclick="uploadFormEditProduct(${producto.id})" class="btn btn-sm btn-warning text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <i class="fas fa-user-edit"></i></button>
      <button type="button" onclick="eliminarProducto(${producto.id})" class="btn btn-sm btn-danger">
      <i class="fas fa-trash-alt"></i></button>
      <button type="button" onclick="publishProduct(${producto.id})" class="btn btn-sm btn-success">
      <i class="fas fa-square-check"></i></button>
      </td>
    </tr>
  `
    )
    .join('');
}

// FUNCION MOSTRAR PRODUCTOS
const displayProducts = () => {
  const productosLocalStorage = JSON.parse(localStorage.getItem('productos')) || [];
  const productsAvailable = productosLocalStorage.filter(
    (producto) => !producto.hasOwnProperty('deleteAt')
  );
  createProducts(productsAvailable);
};
displayProducts();

// INGRESAR INFORMACION DEL PRODUCTO DEL FORMULARIO AL LOCAL STORAGE
formProductos.onsubmit = (event) => {
  event.preventDefault();

  const img = inputImgProductos.value;
  const name = inputNameProductos.value;
  const categoria = inputCatProductos.value;
  const descripcion = inputDescripcionProductos.value;
  const precio = inputPrecioProductos.value;

  productos.push({
    id: idRandom(),
    img,
    name,
    categoria,
    descripcion,
    precio,
    publish: false,
  });

  localStorage.setItem('productos', JSON.stringify(productos));
  swal('Producto guardado con éxito', 'Felicidades','success');
  formProductos.reset();
  displayProducts();
  bootstrap.Modal.getInstance(AgregarProducto).hide();
};

// const deleteProduct = (id) => {
//   const updateProducts = productos.map((producto) =>
//   producto.id === id ? { ...producto, deleteAt: new Date() } : producto
//   );
//   localStorage.setItem('productos', JSON.stringify(updateProducts));
//   swal('Producto borrado con éxito','Felicitaciones', 'success');
//   displayProducts();
// };

//FUNCION PARA ELIMINAR PRODUCTOS 
const eliminarProducto = (id) => {
productos.forEach((producto) => {
if (producto.id === id) 
    producto.deleteAt= new Date()
}
);
localStorage.setItem('productos', JSON.stringify(productos));
swal('Producto borrado con éxito','Felicitaciones', 'success');
displayProducts();
};

//FUNCION PARA PUBLICAR PRODUCTOS 
const publishProduct = (id) => {
  productos.forEach((producto) => {
  if (producto.id === id) 
      producto.publish = true;
  }
  );
  localStorage.setItem('productos', JSON.stringify(productos));
  swal('Producto publicado con éxito','Felicitaciones', 'success');
  displayProducts();
  };

let idProductEdit;
const uploadFormEditProduct = (id) => {
  const producto = productos.find(producto => producto.id === id);
  inputImgProductosE.value = producto.img;
  inputNameProductosE.value = producto.name;
  inputCatProductosE.value = producto.categoria;
  inputDescripcionProductosE.value = producto.descripcion;
  inputPrecioProductosE.value = producto.precio;
  idProductEdit = id;
};

// FUNCION EDITAR PRODUCTOS
formProductosE.onsubmit = (event) => {
  event.preventDefault();

  const img = inputImgProductosE.value;
  const name = inputNameProductosE.value;
  const categoria = inputCatProductosE.value;
  const descripcion = inputDescripcionProductosE.value;
  const precio = inputPrecioProductosE.value;

  const updateProducts = productos.map((producto) =>
    producto.id === idProductEdit ? { ...producto, img, name,categoria, descripcion, precio } : producto
  );

  localStorage.setItem('productos', JSON.stringify(updateProducts));
  swal('Producto editado con éxito','Felicitaciones', 'success');
  formProductosE.reset();
  displayProducts();
  bootstrap.Modal.getInstance(exampleModal).hide();
};

// FUNCION BUSCADOR
formSearch.onsubmit = (e) => {
  e.preventDefault();
  const term = inputSearch.value;
  const searchProducts = productos.filter(producto => 
    producto.name.toLowerCase().includes(term.toLowerCase())
  );
  displayProducts(searchProducts);
}

const clearSearch = () => {
  displayProducts(productos);
}
