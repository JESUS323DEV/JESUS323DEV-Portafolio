//================LOGIN=======================

//-------------- CAPTURA DEL DOM ------------------
let btnLogin = document.querySelector(".btnLogin");
let inputUsuario = document.querySelector("#inputUsuario");
let inputPassword = document.querySelector("#inputPassword")
let formLogin = document.querySelector("#formLogin");
let checkLogin = document.querySelector(".checkLogin");
let loginIntentos = document.querySelector(".loginIntentos");
let loginContador = 5;
let resetLogin;



btnLogin.addEventListener("click", function () {
    event.preventDefault(); // 👈 evita que el form se envíe
    //Capturamos input
    let usuario = inputUsuario.value;
    let password = inputPassword.value;
    //checkear contraseña
    if (usuario === "admin" && password === "1234") {
        checkLogin.textContent = "✅ Contraseña Correcta";
        loginOk();

    } else {
        loginContador--;
        checkLogin.textContent = "Contraseña incorrecta " + loginContador + " intentos ";

        //Intentos login 
    } if (loginContador <= 0) {
        loginIntentos.textContent = "⚠️ Has agotado todos los intentos";
        btnLogin.disabled = true;
        reintentar();
    }

    // Limpiar input
    inputPassword.value = "";
    inputUsuario.value = "";


})
//FUNCIÓN CON LOGIN OK
function loginOk() {
    event.preventDefault(); // 👈 evita que el form se envíe
    inputUsuario.disabled = true;
    inputPassword.disabled = true;
    window.location.href = "html/piedraPapelTijeras.html";


}


    



//FUNCIÓN DE REINTENTAR
function reintentar() {
    inputUsuario.disabled = true;
    inputPassword.disabled = true;

    // Creamos botón reset
    let btnReset = document.createElement("button");
    btnReset.textContent = "¿Reintentar?";
    btnReset.classList.add("reset"); // 👈 le damos clase

    // Lo añadimos al body (o donde quieras colocarlo)
    document.querySelector(".reset").appendChild(btnReset);

    // Escuchamos el click del botón
    btnReset.addEventListener("click", nuevoLogin);
}

function nuevoLogin(event) {
    event.preventDefault();
    //Volvemos a poner el contador
    loginContador = 5;
    //Limpiamos datos
    loginIntentos.textContent = "";
    checkLogin.textContent = "";

    // Elimina el botón reset
    event.target.remove();
    //Activamos input y btn login
    inputUsuario.disabled = false;
    inputPassword.disabled = false;
    btnLogin.disabled = false; // no olvides volver a activar el login
}



//=================================================================================================================================================







