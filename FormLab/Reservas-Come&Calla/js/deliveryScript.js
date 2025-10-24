const btnBebidas = document.getElementById("btnBebidas");
const btnFritas = document.getElementById("btnFritas");
const btnFastFood = document.getElementById("btnFastFood");
const btnHamburger = document.getElementById("btnHamburger");
const btnPostal = document.getElementById("btnPostal");


const listBebidas = document.getElementById("listBebidas");
const listPatatas = document.getElementById("listPatatas");
const listFastFood = document.getElementById("listFastFood");
const listHamburguesa = document.getElementById("listHamburguesa");


const sectionPostal = document.getElementById("sectionPostal");
const sectionPedidos = document.getElementById("sectionPedidos");

const allLists = [listBebidas, listPatatas, listFastFood, listHamburguesa];

btnPostal.addEventListener("click", function () {

    sectionPostal.classList.add("d-none");
    sectionPedidos.classList.remove("d-none");

});


//abrir cerrar listas
btnBebidas.addEventListener("click", () => toggleList(listBebidas));
btnFritas.addEventListener("click", () => toggleList(listPatatas));
btnFastFood.addEventListener("click", () => toggleList(listFastFood));
btnHamburger.addEventListener("click", () => toggleList(listHamburguesa));


function toggleList(targetList) {
    allLists.forEach(list => {
        if (list !== targetList) list.classList.add("d-none");
    });
    targetList.classList.toggle("d-none");
}



