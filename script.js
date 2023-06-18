// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const nav = document.querySelector("#navbar");
const improvise = document.querySelector("#imgImprovise");
const popup = document.querySelector(".pop-up");
const popFerm = document.querySelector("#popup");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.height = "50px";
  } else {
    nav.style.height = "100px";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 280) {
    improvise.style.transform = "translate(0)";
    improvise.style.opacity = "1";
  } else {
    improvise.style.transform = "translate(-200px)";
    improvise.style.opacity = "0";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1100) {
    popup.style.transform = "translate(0)";
    popup.style.opacity = "1";
  } else {
    popup.style.transform = "translateX(400px)";
    popup.style.opacity = "0";
  }
});

window.addEventListener("click", () => {
  //   popFerm.style.display = "none";
});
// window.addEventListener('scroll', function() {
//     var scrollPosition = window.scrollY;
//     var pageHeight = document.documentElement.scrollHeight - window.innerHeight;
//     if (scrollPosition === pageHeight) {
//       // Afficher la popup
//     }
//   });
