/*====================================================
=       LEVEL UP | POLÍTICA DE PRIVACIDAD             =
=       JavaScript exclusivo de esta página           =
====================================================*/


/*====================================================
=              ELEMENTOS DEL DOM                      =
====================================================*/

const header = document.querySelector(".header");
const progressBar = document.querySelector(".progress-bar");
const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");


/*====================================================
=                 NAVBAR SCROLL                       =
====================================================*/

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }

});


/*====================================================
=              SCROLL PROGRESS BAR                    =
====================================================*/

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        totalHeight > 0
            ? (window.scrollY / totalHeight) * 100
            : 0;

    progressBar.style.width = progress + "%";

});


/*====================================================
=                HAMBURGER MENU                       =
====================================================*/

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");

});


/*====================================================
=              CERRAR MENÚ                           =
====================================================*/

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");

        navMenu.classList.remove("active");

    });

});


/*====================================================
=                 FIN DEL SCRIPT                      =
====================================================*/

console.log("%cLEVEL UP",
    "color:#ff4d4d;font-size:24px;font-weight:bold;"
);

console.log(
    "Política de privacidad cargada correctamente."
);