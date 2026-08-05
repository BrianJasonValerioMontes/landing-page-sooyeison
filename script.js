/*====================================================
=                 LEVEL UP | SOOYEISON                =
=                 JavaScript                          =
====================================================*/


/*====================================================
=               ELEMENTOS DEL DOM                     =
====================================================*/

const header = document.querySelector(".header");
const progressBar = document.querySelector(".progress-bar");
const cursorGlow = document.querySelector(".cursor-glow");
const revealElements = document.querySelectorAll(".reveal");
const scrollTopBtn = document.getElementById("scrollTop");
const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");


/*====================================================
=              EFECTO MAQUINA DE ESCRIBIR             =
====================================================*/

const typingText = [
    "Frontend Developer",
    "HTML • CSS • JavaScript",
    "Siempre aprendiendo",
    "Ready for the next mission"
];

let phrase = 0;
let letter = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = typingText[phrase];

    if(!deleting){

        typing.textContent = current.substring(0,letter);

        letter++;

        if(letter > current.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }

    else{

        typing.textContent = current.substring(0,letter);

        letter--;

        if(letter < 0){

            deleting = false;

            phrase++;

            if(phrase >= typingText.length){

                phrase = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 50 : 90);

}

typeEffect();


/*====================================================
=               NAVBAR SCROLL                         =
====================================================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        header.classList.add("active");

    }

    else{

        header.classList.remove("active");

    }

});


/*====================================================
=              SCROLL PROGRESS BAR                    =
====================================================*/

window.addEventListener("scroll",()=>{

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});


/*====================================================
=                 CURSOR GLOW                         =
====================================================*/

document.addEventListener("mousemove",(e)=>{

    cursorGlow.style.left = e.clientX + "px";

    cursorGlow.style.top = e.clientY + "px";

});


/*====================================================
=                 REVEAL EFFECT                       =
====================================================*/

function reveal(){

    revealElements.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();


/*====================================================
=              COUNTER ANIMATION                      =
====================================================*/

function counter(id,target){

    const element = document.getElementById(id);

    let value = 0;

    const speed = target / 100;

    const interval = setInterval(()=>{

        value += Math.ceil(speed);

        if(value >= target){

            value = target;

            clearInterval(interval);

        }

        element.textContent = value + "+";

    },25);

}

let countersStarted = false;

window.addEventListener("scroll",()=>{

    const stats = document.querySelector(".stats");

    const top = stats.getBoundingClientRect().top;

    if(top < window.innerHeight && !countersStarted){

        counter("projectsCounter",12);

        counter("hoursCounter",300);

        counter("coffeeCounter",87);

        countersStarted = true;

    }

});


/*====================================================
=               SCROLL TO TOP                         =
====================================================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        scrollTopBtn.classList.add("show");

    }

    else{

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*====================================================
=                HAMBURGER MENU                       =
====================================================*/

hamburger.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

    });

});


/*====================================================
=             SMOOTH LINKS                            =
====================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*====================================================
=             HERO FORM                              =
====================================================*/

const heroForm = document.querySelector(".hero-form");
const message = document.querySelector(".form-message");

heroForm.addEventListener("submit", (e) => {

    e.preventDefault();

    message.textContent = "\n ✔ ¡Gracias por registrarte!";

    message.classList.remove("error");
    message.classList.add("success");

    heroForm.reset();

    setTimeout(() => {

        message.textContent = "";

        message.classList.remove("success");

    }, 3000);

});


/*====================================================
=          ACTIVE LINK ON SCROLL                      =
====================================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    document.querySelectorAll(".nav-menu a").forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


/*====================================================
=          PEQUEÑA ANIMACIÓN HERO                     =
====================================================*/

window.addEventListener("load",()=>{

    document.querySelector(".hero-text").classList.add("active");

    document.querySelector(".hero-image").classList.add("active");

});


/*====================================================
=                 FIN DEL SCRIPT                      =
====================================================*/

console.log("%cLEVEL UP",
"color:#ff4d4d;font-size:24px;font-weight:bold;");

console.log("Landing desarrollada con HTML, CSS y JavaScript 🚀");