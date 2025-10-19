//====BOTONES====
//======función mostrar btn ataque solo primer turno



btnNextTurno.addEventListener("click", () => {
    if (turnoJugador === "maquina") {
        ataqueMaquina();
    }
});


//BOTONES NEXT&BACK&LOGIN
//BTN BACK
btnBack.addEventListener("click", function () {
    window.location.href = "tragaMonedas.html";
})

//BTN NEXT
btnNext.addEventListener("click", function () {
    window.location.href = "";
})

//BTN LOGIN
btnBackLogin.addEventListener("click", function () {

    window.location.href = "../index.html"
})


//BTN REINTENTAR
btnReintentar.addEventListener("click", () => location.reload());

//=======================================