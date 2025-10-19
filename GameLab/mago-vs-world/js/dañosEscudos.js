//========================DAÑO======================================================


//ocultar daños del jugador
function ocultarDañosJugador() {

    //quitar badge daño normal
    document.querySelectorAll("#vidaJugador .efectivo").forEach(dNormal => {
        dNormal.classList.add("d-none");
    });

    //quitar badge daño super-efectivo
    document.querySelectorAll("#vidaJugador .superEfec").forEach(superEffect => {

        superEffect.classList.add("d-none");
    });

    //quitar daño no efectivo
    document.querySelectorAll("#vidaJugador .noEsEfec").forEach(dNoEffect => {
        dNoEffect.classList.add("d-none");
    });

}

//ocultar daños de la maquina
function ocultarDañosMaquina() {

    document.querySelectorAll("#vidaMaquina .efectivo").forEach(dNormal => {

        dNormal.classList.add("d-none")
    })

    document.querySelectorAll("#vidaMaquina .superEfec").forEach(superEffect => {

        superEffect.classList.add("d-none")
    })

    document.querySelectorAll("#vidaMaquina .noEsEfec").forEach(dNoEffect => {

        dNoEffect.classList.add("d-none")
    })


}


//======================ESCUDOS===========================================================
//FUNCIONES MOSTRAR ESCUDOS OCULTAR ATAQUES
// Mostrar escudos / ocultar ataques
function mostrarEscudos() {
    document.querySelectorAll(".imgEscudos").forEach(img => {
        img.classList.remove("d-none");


        document.querySelector(".fuego").textContent = "Escudo de Fuego";
        document.querySelector(".agua").textContent = "Escudo de Agua";
        document.querySelector(".planta").textContent = "Escudo de Planta"


    });

    document.querySelectorAll(".imgAtaques").forEach(img => {
        img.classList.add("d-none"); // ocultar ataques
    });
}

// Ocultar escudos / mostrar ataques
function mostrarAtaques() {
    // mostrar ataques
    document.querySelectorAll(".imgAtaques").forEach(img => {
        img.classList.remove("d-none");

    });

    document.querySelector(".fuego").textContent = "Ataque de Fuego";
    document.querySelector(".agua").textContent = "Ataque de Agua";
    document.querySelector(".planta").textContent = "Ataque de Planta";

    document.querySelectorAll(".imgEscudos").forEach(img => {

        img.classList.add("d-none");
    })

}




//====================PROBABILIDAD DE CRITICO===================================
//PROBABILIDAD DE CRITICO
function probCritico() {
    let dañoCritico = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

    console.log("Crit dentro de función:", dañoCritico)

    return dañoCritico;

}




//====================== LOG DE BATALLA  EN PANTALLA=============
//Mostrar / ocultar log de batalla en pantalla
//Agregar y guardar ataques del jugador
function agregarLogJugador(mensaje) {
    const log = document.getElementById("logJugador");

    // Si ya hay 2 mensajes, borra el más viejo
    while (log.children.length >= 2) {
        log.removeChild(log.firstChild);
    }

    const p = document.createElement("p");

    p.textContent = mensaje;
    p.style.color = "green"
    log.appendChild(p);
}

//Agregar y guardar ataques de la máquina
function agregarLogMaquina(mensaje) {
    const log = document.getElementById("logMaquina");


    while (log.children.length >= 2) {
        log.removeChild(log.firstChild);
    }

    const p = document.createElement("p");
    p.textContent = mensaje;
    p.style.color = "red"

    log.appendChild(p);

}

//Colores de vida (actualización visual)
function vida0() {
    //  Asegurarse de que las vidas no bajen de 0
    if (vidaJugadorCount < 0) vidaJugadorCount = 0;
    if (vidaMaquinaCount < 0) vidaMaquinaCount = 0;

    //Ajustar ancho de barras según vida actual
    barraRellenoMaquina.style.width = (vidaMaquinaCount / 150) * 100 + "%";

    
    vidaJugadorCount = Math.min(vidaJugadorCount, 100);
    barraRellenoJugador.style.width = (vidaJugadorCount / 100) * 100 + "%";



    // Cambiar colores según rango de vida (jugador)
    if (vidaJugadorCount > 60) {
        barraRellenoJugador.style.backgroundColor = "green";
    } else if (vidaJugadorCount > 30) {
        barraRellenoJugador.style.backgroundColor = "orange";
    } else {
        barraRellenoJugador.style.backgroundColor = "red";
    }

    //Cambiar colores según rango de vida (máquina)
    if (vidaMaquinaCount > 60) {
        barraRellenoMaquina.style.backgroundColor = "green";
    } else if (vidaMaquinaCount > 30) {
        barraRellenoMaquina.style.backgroundColor = "orange";
    } else {
        barraRellenoMaquina.style.backgroundColor = "red";
    }

    // barra gris (pisar color anterior)
    if (vidaJugadorCount === 0) {
        barraRellenoJugador.style.backgroundColor = "gray";
    }
    if (vidaMaquinaCount === 0) {
        barraRellenoMaquina.style.backgroundColor = "gray";
    }
}



//animaciones btn atacar 
function animationBtnAtacar() {

    btnAttack.classList.add("styleAtaqueActive");
    setTimeout(() => btnAttack.classList.remove("styleAtaqueActive"), 2000);

}





//animaciones btn defenderse
function animationBtnDefensa() {

    btnNextTurno.classList.add("styleDefensaActiva");
    setTimeout(() => btnNextTurno.classList.remove("styleDefensaActiva"), 3200);

}


//animaciones cuando  ataque el mago 
function animarAtaqueMago() {

    imgPlayer.classList.add("atacando");
    setTimeout(() => imgPlayer.classList.remove("atacando"), 3200);
}



//animaciones cuando  ataque el slime 
function animarAtaqueSlime() {

    imgMaquina.classList.add("atacando2");
    setTimeout(() => imgMaquina.classList.remove("atacando2"), 3200);
}

