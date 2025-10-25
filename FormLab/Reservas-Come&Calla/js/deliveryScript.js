//botones
const btnBebidas = document.getElementById("btnBebidas");
const btnFritas = document.getElementById("btnFritas");
const btnFastFood = document.getElementById("btnFastFood");
const btnHamburger = document.getElementById("btnHamburger");
const btnPostal = document.getElementById("btnPostal");
const btnCarrito = document.getElementById("btnCarrito");
const btnConfirmarPedido = document.getElementById("btnConfirmarPedido");

const btnSumar = document.querySelectorAll(".btn-sumar");
const btnRestar = document.querySelectorAll(".btn-restar");


//listas
const listBebidas = document.getElementById("listBebidas");
const listPatatas = document.getElementById("listPatatas");
const listFastFood = document.getElementById("listFastFood");
const listHamburguesa = document.getElementById("listHamburguesa");
const listCarrito = document.getElementById("listCarrito");

//secciones
const sectionPostal = document.getElementById("sectionPostal");
const sectionPedidos = document.getElementById("sectionPedidos");

const cuentaTotal = document.getElementById("cuentaTotal");


// EVITAR ERROR DEL MODAL EN CONSOLA
const modalEl = document.getElementById('modalCarrito');
const modal = new bootstrap.Modal(modalEl);
modalEl.addEventListener('hide.bs.modal', () => {
    if (modalEl.contains(document.activeElement)) {
        document.activeElement.blur();
    }
});


//array
const listaCarrito = [
    { nombre: "Cócteles", cantidad: 0, clase: "bebidas", precio: 2.50 },
    { nombre: "Cerveza", cantidad: 0, clase: "bebidas", precio: 2.50 },
    { nombre: "Gin-Tonic", cantidad: 0, clase: "bebidas", precio: 2.50 },
    { nombre: "Coca-Cola", cantidad: 0, clase: "bebidas", precio: 2.00 },
    { nombre: "Patatas fritas small", cantidad: 0, clase: "patatas", precio: 2.00 },
    { nombre: "Patatas fritas medianas", cantidad: 0, clase: "patatas", precio: 3.00 },
    { nombre: "Patas fritas grandes", cantidad: 0, clase: "bebidas", precio: 3.50 },
    { nombre: "Patatas bravas", cantidad: 0, clase: "patatas", precio: 2.50 },
    { nombre: "Pizza familiar", cantidad: 0, clase: "fastFood", precio: 3.00 },
    { nombre: "Perrito caliente", cantidad: 0, clase: "fastFood", precio: 2.00 },
    { nombre: "Bacon frito", cantidad: 0, clase: "fastFood", precio: 1.50 },
    { nombre: "Burrito", cantidad: 0, clase: "fastFood", precio: 3.00 },
    { nombre: "Hamburguesa grande", cantidad: 0, clase: "hamburguesa", precio: 10.00 },
    { nombre: "Hamburguesa celiaca", cantidad: 0, clase: "hamburguesa", precio: 12.00 },
    { nombre: "Hamburguesa vegana", cantidad: 0, clase: "hamburguesa", precio: 9.00 },
    { nombre: "Hamburguesa normal", cantidad: 0, clase: "hamburguesa", precio: 8.00 }

];

//array con lista de productos 
const allLists = [listBebidas, listPatatas, listFastFood, listHamburguesa];

//btn "lupa"
btnPostal.addEventListener("click", function () {

    sectionPostal.classList.add("d-none");
    sectionPedidos.classList.remove("d-none");

});


//btn img 
btnBebidas.addEventListener("click", () => toggleList(listBebidas));
btnFritas.addEventListener("click", () => toggleList(listPatatas));
btnFastFood.addEventListener("click", () => toggleList(listFastFood));
btnHamburger.addEventListener("click", () => toggleList(listHamburguesa));


//Función abrir cerrar listas
function toggleList(targetList) {
    allLists.forEach(list => {
        if (list !== targetList) list.classList.add("d-none");
    });

    targetList.classList.toggle("d-none");
};


//abrir modal del carrito
btnCarrito.addEventListener("click", function () {
    listCarrito.innerHTML = ""

    listaCarrito.forEach(lista => {

        if (lista.cantidad > 0) {


            let createLi = document.createElement("li");
            createLi.innerText = `${lista.nombre} | Precio uds. ${lista.precio}€ | Cantidad ${lista.cantidad}`;

            listCarrito.appendChild(createLi);

            let total = 0;
            listaCarrito.forEach(item => {
                total += item.precio * item.cantidad;
            });

            cuentaTotal.innerText = "Total a pagar: " + total + "€";
        }

    });
    const modal = new bootstrap.Modal(document.getElementById("modalCarrito"));
    modal.show();
});

//FUNCIONES BTN SUMAR
let pedidoUsuario = [];
btnSumar.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const producto = listaCarrito[index];

        listaCarrito[index].cantidad++;
        console.log(`${listaCarrito[index].nombre}: ${listaCarrito[index].cantidad}`);


        if (producto.cantidad > 0) {
            pedidoUsuario.push({
                nombre: producto.nombre,
                cantidad: producto.cantidad,
                precio: producto.precio
            });
            console.log("Pedido actual:", pedidoUsuario);
        }
    });
});
//FUNCIONES BTN RESTAR
btnRestar.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        if (listaCarrito[index].cantidad > 0) {

            listaCarrito[index].cantidad--;
            console.log(`${listaCarrito[index].nombre}: ${listaCarrito[index].cantidad}`);

        }

        if (listaCarrito.every(item => item.cantidad === 0)) { cuentaTotal.innerText = ""; };

    });
});

//FUNCIONES BTN CONFIRMAR PEDIDO

btnConfirmarPedido.addEventListener("click", function () {


});



