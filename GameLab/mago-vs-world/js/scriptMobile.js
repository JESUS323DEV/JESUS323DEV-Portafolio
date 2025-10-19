





document.addEventListener("DOMContentLoaded", () => {

    // --- Botones en móviles ---
    let btnAttackMobile = document.getElementById("btnAttackMobile");
    let btnNextTurnoMobile = document.getElementById("btnNextTurnoMobile");

    //FUNCIÓN ATAQUE JUGADOR
    function atacarMobile() {

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


    }


    //FUNCIÓN ATAQUE MAQUINA
    function defenderseMobile() {

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

    // --- Eventos ---
    btnAttackMobile?.addEventListener("click", atacarMobile);
    btnNextTurnoMobile?.addEventListener("click", defenderseMobile);

})