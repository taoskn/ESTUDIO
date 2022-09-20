const parrafo1 = document.createElement("p");
parrafo1.classList.add("titulos");
parrafo1.textContent = "Concierto de Child"

const parrafo2 = document.createElement("p");
parrafo1.classList.add("precio");
parrafo1.textContent = "$800";

const parrafo3 = document.createElement("p");
parrafo1.classList.add("descripcion");
parrafo1.textContent = "Un concierto inolvidable acompañado por Matias Skenen";


const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

const imagen = document.createElement("img");
imagen.classList.add("img");

const card = document.createElement("div");
card.classList.add("card-main");
card.appendChild(imagen);
card.appendChild(info);


const nuevoelemento = document.querySelector(".container .cards");
nuevoelemento.appendChild(card);
console.log(card);