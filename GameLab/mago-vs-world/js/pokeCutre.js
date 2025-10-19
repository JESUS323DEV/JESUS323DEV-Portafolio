

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
let elementalPots = document.getElementById("elementalPots");

// --- Botón ---
let btnAttack = document.getElementById("btnAttack");
let btnNextTurno = document.getElementById("btnNextTurno");



//btn de pociones
let btnPots = document.getElementById("btnPots");
let btnReintentar = document.getElementById("btnReintentar");

//btn de combate acto 1
let btnCombate = document.getElementById("btnCombate");

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
let vidaMaquinaCount = 150;

// --- texto vida ---
jugadorVida.textContent = "Vida: " + vidaJugadorCount;
maquinaVida.textContent = "vida : " + vidaMaquinaCount;

//ataque base  + poción de ataque
let buffVida = 50;
let buffCritico = 10;

//daño normal
let dañoNormal = 5;

//daño super de JUGADOR
let dañoSuperJugador = 10;

//daño super de CPU
let dañoSuperMaquina = 15;
console.log("DañoSuperCpu antes " + dañoSuperMaquina)
defensaElementalActiva = true;
turnosDefensa = 3;


//daño efectivo de JUGADOR y maquina 
let dañoNoEfectivoJugador = 3;
let dañoNoEfectivoMaquina = 3;

//turno jugador
let turnoJugador = "jugador";

//turno maquina
let turnoMaquina = "maquina";


//variables pociones
let criticBuff = 0;
let criticBuffMaquina = 0;


btnNextTurno.disabled = true;

console.clear();
console.log("%c📜 GRIMORIO DEL MAGO YISUS — IDEAS DEL MOTOR MEDIEVAL 🧙‍♂️", "color:#8e44ad; font-size:16px; font-weight:bold;");
console.log(" ");

console.log("%c⚠️ Importante: antes de pasar a la narrativa, terminar todas las animaciones pendientes del juego. 🎬", "color: #ffcc00; font-weight:bold;");




//=================TURNO DEL JUGADOR=================================
btnAttack.addEventListener("click", function () {


    // ---DEFENSA RANDOM DE LA MAQUINA ---
    const defensaSlim = ataques[Math.floor(Math.random() * ataques.length)];

    // radio seleccionado
    let radioSelect = document.querySelector("input[name='ataqueName']:checked");


    if (radioSelect) {
        if (radioSelect && turnoJugador === "jugador") {
            console.log("🧙‍♂️ El Mago se prepara para atacar...");

            //al darle click en atacar
            animationBtnAtacar()


            setTimeout(() => {
                animarAtaqueMago();  // 💥 siempre se lanza aquí

                let ataqueSelect = radioSelect.value;



                //EMPATE - DAÑO NORMAL
                if (ataqueSelect === defensaSlim) {




                    let critico = probCritico();
                    let criticoTotal = critico + criticBuff
                    let dañoTotal = dañoNormal + criticoTotal;


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
                    console.log("🧙‍♂️ MAGO ELIGIÓ ATAQUE DE " + ataqueSelect);
                    console.log("🤖🛡️  Maquina eligió escudo de " + defensaSlim);
                    console.log("🧙‍♂️ DAÑO NORMAL: " + dañoNormal);

                    console.log("✨ Crítico: " + critico);

                    if (buffMago === "critico") {
                        console.log(
                            "✨ Crítico normal: " +
                            critico +
                            " + Poción: " +
                            criticBuff +
                            " = Total crítico: " +
                            (critico + criticBuff)
                        );
                    }
                    console.log("⚔️ DAÑO TOTAL = " + dañoNormal + " + " + (critico + criticBuff) + " = " + dañoTotal);
                    console.log("🧙‍♂️ Vida jugador → " + vidaJugadorCount + " (se mantiene)");
                    console.log("👾 Vida máquina → " + vidaMaquinaCount);

                    console.log("==================================================================")


                    //GAnA EL JUGADOR - DAÑO SUPER-EFECTIVO
                } else if ((ataqueSelect === "agua" && defensaSlim === "fuego") ||
                    (ataqueSelect === "fuego" && defensaSlim === "planta") ||
                    (ataqueSelect === "planta" && defensaSlim === "agua")) {

                    let critico = probCritico();
                    let criticoTotal = critico + criticBuff
                    let dañoTotal = dañoSuperJugador + criticoTotal;



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


                    ///log
                    console.log("🧙‍♂️ MAGO ELIGIÓ ATAQUE DE " + ataqueSelect);
                    console.log("🤖🛡️  Maquina eligió escudo de " + defensaSlim);

                    console.log("🧙‍♂️ DAÑO SUPER-EFECTIVO: " + dañoSuperJugador);

                    console.log("✨ Crítico: " + critico);

                    if (buffMago === "critico") {
                        console.log(
                            "✨ Crítico normal: " +
                            critico +
                            " + Poción: " +
                            criticBuff +
                            " = Total crítico: " +
                            (critico + criticBuff)
                        );
                    }
                    console.log("⚔️ Fórmula → " + dañoSuperJugador + " + " + (critico + criticBuff) + " = " + dañoTotal);
                    console.log("🧙‍♂️ Vida máquina → " + vidaMaquinaCount);
                    console.log("👾 Vida jugador → " + vidaJugadorCount + " (se mantiene)");
                    console.log("==================================================================");



                } else {
                    let critico = probCritico();
                    let criticoTotal = critico + criticBuff
                    let dañoTotal = dañoNoEfectivoJugador + criticoTotal;


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

                    //log
                    console.log("🧙‍♂️ MAGO ELIGIÓ ATAQUE DE " + ataqueSelect);
                    console.log("🤖🛡️  Maquina eligió escudo de " + defensaSlim);

                    console.log("🧙‍♂️ DAÑO BAJO: " + dañoNoEfectivoJugador);
                    console.log("✨ Crítico: " + critico);

                    if (buffMago === "critico") {
                        console.log(
                            "✨ Crítico normal: " +
                            critico +
                            " + Poción: " +
                            criticBuff +
                            " = Total crítico: " +
                            (critico + criticBuff)
                        );
                    }

                    console.log("⚔️ Fórmula → " + dañoNoEfectivoJugador + " + " + (critico + criticBuff) + " = " + dañoTotal);
                    console.log("🧙‍♂️ Vida máquina → " + vidaMaquinaCount);
                    console.log("👾 Vida jugador → " + vidaJugadorCount + " (se mantiene)");
                    console.log("==================================================================");
                }









                turnoJugador = "maquina"
                btnAttack.disabled = true;
                btnNextTurno.disabled = false;
                radioSelect.checked = false;
                mostrarEscudos()
                ocultarDañosMaquina()
                ganaMago()


            }, 2000);




        }
    }
});
//==================================


//====================================TURNO DE LA MAQUINA ==========================

//FUNCIÓN ATAQUE MAQUINA
function ataqueMaquina() {
    animarAtaqueSlime()
    animationBtnDefensa()

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

        cpuGana();
        mostrarAtaques()
        document.querySelectorAll("input[name='ataqueName']").forEach(radio => {
            radio.checked = false;
        });
        ocultarDañosJugador();


    }, 2000);
}






















