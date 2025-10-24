const btnEnviar = document.getElementById("btnEnviar");
const btnConfirmDatos = document.getElementById("btnConfirmDatos");
const btnConfirmReserva = document.getElementById("btnConfirmReserva");
const btnAtras = document.getElementById("btnAtras");

const checkAceptar = document.getElementById("checkAceptar");

const inputName = document.getElementById("inputName");
const inputTel = document.getElementById("inputTel");
const inputEmail = document.getElementById("inputEmail");
const inputFecha = document.getElementById("inputFecha");
const inputHora = document.getElementById("inputHora");
const inputNumClientes = document.getElementById("inputNumClientes");
const inputComentarios = document.getElementById("inputComentarios");

const labelName = document.getElementById("labelName");
const labelTel = document.getElementById("labelTel");
const labelEmail = document.getElementById("labelEmail");
const labelFecha = document.getElementById("labelFecha");
const labelHora = document.getElementById("labelHora");
const textCheck = document.getElementById("textCheck")

const labelClientes = document.getElementById("labelClientes");
const labelComentarios = document.getElementById("labelComentarios");

const fase1 = document.getElementById("fase1");
const fase2 = document.getElementById("fase2");
const resumenReserva = document.getElementById("resumenReserva");


localStorage.clear();



btnAtras.addEventListener("click", () => {
    if (!resumenReserva.classList.contains("d-none")) {
        // Si estás en el resumen → volver a fase 2
        resumenReserva.classList.add("d-none");
        fase2.classList.remove("d-none");
        btnConfirmReserva.classList.add("d-none");

    } else if (!fase2.classList.contains("d-none")) {
        // Si estás en la fase 2 → volver a fase 1
        fase2.classList.add("d-none");
        fase1.classList.remove("d-none");
        btnAtras.classList.add("d-none");
        btnConfirmReserva.classList.add("d-none");


    }


});


//fase1
btnConfirmDatos.addEventListener("click", function () {

    if (validarName() && validarFecha() && validarHora() && validarClientes()) {

        localStorage.setItem("nombre", inputName.value);
        localStorage.setItem("fecha", inputFecha.value);
        localStorage.setItem("hora", inputHora.value);
        localStorage.setItem("numClientes", inputNumClientes.value);



        fase1.classList.add("d-none");
        fase2.classList.remove("d-none");
    }

    console.log(localStorage);


});


//Funciones que se aplican en la fase 1

//Funciones input Nombre
inputName.addEventListener("input", validarName);

function validarName() {
    let nameValidar = inputName.value.trim().length;

    if (inputName.value.trim().length === 0) {

        labelName.textContent = "***";
        labelName.style.color = "red";
        return false;

    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(inputName.value)) {

        labelName.textContent = "***";
        labelName.style.color = "red";
        return false;

    } else if (nameValidar < 3 || nameValidar > 20) {

        labelName.textContent = "***";
        labelName.style.color = "red";
        return false;

    } else {
        labelName.textContent = "";
        labelName.style.color = "";
        return true;
    }



};

// Funciones input Fechas 

inputFecha.addEventListener("input", validarFecha);

function validarFecha() {


    const fechaSeleccionada = new Date(inputFecha.value);
    const hoy = new Date();

    hoy.setHours(0, 0, 0, 0);


    if (inputFecha.value === "") {

        labelFecha.textContent = "***";
        labelFecha.style.color = "red";
        return false;

    } else if (fechaSeleccionada < hoy) {

        labelFecha.textContent = "***";
        labelFecha.style.color = "red";
        return false;
    } else {

        labelFecha.textContent = "";
        labelFecha.style.color = "";
        return true;
    }

};

//Funciones input hora 

inputHora.addEventListener("input", validarHora);

function validarHora() {

    const horaSeleccionada = new Date(`2025-01-01T${inputHora.value}:00`);
    console.log(horaSeleccionada, "Hora seleccionada")

    const turnoMañana = new Date("2025-01-01T09:00:00");
    const turnoMedioDia = new Date("2025-01-01T14:00:00");
    const turnoTarde = new Date("2025-01-01T16:00:00");
    const turnoNoche = new Date("2025-01-01T21:00:00");

    if (inputHora.value === "") {

        labelHora.textContent = "***"
        labelHora.style.color = "red"
        return false;

    } else if (
        (horaSeleccionada >= turnoMañana && horaSeleccionada <= turnoMedioDia) ||
        (horaSeleccionada >= turnoTarde && horaSeleccionada <= turnoNoche)
    ) {
        labelHora.textContent = "✔";
        return true;

    } else {
        labelHora.textContent = "Fuera del horario disponible";
        labelHora.style.color = "#ff0000ff"
        labelHora.style.fontSize = "14px"
    }


};

//Funciones input numero de clientes
inputNumClientes.addEventListener("input", validarClientes);

function validarClientes() {



    let clientesValidar = Number(inputNumClientes.value);

    if (clientesValidar > 0 && clientesValidar <= 15) {

        labelClientes.textContent = "✔"
        return true;

    } else {
        labelClientes.textContent = "***"
        labelClientes.style.color = "red"
        return false;



    }

};



//fase2
btnEnviar.addEventListener("click", function () {
    validarComentarios()

    if (validarTel() && validarEmail() && validarCheckBox()) {

        localStorage.setItem("tel", inputTel.value);
        localStorage.setItem("email", inputEmail.value);
        localStorage.setItem("comentarios", inputComentarios.value);
        localStorage.setItem("nombre", inputName.value);
        localStorage.setItem("fecha", inputFecha.value);
        localStorage.setItem("hora", inputHora.value);
        localStorage.setItem("numClientes", inputNumClientes.value);



        document.getElementById("resumenReserva").innerHTML = `
    <p><strong>Nombre:</strong> ${localStorage.getItem("nombre")}</p>
    <p><strong>Tel:</strong> ${localStorage.getItem("tel")}</p>
    <p><strong>Email:</strong> ${localStorage.getItem("email")}</p>
    <p><strong>Fecha:</strong> ${localStorage.getItem("fecha")}</p>
    <p><strong>Hora:</strong> ${localStorage.getItem("hora")}</p>
    <p><strong>Número de clientes:</strong> ${localStorage.getItem("numClientes")}</p>
    <p><strong>Comentarios:</strong> ${localStorage.getItem("comentarios")}</p>
`;


        fase2.classList.add("d-none");
        resumenReserva.classList.remove("d-none");

        btnConfirmReserva.classList.remove("d-none");
        btnAtras.classList.remove("d-none");



    } else {

    };

    console.log(localStorage);
});

//Funciones que se aplican en la fase 2

//funciones input Teléfono 
inputTel.addEventListener("input", validarTel);
function validarTel() {

    let telValidar = inputTel.value.trim().length;

    if (inputTel.value.trim().length === 0) {

        labelTel.textContent = "***";
        labelTel.style.color = "red";
        return false;

    } else if (telValidar < 12) {

        labelTel.textContent = "***";
        labelTel.style.color = "red";
        return false;
    } else if (!/^\+\d+$/.test(inputTel.value)) {

        labelTel.textContent = "***";
        labelTel.style.color = "red";
        return false;

    } else {
        labelTel.textContent = "";
        labelTel.style.color = "";
        return true;

    }

};

//Funciones input Email

inputEmail.addEventListener("input", validarEmail);

function validarEmail() {

    let emailValidar = inputEmail.value.trim().length;

    if (inputEmail.value.trim().length === 0) {

        labelEmail.textContent = "***";
        labelEmail.style.color = "red";
        return false;

    } else if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(inputEmail.value)) {

        labelEmail.textContent = "***";
        labelEmail.style.color = "red";
        return false;

    } else if (emailValidar < 3) {

        labelEmail.textContent = "***";
        labelEmail.style.color = "red";
        return false;



    } else {

        labelEmail.textContent = "";
        labelEmail.style.color = "";
        return true;
    }

};


//Funciones textarea comentarios
inputComentarios.addEventListener("input", validarComentarios);
function validarComentarios() {

    if (inputComentarios.value.trim().length === 0) {


        labelComentarios.textContent = ""
        labelComentarios.style.color = ""


    } else if (inputComentarios.value.trim().length < 3 || inputComentarios.value.trim().length > 100) {

        labelComentarios.textContent = "***"
        labelComentarios.style.color = "red"
        return false;


    } else {

        labelComentarios.textContent = ""
        labelComentarios.style.color = ""
        return true;
    }


};

//Funciones checkBox aceptar términos
checkAceptar.addEventListener("change", validarCheckBox);
function validarCheckBox() {

    const checkBoxValidar = checkAceptar.checked;

    if (checkBoxValidar) {
        return true;




    } else {


        textCheck.textContent = "***";
        textCheck.style.color = "red";
        return false;

    }




}
























