//capturamos dom
//text 
let premioGordo = document.querySelector(".premioGordo");
let premioMedio = document.querySelector(".premioMedio");
let premioChico = document.querySelector(".premioChico");
let perdiste = document.querySelector(".perdiste");
let monedas = document.querySelector(".monedas");
let ultimoResultado = document.querySelector(".ultimoResultado");
let selectText = document.querySelector(".selectText")

//btn
let btnJugar = document.querySelector("#btnJugar");
let btnReset = document.querySelector("#btnReset");
let btnNext = document.querySelector("#btnNext");
let btnBack = document.querySelector("#btnBack");
//img
let slotCereza = document.querySelector("#slotCereza");
let slotDiamante = document.querySelector("#slotDiamante");
let slot7 = document.querySelector("#slot7");
//input
let inputApostar = document.querySelector("#inpApostar");
//radio
let divRadio0 = document.querySelector("#divRadio0");
let divRadio1 = document.querySelector("#divRadio1");
let divRadio2 = document.querySelector("#divRadio2");

//let array
let jugada = ["slotCereza", "slotDiamante", "slot7"];

//monedas del jugador
let monedasJugador = 100;
monedas.textContent = "Monedas: " + 100;
selectText.textContent = "Seleccione un slot"


btnJugar.addEventListener("click", function () {

    // número aleatorio
    const jugadaRandom = jugada[Math.floor(Math.random() * jugada.length)];
    console.log("slot = " + jugadaRandom);

    // radio seleccionado
    let radioSelect = document.querySelector("input[name='slots']:checked");

    if (radioSelect) {
        let selectJugador = radioSelect.value;
        let apuesta = Number(inputApostar.value);

        if (isNaN(apuesta) || apuesta < 10 || apuesta > monedasJugador || !Number.isInteger(apuesta)) {
            alert("Apuesta inválida");
            inputApostar.value = "";
            return;

        }

        if (selectJugador === jugadaRandom) {
            // ganó → ahora depende del slot que salió
            if (jugadaRandom === "slotCereza") {
                premioChico.textContent = "Ganaste el premio CHICO 🍒 " + (apuesta * 2) + " Monedas";
                monedasJugador += (apuesta * 2);

            } else if (jugadaRandom === "slotDiamante") {
                premioMedio.textContent = "Ganaste el premio Medio 💎 " + (apuesta * 3) + " Monedas";
                monedasJugador += (apuesta * 3);


            } else if (jugadaRandom === "slot7") {
                premioGordo.textContent = "Ganaste el premio GORDO 🎰 " + (apuesta * 5) + " Monedas";
                monedasJugador += (apuesta * 5);
            }

        } else {
            perdiste.textContent = "Perdiste 😢 " + apuesta + " monedas";
            monedasJugador -= apuesta;
        }

        if (monedasJugador <= 9) {

            perdiste.textContent = "GAME OVER"
            btnReset.style.display = "block"
            btnReset.classList.remove("d-none");
            btnReset.addEventListener("click", resetGame)

        } else if (monedasJugador >= 2000) {

            perdiste.textContent = "YOU WIN"
            btnReset.classList.remove("d-none");

        } else {
            resetJugada();

        }

        // actualizar monedas en pantalla
        monedas.textContent = "Monedas actuales: " + monedasJugador;
        radioSelect.checked = false;
        inputApostar.value = ""
        inputApostar.disabled = true;
        btnJugar.disabled = true;
        selectText.textContent = "";


    } else {
        alert("Selecciona un slot antes de jugar");
    }
});
//función reset game
function resetGame() {

    setTimeout(() => {
        monedasJugador = 100;
        monedas.textContent = "Monedas: " + monedasJugador;
        inputApostar.disabled = false;
        btnJugar.disabled = false;
        btnReset.classList.add("d-none");
        premioChico.textContent = "";
        premioChico.textContent = "";
        premioMedio.textContent = "";
        premioGordo.textContent = "";
        perdiste.textContent = "";
    }, 500);

}


//función reset jugada
function resetJugada() {
    setTimeout(() => {
        inputApostar.disabled = false;
        btnJugar.disabled = false;
        premioChico.textContent = "";
        premioChico.textContent = "";
        premioMedio.textContent = "";
        premioGordo.textContent = "";
        perdiste.textContent = "";

    }, 2500);
}


//btn NEXT

btnNext.addEventListener("click", function () {
    window.location.href = "pokeCutre.html"
})

//btn BACK

btnBack.addEventListener("click", function () {
    window.location.href = "piedraPapelTijeras.html";

})

//btn login
let btnBackLogin = document.getElementById("btnBackLogin");
btnBackLogin.addEventListener("click", function () {

    window.location.href = "../index.html"
})