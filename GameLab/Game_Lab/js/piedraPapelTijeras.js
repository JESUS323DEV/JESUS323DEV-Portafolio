//Mini juego Piedra Papel o Tijeras

//capturamos IMG-PUÑOS

let imgPuño1 = document.querySelector("#imgPuño1");
let imgPuño2 = document.querySelector("#imgPuño2");

//btn reset
const btnReset = document.getElementById("btnResetGame");


//capturamos IMG-BOTONES 
let imgBtnPiedra = document.querySelector("#imgBtnPiedra");
let imgBtnPapel = document.querySelector("#imgBtnPapel");
let imgBtnTijeras = document.querySelector("#imgBtnTijeras");


//capturamos texto 
let resultado1 = document.querySelector(".resultado1")
let puntosMaquina = document.querySelector(".puntosMaquina");
let puntosJugador = document.querySelector(".puntosJugador");
let winTextJugador = document.querySelector(".winTextJugador");
let loseTextJugador = document.querySelector(".loseTextJugador");
let puntosGanar = 0;
let puntosPerder = 0;
//contadores de victoria 
let winJugador = 0;
let winMaquina = 0

//evento si el jugador elige piedra 
imgBtnPiedra.addEventListener("click", okPiedra);
function okPiedra() {


    //creamos un número entre 0 y 2 (0 incluido)
    let pptRandom = Math.floor(Math.random() * 3);

    console.log("Máquina eligió:", pptRandom);

    let jugador = 0;


    if (pptRandom === jugador) {
        resultado1.textContent = "Empate 😐";
        imgPuño2.style.animation = "none";
        imgPuño1.style.animation = "none";
        resetPuños()



    } else if (pptRandom === 1) {
        resultado1.textContent = "Perdiste 😭 ";

        puntosPerder++;

        puntosMaquina.textContent = "Puntos de la Maquina: " + puntosPerder;
        imgPuño1.src = "../media/img/PuñoPapelTijeras/papel-btn.png"
        imgPuño1.style.animation = "none";
        imgPuño2.style.animation = "none";
        winMaquina++;

        resetPuños();
        intentos()




    } else {
        resultado1.textContent = "Ganaste 😎";
        puntosGanar++;
        puntosJugador.textContent = "Puntos del jugador: " + puntosGanar;

        imgPuño1.src = "../media/img/PuñoPapelTijeras/tijeras-btn.png";
        imgPuño1.style.animation = "none";
        imgPuño1.style.transform = "scaleX(-1)";
        imgPuño2.style.animation = "none";
        winJugador++;
        resetPuños();
        intentos();

    }


    imgBtnPiedra.style.pointerEvents = "none";
    imgBtnPapel.style.pointerEvents = "none";
    imgBtnTijeras.style.pointerEvents = "none";

}






//evento si el jugador elige papel 
imgBtnPapel.addEventListener("click", okPapel);
function okPapel() {
    //creamos un contador entre 0 y 2 (0 incluido)
    let pptRandom = Math.floor(Math.random() * 3);
    console.log("Máquina eligió:", pptRandom);


    let jugador = 1;

    if (pptRandom === jugador) {
        resultado1.textContent = "Empate 😐";
        imgPuño2.src = "../media/img/PuñoPapelTijeras/papel-btn.png";
        imgPuño2.style.transform = "scaleX(-1)";
        imgPuño2.style.animation = "none";
        imgPuño1.src = "../media/img/PuñoPapelTijeras/papel-btn.png";
        imgPuño1.style.animation = "none";
        resetPuños()


    } else if (pptRandom === 2) {
        resultado1.textContent = "Perdiste 😭";
        puntosPerder++;
        puntosMaquina.textContent = "Puntos de la Maquina: " + puntosPerder;
        imgPuño2.src = "../media/img/PuñoPapelTijeras/papel-btn.png";
        imgPuño2.style.transform = "scaleX(-1)";
        imgPuño2.style.animation = "none";
        imgPuño1.src = "../media/img/PuñoPapelTijeras/tijeras-btn.png";
        imgPuño1.style.transform = "scaleX(-1)";
        imgPuño1.style.animation = "none";
        winMaquina++;

        resetPuños()
        intentos()



    } else {

        resultado1.textContent = "Ganaste 😎";
        puntosGanar++;
        puntosJugador.textContent = "Puntos del jugador: " + puntosGanar;
        imgPuño2.src = "../media/img/PuñoPapelTijeras/papel-btn.png";
        imgPuño2.style.transform = "scaleX(-1)"
        imgPuño2.style.animation = "none";
        imgPuño1.style.animation = "none";
        winJugador++;
        resetPuños();
        intentos()
    }


    imgBtnPiedra.style.pointerEvents = "none";
    imgBtnPapel.style.pointerEvents = "none";
    imgBtnTijeras.style.pointerEvents = "none";



}


//evento si el jugador elige tijeras
imgBtnTijeras.addEventListener("click", okTijeras);
function okTijeras() {

    //creamos un contador entre 0 y 2 (0 incluido)
    let pptRandom = Math.floor(Math.random() * 3);
    console.log("Máquina eligió:", pptRandom);

    let jugador = 2;

    if (pptRandom === jugador) {
        resultado1.textContent = "Empate 😐";
        imgPuño2.src = "../media/img/PuñoPapelTijeras/tijeras-btn.png";
        imgPuño2.style.animation = "none";
        imgPuño1.src = "../media/img/PuñoPapelTijeras/tijeras-btn.png";
        imgPuño1.style.animation = "none";
        imgPuño1.style.transform = "scaleX(-1)"
        resetPuños();


    } else if (pptRandom === 0) {
        resultado1.textContent = "Perdiste 😭";
        puntosPerder++;
        puntosMaquina.textContent = "Puntos de la Maquina: " + puntosPerder;
        imgPuño2.src = "../media/img/PuñoPapelTijeras/tijeras-btn.png";
        imgPuño2.style.animation = "none";
        imgPuño1.style.animation = "none";
        winMaquina++;
        resetPuños();
        intentos()




    } else {

        resultado1.textContent = "Ganaste 😎";
        puntosGanar++;

        puntosJugador.textContent = "Puntos del jugador: " + puntosGanar;
        imgPuño2.src = "../media/img/PuñoPapelTijeras/tijeras-btn.png";
        imgPuño2.style.animation = "none";
        imgPuño1.src = "../media/img/PuñoPapelTijeras/papel-btn.png";
        imgPuño1.style.animation = "none";
        winJugador++;
        resetPuños();
        intentos()
    }

    imgBtnPiedra.style.pointerEvents = "none";
    imgBtnPapel.style.pointerEvents = "none";
    imgBtnTijeras.style.pointerEvents = "none";

}



//FUNCIÓN AL GANAR O PERDER
function intentos() {


    if (winJugador === 3) {

        let puños = document.querySelectorAll(".imgPuño1, .imgPuño2");
        let botones = document.querySelectorAll(".img-btn");

        let imgWin = document.querySelectorAll("#win");
        imgWin.forEach(img => img.classList.remove("d-none"))


        puños.forEach(puño => puño.classList.add("invisible"));
        botones.forEach(btn => btn.classList.add("invisible"));

        resultado1.textContent = ""

       

        let puntos = document.querySelectorAll(".puntosMaquina, .puntosJugador");
        puntos.forEach(p => p.classList.add("invisible"));



        let reset = document.querySelectorAll(".resetBtn")
        reset.forEach(Reset => Reset.classList.remove("d-none"));





    } else if (winMaquina === 3) {

        let puños = document.querySelectorAll(".imgPuño1, .imgPuño2");
        let botones = document.querySelectorAll(".img-btn");

        let imgLose = document.querySelectorAll("#lose");
        imgLose.forEach(img => img.classList.remove("d-none"))


        puños.forEach(puño => puño.classList.add("invisible"));
        botones.forEach(btn => btn.classList.add("invisible"));

        // Placeholder: reservado para futuras animaciones o efectos de texto
        // winTextJugador.textContent = "";

        loseTextJugador.textContent = "";


        let puntos = document.querySelectorAll(".puntosMaquina, .puntosJugador");
        puntos.forEach(p => p.classList.add("invisible"));



        let reset = document.querySelectorAll(".resetBtn")
        reset.forEach(Reset => Reset.classList.remove("d-none"));




    } else {
        //vació
    }



}




//btn reset

btnReset.addEventListener("click", function () {
    location.reload(); // recarga la página entera y reinicia el juego
});

//animación entre turnos
function resetPuños() {
    setTimeout(() => {
        // volver a las imágenes de puño cerrado
        imgPuño1.src = "../media/img/PuñoPapelTijeras/puño2.png"; // jugador
        imgPuño2.src = "../media/img/PuñoPapelTijeras/puño.png";  // máquina


        // reactivar las animaciones
        imgPuño1.style.animation = "golpeteo1 0.6s infinite alternate";
        imgPuño2.style.animation = "golpeteo2 0.6s infinite alternate";
        //escalas de rotación
        imgPuño1.style.transform = "scaleX(1)";
        imgPuño2.style.transform = "scaleX(1)";
        //desbloquear botones de juego después del ataque 
        imgBtnPiedra.style.pointerEvents = "auto";
        imgBtnPapel.style.pointerEvents = "auto";
        imgBtnTijeras.style.pointerEvents = "auto";
        resultado1.textContent = "";



    }, 2000);





}


//botón siguiente página 

let btnNext = document.querySelector("#btnNext")

btnNext.addEventListener("click", function () {

    window.location.href = "../html/tragaMonedas.html";

})

let btnBackLogin = document.getElementById("btnBackLogin");
btnBackLogin.addEventListener("click", function () {

    window.location.href = "../index.html"
})































