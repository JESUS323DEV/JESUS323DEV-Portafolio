//================================RESULTADO: GANA EL MAGO
function ganaMago() {

    setTimeout(() => {
        if (vidaMaquinaCount <= 0) {


            document.querySelectorAll(".primerCombate").forEach(combate => {
                combate.classList.add("d-none");
            });

            document.querySelectorAll(".acto2").forEach(combate2 => {
                combate2.classList.remove("d-none");

            });


        }
    }, 2000);
}

function cpuGana() {

    setTimeout(() => {
        if (vidaJugadorCount <= 0) {
            document.querySelectorAll(".primerCombate").forEach(Lose => {

                Lose.classList.add("d-none");
            })


            document.querySelectorAll(".imgLose").forEach(lose => {
                lose.classList.remove("d-none");

            });

            document.querySelectorAll(".perdiste").forEach(imgLose => {

                imgLose.classList.remove("d-none")
            })
        }
    }, 2000);

}
