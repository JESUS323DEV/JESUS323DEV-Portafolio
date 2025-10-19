//links menu nav/ secciones-links 
const links = document.querySelectorAll(".nav-link");
const details = document.querySelectorAll("details");

details.forEach((det) => {
    det.addEventListener("toggle", () => {
        const icono = det.querySelector(".icono");
        if (det.open) {
            icono.classList.add("rotar");
        } else {
            icono.classList.remove("rotar");
        }


    });
});




//barra extensiones 
const btnGit = document.getElementById("btnGit");
const btnEmail = document.getElementById("btnEmail");
const btnEstructura = document.getElementById("btnEstructura");

const sectionEstructura = document.getElementById("sectionEstructura");
const sectionGitHome = document.getElementById("sectionGitHome");
const sectionEmail = document.getElementById("sectionEmail");

let btn = [btnEmail, btnEstructura, btnGit];
let list = [sectionEstructura, sectionEmail, sectionGitHome];


btn.forEach((Btn) => {
    Btn.addEventListener("click", () => {



        list.forEach((section) => section.classList.add("d-none"));

        if (Btn === btnGit) sectionGitHome.classList.remove("d-none");
        if (Btn === btnEmail) sectionEmail.classList.remove("d-none");
        if (Btn === btnEstructura) sectionEstructura.classList.remove("d-none");

        btn.forEach(bTn => bTn.classList.remove("activo"));
        Btn.classList.add("activo")

    });

})

