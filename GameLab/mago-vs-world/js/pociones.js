//  Variable que almacena qué tipo de poción ha elegido el jugador (vida, crítico, elemental…)
let buffMago = null;

//  Selecciona todas las imágenes o elementos que tengan el atributo data-potion
const pociones = document.querySelectorAll('[data-potion]');

//  Variable para guardar la referencia a la poción concreta que se clicó
let pocionSeleccionada = null;

//  Recorre todas las pociones y les añade un listener de clic
pociones.forEach(pocion => {
    pocion.addEventListener('click', () => {

        //  Guarda el tipo de poción elegida (por ejemplo "vida", "critico", "elemental")
        buffMago = pocion.dataset.potion;

        //  Guarda la referencia a la poción seleccionada (la imagen concreta)
        pocionSeleccionada = pocion;

        //  Quita la clase "selected" de todas las demás pociones (para que solo una quede activa)
        pociones.forEach(p => p.classList.remove('selected'));

        //  Añade la clase "selected" a la poción clicada (efecto visual de selección)
        pocion.classList.add('selected');
    });
});




// EVENTO DE SELECCIÓN DE POCIÓN


//FUNCIÓN DE POCIONES
btnPots.addEventListener("click", function () {
    //empieza animaciones ocultar pociones
    if (pocionSeleccionada) {
        potActive(pocionSeleccionada.parentElement);
    }

    //si el mago escoge pociones de vida
    if (buffMago === "vida") {
        
        vidaJugadorCount = Math.min(vidaJugadorCount + 30, 130);

        console.log("Vida actual " + vidaJugadorCount);
        jugadorVida.textContent = "Vida Actual: " + vidaJugadorCount;

        //si el mago escoge pociones de critico
    } else if (buffMago === "critico") {


        criticBuff = 10;
        console.log("Crítico " + criticBuff);

        //si el mago escoge pociones defensa elemental
    } else if (buffMago === "elemental") {
        dañoSuperMaquina = 10;
        console.log("dañoSuperCpu con pocion " + dañoSuperMaquina);



    } else if (buffMago === null) {
        alert("POCIONES");


    };

    btnPotsOculto()

});

function btnPotsOculto() {

    btnPots.disabled = "";

}

//===============funciones importantes del las pociones
//añadimos la animaciones a la sección
function potActive(el) {
    if (!el) return;
    el.classList.add("activarPociones");

}

