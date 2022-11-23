const formulario = document.getElementById('formPrincipal');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');

const infoUsuario = {}
formulario.onsubmit = (event) => {
    event.preventDefault()
    infoUsuario['nombreUsuario'] = nombreInput.value
    infoUsuario['apellidoUsuario'] = apellidoInput.value
    console.log(infoUsuario)
    const infoUsuarioJSON = JSON.stringify(infoUsuario)
    localStorage.setItem('usuario', infoUsuarioJSON)
}



const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = [];
productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
        `;

        shopContent.append(content);

        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "comprar";

        content.append(comprar);

        comprar.addEventListener("click", () => {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
            });
            console.log(carrito);
        });
});

verCarrito.addEventListener("click", () => {

const modalHeader = document.createElement("div");
modalHeader.className = "modal-header"
modalHeader.innerHTML = 
`<h1 class="modal-header-title">Carrito</h1>
`;
modalContainer.append(modalHeader);

const modalbutton = document.createElement("h1");
modalbutton.innerText = "x";
modalbutton.className = "modal-header-button";

modalHeader.append(modalbutton);

carrito.forEach((product) => {
let carritoContent = document.createElement("div");
carritoContent.className = "modal-content";
carritoContent.innerHTML = `
<img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
    `;

    modalContainer.append(carritoContent);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalCompra = document.createElement("div")
  totalCompra.className = "total-content"
  totalCompra.innerHTML =  `Total a pagar: ${total}$`;
  modalContainer.append(totalCompra);
});

