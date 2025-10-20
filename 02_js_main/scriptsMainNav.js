const linkAboutme = document.getElementById("linkAboutme");
const linkInicio = document.getElementById("linkInicio");
const linkProyectos = document.getElementById("linkProyectos");

const sectionInicio = document.getElementById("sectionInicio");
const sectionAboutMe = document.getElementById("sectionAboutMe");
const sectionProyectos = document.getElementById("sectionProyectos");

let Links = [linkAboutme, linkInicio, linkProyectos];
let secciones = [sectionAboutMe, sectionInicio, sectionProyectos]


Links.forEach((link) => {
    link.addEventListener("click", () => {

        // Ocultar todas las secciones
        secciones.forEach((section) => section.classList.add("d-none"));

        // Mostrar la sección correspondiente
        if (link === linkInicio) sectionInicio.classList.remove("d-none");
        if (link === linkAboutme) sectionAboutMe.classList.remove("d-none");
        if (link === linkProyectos) sectionProyectos.classList.remove("d-none");
    });
});



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
//bloquea color de focus
links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("activo"));
        link.classList.add("activo");
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

