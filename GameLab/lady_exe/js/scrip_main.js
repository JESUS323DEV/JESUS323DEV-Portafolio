//Botones
//Botones sección Atacar/Defensa
const btnAttack = document.getElementById("btnAttack");
const btnShield = document.getElementById("btnShield");
//Botones Ataques
const btnMordisco = document.getElementById("btnMordisco");
const btnElectrico = document.getElementById("btnElectrico");
//Botones Escudos
const btnShieldFisico = document.getElementById("btnShieldFisico");
const btnShieldElemen = document.getElementById("btnShieldElemen");

//Imágenes player/cpu
const ladyImg = document.getElementById("ladyImg");
const cpuImg = document.getElementById("cpuImg");

//Sección snacks
const snackCurar = document.getElementById("snackCurar");
const snackCritico = document.getElementById("snackCritico");
const snackAtaque = document.getElementById("snackAtaque");

//Ataque y Escudos Seleccionados
const ataqueSelect = document.querySelectorAll(".btnAtaque");
const escudoSelect = document.querySelectorAll(".btnEscudo");

//Secciones 
const sectionAttack = document.getElementById("sectionAttack");
const sectionShield = document.getElementById("sectionShield");



let turnoPlayer = "player"
let turnoCpu = "cpu"

function ajustarAltura() {
    document.body.style.height = `${window.innerHeight}px`;
}

window.addEventListener("load", ajustarAltura);
window.addEventListener("resize", ajustarAltura);
window.addEventListener("orientationchange", ajustarAltura);


//TURNO DEL PLAYER
//guardar ataque select
let ataqueSeleccionado;
ataqueSelect.forEach(ataques => {
    ataques.addEventListener("click", function () {

        ataqueSeleccionado = ataques.dataset.ataque;
        console.log("Select", ataques.dataset.ataque)
    });
});


//Función al dar click en btn ataque
btnAttack.addEventListener("click", function () {
    let defensaCpu = Math.floor(Math.random() * 2) === 0 ? "fisico" : "elemental";

    console.log("🛡️ Defensa CPU:", defensaCpu);
    console.log("⚡ Ataque de Lady:", ataqueSeleccionado);

    if (ataqueSeleccionado) {

        if (ataqueSeleccionado && turnoPlayer === "player") {

            if (ataqueSeleccionado === "mordisco" && defensaCpu === "fisico") {

                console.log("💫 Daño reducido");

            } else if (ataqueSeleccionado === "pelotaElectrica" && defensaCpu === "elemental") {
                console.log("💫 Daño reducido");


            } else {

                console.log("🔥 Ataque efectivo");
            };


        };
    };

    turnoPlayer = "cpu"
    sectionAttack.classList.add("d-none");
    sectionShield.classList.remove("d-none");
    btnAttack.classList.add("d-none");
    btnShield.classList.remove("d-none")

});








//TURNO DE DEFENDERSE Y ATAQUE DE LA MAQUINA

//guardar escudo select
let escudoSeleccionado;
escudoSelect.forEach(escudos => {
    escudos.addEventListener("click", function () {
        escudoSeleccionado = escudos.dataset.escudo

        console.log("select", escudos.dataset.escudo);
    });



})

//Función al dar click en btn defensa
btnShield.addEventListener("click", function () {
    let ataqueCpu = Math.floor(Math.random() * 2) === 0 ? "fisico" : "elemental";

    if (turnoPlayer === "cpu") {

        if (ataqueCpu === escudoSeleccionado) {

            console.log("Daño reducido")

        } else {

            console.log("Ataque efectivo");
        };


        turnoPlayer = "player"

        sectionShield.classList.add("d-none");
        sectionAttack.classList.remove("d-none");
        btnAttack.classList.remove("d-none");
        btnShield.classList.add("d-none")

    };





})