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


