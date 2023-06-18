// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

//  tous element qui a une id en JS n'a pas besoin d'être declarer. il faut donc juste taper le nom de l'id

// const nav = document.querySelector("#navbar");
// const improvise = document.querySelector("#imgImprovise");
// const popup = document.querySelector(".pop-up");
// const popFerm = document.querySelector("#popup");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 120) {
//     nav.style.height = "50px";
//   } else {
//     nav.style.height = "100px";
//   }
// });

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 280) {
//     improvise.style.transform = "translate(0)";
//     improvise.style.opacity = "1";
//   } else {
//     improvise.style.transform = "translate(-200px)";
//     improvise.style.opacity = "0";
//   }
// });

// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 1100) {
//     popup.style.transform = "translate(0)";
//     popup.style.opacity = "1";
//   } else {
//     popup.style.transform = "translateX(400px)";
//     popup.style.opacity = "0";
//   }
// });
// popFerm.addEventListener("click", () => {
//   popFerm.style.display = "none";
// });

// correction :

let playOnce = true;
window.addEventListener("scroll", () => {
  // navbar effet
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }
  // pour trouver la taille totale du body il faut faire:
  // console.log(document.body.offsetHeight);
  // la formule ci dessous permet d'afficher le pourcentage en fonction du scroll
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  // image translate
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }

  //   popup
  if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});
