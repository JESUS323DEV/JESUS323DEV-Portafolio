//victorias/derrotas

let slimeHp = 1;
let magoHp = 1;

// --- Jugador ---
let vidaJugador = document.getElementById("vidaJugador");
let barraVidaJugador = document.querySelector(".barraVidaJugador");
let barraRellenoJugador = document.querySelector(".barraRellenoJugador");
let imgPlayer = document.querySelector(".imgPlayer");
// --- textos jugador ---
let jugadorVida = document.querySelector(".jugadorVida");
let jugadorSuperEfec = document.querySelector("#vidaJugador .superEfec");
let jugadorNoEsEfec = document.querySelector("#vidaJugador .noEsEfec");
let jugadorEfectivo = document.querySelector("#vidaJugador .efectivo");

// --- Máquina ---
let vidaMaquina = document.getElementById("vidaMaquina");
let barraVidaMaquina = document.querySelector(".barraVidaMaquina");
let barraRellenoMaquina = document.querySelector(".barraRellenoMaquina");
let imgMaquina = document.querySelector(".imgMaquina");
// --- texto maquina ---
let maquinaVida = document.querySelector(".maquinaVida");
let maquinaSuperEfec = document.querySelector("#vidaMaquina .superEfec");
let maquinaNoEsEfec = document.querySelector("#vidaMaquina .noEsEfec");
let maquinaEfectivo = document.querySelector("#vidaMaquina .efectivo");

// --- Ataques (radios) ---
let attackFuego = document.getElementById("attackFuego");
let attackAgua = document.getElementById("attackAgua");
let attackPlanta = document.getElementById("attackPlanta");

//--- Pociones (img) --
let vidaPots = document.getElementById("vidaPots");
let criticoPots = document.getElementById("criticoPots");

// --- Botón ---
let btnAttack = document.getElementById("btnAttack");
let btnNextTurno = document.getElementById("btnNextTurno");
//btn de pociones
let btnPots = document.getElementById("btnPots")

//btn de combate acto 1
let btnCombate = document.getElementById("btnCombate")
//btn de combate acto2
let btnActo2 = document.getElementById("btnActo2");

//Botones next/back
let btnNext = document.getElementById("btnNext");
let btnBack = document.getElementById("btnBack");
let btnBackLogin = document.getElementById("btnBackLogin");

// --- creamos array ---
let ataques = ["fuego", "agua", "planta"]

// --- vidas ---
let vidaJugadorCount = 100;
let vidaMaquinaCount = 120;

// --- texto vida ---
jugadorVida.textContent = "Vida: " + vidaJugadorCount;
maquinaVida.textContent = "vida : " + vidaMaquinaCount;

//ataque base  + poción de ataque
let buffVida = 50;
let buffCritico = 10;

//daño normal
let dañoNormal = 5;
//daño super de JUGADOR y maquina 
let dañoSuperJugador = 10;
let dañoSuperMaquina = 10;

//daño efectivo de JUGADOR y maquina 
let dañoNoEfectivoJugador = 3;
let dañoNoEfectivoMaquina = 3;
//turno jugador
let turnoJugador = "jugador";

//turno maquina
let turnoMaquina = "maquina";
//btn siguiente turno
btnNextTurno.disabled = true;


let criticBuff = 0;
let criticBuffMaquina = 0;

//BOTÓN COMBATIR PRIMER ACTO
btnCombate.addEventListener("click", function () {


    document.querySelectorAll(".primerCombate").forEach(combate => {
        combate.classList.remove("d-none");
    });

    document.querySelectorAll(".primerHistoria").forEach(history => {

        history.classList.add("d-none")
    })


});





//======función mostrar btn ataque solo primer turno
function btnAtaqueBlock() {

    document.querySelectorAll(".mostrarOcultar").forEach(ocultar => {
        ocultar.classList.remove("d-none");
    });


}






//VARIABLES DE DE POCIONES
let buffMago = null;
const pociones = document.querySelectorAll('[data-potion]');

pociones.forEach(pocion => {
    pocion.addEventListener('click', () => {
        buffMago = pocion.dataset.potion;

        pociones.forEach(p => p.classList.remove('selected'));
        pocion.classList.add('selected');
    });
});




//FUNCIÓN DE POCIONES
btnPots.addEventListener("click", function () {

    if (buffMago === "vida") {

        vidaJugadorCount = 150;
        console.log("Vida actual " + vidaJugadorCount)

        jugadorVida.textContent = "Vida Actual: " + vidaJugadorCount;
        btnAtaqueBlock()

    } else if (buffMago === "critico") {
        criticBuff = 8;
        console.log("Critico " + criticBuff)
        btnAtaqueBlock()

    } else if (buffMago === null) {

        alert("POCIONES")

    }



});

// ---FUNCIÓN ATAQUE JUGADOR ---
btnAttack.addEventListener("click", function () {


    // ---DEFENSA RANDOM DE LA MAQUINA ---
    const defensaSlim = ataques[Math.floor(Math.random() * ataques.length)];
    // radio seleccionado
    let radioSelect = document.querySelector("input[name='ataqueName']:checked");

    //=================TURNO DEL JUGADOR=================================
    if (radioSelect) {

        if (radioSelect && turnoJugador === "jugador") {

            console.log("🧙‍♂️ El Mago se prepara para atacar...");

            setTimeout(() => {


                let ataqueSelect = radioSelect.value;
                //EMPATE - DAÑO NORMAL
                if (ataqueSelect === defensaSlim) {
                    let critico = probCritico() + criticBuff;
                    let dañoTotal = dañoNormal + critico;


                    //RESTA PH DEL DAÑO TOTAL A LA MAQUINA
                    vidaMaquinaCount -= dañoTotal;

                    // 🔥 Mensaje del jugador al log
                    agregarLogJugador("🧙‍♂️ El Mago lanzó un ataque de " + ataqueSelect +
                        ". Fue un ataque normal e hizo " + dañoTotal + " puntos de daño a Slim.");


                    //TEXTO DE DAÑOS MÁQUINA
                    agregarLogMaquina("🛡️ Slim intentó defenderse con un escudo de " + defensaSlim +
                        ", pero recibió " + dañoTotal + " puntos de daño.")

                    //mostrar badge daño normal
                    document.querySelectorAll("#vidaJugador .efectivo").forEach(dNormal => {
                        dNormal.classList.remove("d-none");
                    });

                    //TEXTO ACTUALIZAR VIDA JUGADOR
                    jugadorVida.textContent = "Vida Actual: " + vidaJugadorCount;
                    barraRellenoJugador.style.width = vidaJugadorCount + "%";

                    //TEXTO ACTUALIZAR VIDA MAQUINA
                    maquinaVida.textContent = "Vida Actual: " + vidaMaquinaCount;
                    barraRellenoMaquina.style.width = vidaMaquinaCount + "%";

                    // Cambiar color según la vida
                    vida0()

                    //log
                    console.log("🧙‍♂️ MAGO ELIGIÓ ATAQUE DE " + ataqueSelect)
                    console.log("🤖🛡️  Maquina eligió escudo de " + defensaSlim)

                    console.log("🧙‍♂️ DAÑO NORMAL: " + dañoNormal);

                    console.log("✨ Crítico: " + critico);
                    if (buffMago === "critico") {
                        console.log("✨ Crítico normal: " + (critico - buffCritico) + " + Poción: " + buffCritico + " = Total crítico: " + critico);
                    }

                    console.log("⚔️ DAÑO TOTAL = " + dañoNormal + " + " + critico + " = " + dañoTotal);
                    console.log("🧙‍♂️ Vida jugador → " + vidaJugadorCount + " (se mantiene)");
                    console.log("👾 Vida máquina → " + vidaMaquinaCount);
                    console.log("==================================================================")


                    //GAnA EL JUGADOR - DAÑO SUPER-EFECTIVO
                } else if ((ataqueSelect === "agua" && defensaSlim === "fuego") ||
                    (ataqueSelect === "fuego" && defensaSlim === "planta") ||
                    (ataqueSelect === "planta" && defensaSlim === "agua")) {

                    let critico = probCritico() + criticBuff;
                    let dañoTotal = dañoSuperJugador + critico;


                    //RESTA PH DEL DAÑO TOTAL A LA MAQUINA
                    vidaMaquinaCount -= dañoTotal;


                    //TEXTO DE DAÑOS JUGADOR
                    agregarLogJugador("🧙‍♂️ El Mago lanzó un ataque de " + ataqueSelect +
                        ". ¡Fue SÚPER EFECTIVO! y causó " + dañoTotal + " puntos de daño a Slim! 💥");

                    //TEXTO DE DAÑOS MÁQUINA
                    agregarLogMaquina("🛡️ Slim intentó defenderse con un escudo de " + defensaSlim +
                        ", pero el golpe fue ¡SÚPER EFECTIVO! y recibió " + dañoTotal + " puntos de daño.");

                    //daños super-efectivo
                    document.querySelectorAll("#vidaJugador .superEfec").forEach(superEffect => {

                        superEffect.classList.remove("d-none");
                    });

                    //TEXTO ACTUALIZAR VIDA Jugador
                    jugadorVida.textContent = "Vida Actual: " + vidaJugadorCount;
                    barraRellenoJugador.style.width = vidaJugadorCount + "%";

                    //TEXTO ACTUALIZAR VIDA MAQUINA
                    maquinaVida.textContent = "Vida Actual: " + vidaMaquinaCount;
                    barraRellenoMaquina.style.width = vidaMaquinaCount + "%";

                    // Cambiar color según la vida
                    vida0()



                    console.log("🧙‍♂️ MAGO ELIGIÓ ATAQUE DE " + ataqueSelect)
                    console.log("🤖🛡️  Maquina eligió escudo de " + defensaSlim)

                    console.log("🧙‍♂️ DAÑO SUPER-EFECTIVO: " + dañoSuperJugador);

                    console.log("✨ Crítico: " + critico);
                    if (buffMago === "critico") {

            
                        console.log("✨ Crítico normal: " + (critico - buffCritico) + " + Poción: " + buffCritico + " = Total crítico: " + critico);
                    }

                    console.log("⚔️ Fórmula → " + dañoSuperJugador + " + " + critico + " = " + dañoTotal);

                    console.log("🧙‍♂️ Vida máquina → " + vidaMaquinaCount);
                    console.log("👾 Vida jugador → " + vidaJugadorCount + " (se mantiene)");
                    console.log("==================================================================");


                } else {
                    let critico = probCritico() + criticBuff;
                    let dañoTotal = dañoNoEfectivoJugador + critico;

                    //RESTA PH DEL DAÑO TOTAL A LA MAQUINA
                    vidaMaquinaCount -= dañoTotal;

                    //TEXTO DE DAÑOS JUGADOR

                    agregarLogJugador("🧙‍♂️ El Mago lanzó un ataque de " + ataqueSelect +
                        ", pero no fue muy efectivo... solo causó " + dañoTotal + " puntos de daño.");


                    //TEXTO DE DAÑOS MÁQUINA

                    agregarLogMaquina("🛡️ Slim levantó un escudo de " + defensaSlim +
                        " y logró reducir el daño. Solo recibió " + dañoTotal + " puntos.");

                    //mostrar daño no efectivo
                    document.querySelectorAll("#vidaJugador .noEsEfec").forEach(dNoEffect => {
                        dNoEffect.classList.remove("d-none");
                    });

                    //TEXTO ACTUALIZAR VIDA jugador
                    jugadorVida.textContent = "Vida Actual: " + vidaJugadorCount;
                    barraRellenoJugador.style.width = vidaJugadorCount + "%";


                    //TEXTO ACTUALIZAR VIDA MAQUINA
                    maquinaVida.textContent = "Vida Actual: " + vidaMaquinaCount;
                    barraRellenoMaquina.style.width = vidaMaquinaCount + "%";

                    // Cambiar color según la vida
                    vida0()



                    console.log("🧙‍♂️ MAGO ELIGIÓ ATAQUE DE " + ataqueSelect)
                    console.log("🤖🛡️  Maquina eligió escudo de " + defensaSlim)

                    console.log("🧙‍♂️ DAÑO BAJO: " + dañoNoEfectivoJugador);
                    console.log("✨ Crítico: " + critico);
                    if (buffMago === "critico") {
                        console.log("✨ Crítico normal: " + (critico - buffCritico) + " + Poción: " + buffCritico + " = Total crítico: " + critico);
                    }
                    console.log("⚔️ Fórmula → " + dañoNoEfectivoJugador + " + " + critico + " = " + dañoTotal);

                    console.log("🧙‍♂️ Vida máquina → " + vidaMaquinaCount);
                    console.log("👾 Vida jugador → " + vidaJugadorCount + " (se mantiene)");
                    console.log("==================================================================")


                }





                turnoJugador = "maquina"
                btnAttack.disabled = true;
                btnNextTurno.disabled = false;
                radioSelect.checked = false;
                mostrarEscudos()
                ocultarDañosMaquina()
                ganaMago()

            }, 1000);




        }
    }
});
//==================================


//====================================TURNO DE LA MAQUINA ==========================

//FUNCIÓN ATAQUE MAQUINA
function ataqueMaquina() {

    setTimeout(() => {

        console.log("🤖 La maquina esta pensado...")

        //ATAQUE RANDOM SLIM
        const ataqueSlim = ataques[Math.floor(Math.random() * ataques.length)];

        //FUNCIÓN ELEGIR ESCUDOS
        let defensaMago = document.querySelector("input[name='ataqueName']:checked");

        if (defensaMago) {
            defensaMago = defensaMago.value;
        } else {

            alert("selecciones un escudo")
            return;

        }




        //DAÑÓ NORMAL DEL SLIM
        if (ataqueSlim === defensaMago) {

            let critico = probCritico() + criticBuffMaquina;
            let dañoTotal = dañoNormal + critico;


            //RESTA PH DEL DAÑO TOTAL AL JUGADOR
            vidaJugadorCount -= dañoTotal;

            //TEXTO MAQUINA
            agregarLogMaquina("👾 Slim lanzó un ataque de " + ataqueSlim +
                ". Fue un golpe normal e hizo " + dañoTotal + " puntos de daño al Mago.");
            //TEXTO JUGADOR
            agregarLogJugador("🛡️ El Mago levantó un escudo de " + defensaMago +
                " y redujo el impacto. Solo recibió " + dañoTotal + " puntos de daño.");

            //mostrar daños maquina
            document.querySelectorAll("#vidaMaquina .efectivo").forEach(dNormal => {

                dNormal.classList.remove("d-none")
            })

            //TEXTO ACTUALIZAR VIDA MAQUINA
            maquinaVida.textContent = "Vida Actual: " + vidaMaquinaCount;
            barraRellenoMaquina.style.width = vidaMaquinaCount + "%";

            //TEXTO ACTUALIZAR VIDA JUGADOR
            jugadorVida.textContent = "Vida Actual: " + vidaJugadorCount;
            barraRellenoJugador.style.width = vidaJugadorCount + "%";

            // Cambiar color según la vida
            vida0()

            //LOG
            console.log("👾 SLIM ELIGIÓ ATAQUE DE " + ataqueSlim);
            console.log("🧙‍♂️🛡️ la defensa del mago es " + defensaMago);


            console.log("👾 Daño NORMAL de Slim: " + dañoNormal);
            console.log("✨ Crítico: " + critico);
            console.log("⚔️ Fórmula → " + dañoNormal + " + " + critico + " = " + dañoTotal);

            console.log("🧙‍♂️ Vida jugador (después del ataque) → " + vidaJugadorCount);
            console.log("👾 Vida máquina → " + vidaMaquinaCount + " (se mantiene)");
            console.log("==================================================================")


            //DAÑO SUPER-EFECTIVO
        } else if ((ataqueSlim === "agua" && defensaMago === "fuego") ||
            (ataqueSlim === "fuego" && defensaMago === "planta") ||
            (ataqueSlim === "planta" && defensaMago === "agua")) {

            let critico = probCritico() + criticBuffMaquina;
            let dañoTotal = dañoSuperMaquina + critico;

            //RESTA PH DEL DAÑO TOTAL AL JUGADOR
            vidaJugadorCount -= dañoTotal;

            //TEXTO MAQUINA 
            agregarLogMaquina("👾 Slim desató un ataque de " + ataqueSlim +
                " ¡Fue SÚPER EFECTIVO! El Mago recibió " + dañoTotal + " puntos de daño. 💥");

            //TEXTO JUGADOR
            agregarLogJugador("🛡️ El Mago intentó protegerse con un escudo de " + defensaMago +
                ", pero el golpe fue ¡SÚPER EFECTIVO! Recibió " + dañoTotal + " puntos de daño.");

            //mostrar daños maquina
            document.querySelectorAll("#vidaMaquina .superEfec").forEach(superEffect => {

                superEffect.classList.remove("d-none")
            })

            //TEXTO ACTUALIZAR VIDA MAQUINA
            maquinaVida.textContent = "Vida Actual: " + vidaMaquinaCount;
            barraRellenoMaquina.style.width = vidaMaquinaCount + "%";

            //TEXTO ACTUALIZAR VIDA JUGADOR
            jugadorVida.textContent = "Vida Actual: " + vidaJugadorCount;
            barraRellenoJugador.style.width = vidaJugadorCount + "%";

            // Cambiar color según la vida
            vida0()

            //LOG
            console.log("👾 SLIM ELIGIÓ ATAQUE DE " + ataqueSlim);
            console.log("🧙‍♂️🛡️ la defensa del mago es " + defensaMago);
            console.log("👾 Daño SUPER EFECTIVO: " + dañoSuperMaquina);
            console.log("✨ Crítico: " + critico);


            console.log("🧙‍♂️ Vida del Mago (después del ataque) → " + vidaJugadorCount);
            console.log("👾 Vida de Slim → " + vidaMaquinaCount + " (se mantiene)");

            console.log("==================================================================")



        } else {

            let critico = probCritico() + criticBuffMaquina;
            let dañoTotal = dañoNoEfectivoMaquina + critico;

            //RESTA PH DEL DAÑO TOTAL A LA MAQUINA
            vidaJugadorCount -= dañoTotal;

            //TEXT MAQUINA
            agregarLogMaquina("👾 Slim atacó con " + ataqueSlim +
                ", pero no fue muy efectivo... El Mago solo recibió " + dañoTotal + " puntos de daño.");
            //TEXT JUGADOR
            agregarLogJugador("🛡️ El Mago levantó un escudo de " + defensaMago +
                ". El ataque no fue muy efectivo y solo recibió " + dañoTotal + " puntos de daño.");

            //mostrar daños maquina
            document.querySelectorAll("#vidaMaquina .noEsEfec").forEach(dNoEffect => {

                dNoEffect.classList.remove("d-none")
            })

            //TEXTO ACTUALIZAR VIDA MAQUINA
            maquinaVida.textContent = "Vida Actual: " + vidaMaquinaCount;
            barraRellenoMaquina.style.width = vidaMaquinaCount + "%";

            //TEXTO ACTUALIZAR VIDA JUGADOR
            jugadorVida.textContent = "Vida Actual: " + vidaJugadorCount;
            barraRellenoJugador.style.width = vidaJugadorCount + "%";


            // Cambiar color según la vida
            vida0()



            //LOG

            console.log("👾 SLIM ELIGIÓ ATAQUE DE " + ataqueSlim);
            console.log("🧙‍♂️🛡️ la defensa del mago es " + defensaMago);
            console.log("👾 DAÑO NO EFECTIVO: " + dañoNoEfectivoMaquina);
            console.log("✨ Crítico: " + critico);
            console.log("⚔️ Fórmula → " + dañoNoEfectivoMaquina + " + " + critico + " = " + dañoTotal);

            console.log("🧙‍♂️ Vida jugador (después del ataque) → " + vidaJugadorCount);
            console.log("👾 Vida Slim → " + vidaMaquinaCount + " (se mantiene)");
            console.log("==================================================================")



        }

        turnoJugador = "jugador"

        btnAttack.disabled = false;
        btnNextTurno.disabled = true;
        mostrarAtaques()
        document.querySelectorAll("input[name='ataqueName']").forEach(radio => {
            radio.checked = false;
        });
        ocultarDañosJugador()


    }, 1000);
}

//====================================



//===================================FUNCIONES==============================================

function ganaMago() {

    setTimeout(() => {
        if (vidaMaquinaCount <= 0) {


            document.querySelectorAll(".primerCombate").forEach(combate => {
                combate.classList.add("d-none");
            });

            document.querySelectorAll(".acto2").forEach(combate2 => {
                combate2.classList.remove("d-none")

            })


        } else if (vidaJugadorCount <= 0) {

            document.querySelectorAll(".imgLose").forEach(lose => {
                lose.classList.remove("d-none")

            })


        }
    }, 2000);
}




//====BOTONES====
//BTN TERMINAR TURNO/DEFENDERSE
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

//BTN LOGIN
btnBackLogin.addEventListener("click", function () {

    window.location.href = "../index.html"
})
//=======================================



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
    barraRellenoJugador.style.width = vidaJugadorCount + "%";
    barraRellenoMaquina.style.width = vidaMaquinaCount + "%";

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


// ===================== ESCUDOS Y ATAQUES ===================== 
//FUNCIONES MOSTRAR ESCUDOS OCULTAR ATAQUES
// Mostrar escudos / ocultar ataques
function mostrarEscudos() {
    document.querySelectorAll(".imgEscudos").forEach(img => {
        img.classList.remove("d-none");


        document.querySelector(".fuego").textContent = "Escudo de Fuego";
        document.querySelector(".agua").textContent = "Escudo de Agua";
        document.querySelector(".planta").textContent = "Escudo de Planta"
        btnAttack.classList.add("d-none");      // ocultar atacar
        btnNextTurno.classList.remove("d-none");  // mostrar defensa

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
    btnAttack.classList.remove("d-none");
    btnNextTurno.classList.add("d-none");

    document.querySelectorAll(".imgEscudos").forEach(img => {

        img.classList.add("d-none");
    })

}


// ===================== DAÑOS ===================== //
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

//PROBABILIDAD DE CRITICO
function probCritico() {

    let dañoCritico = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    return dañoCritico;

}





