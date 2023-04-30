/*
            --- Modifier le DOM ---
*/
// variable = document.selecteur(...)
// variable.transformation

// selecteur
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");

// Evenement (il est possible de removeEventListener)
button1.addEventListener("click", button1function);
button2.addEventListener("click", button2function);
button3.addEventListener("click", button3function);
button4.addEventListener("click", button4function);
button5.addEventListener("click", button5function);

// variable
let counterButton1 = 0;

// fonction ajoute une classe et l'enleve
function button1function() {
  if (counterButton1 == 0) {
    button1.classList.add("selectButton1");
    return (counterButton1 = 1);
  }
  if (counterButton1 == 1) {
    button1.classList.remove("selectButton1");
    return (counterButton1 = 0);
  }
}
// fonction ajout et modification du contenu
function button2function() {
  if (counterButton1 == 0) {
    const baliseArticle = document.createElement("article");
    const creationDeDiv1 = document.createElement("div");
    const creationDeDiv2 = document.createElement("div");
    const creationDeDiv3 = document.createElement("div");
    const creationDeDiv4 = document.createElement("div");
    const creationDeDiv5 = document.createElement("div");
    const creationDeDiv6 = document.createElement("div");
    const IMGproduit = document.createElement("img");
    const nomDuProduit = document.createElement("h2");
    const paraCouleur = document.createElement("p");
    const paraPrix = document.createElement("p");
    const paraQuantite = document.createElement("p");
    const inputQuantite = document.createElement("input");
    const paraSUp = document.createElement("p");
    const ciblageDuContenu = document.querySelector("#cart__items");
    document.delet;
    // Ciblage
    ciblageDuContenu.appendChild(baliseArticle);
    baliseArticle.setAttribute("class", "cart__item");
    // div 1
    baliseArticle.appendChild(creationDeDiv1);
    creationDeDiv1.setAttribute("class", "cart__item__img");
    creationDeDiv1.appendChild(IMGproduit);
    // div 2
    baliseArticle.appendChild(creationDeDiv2);
    creationDeDiv2.setAttribute("class", "cart__item__content");
    // div 3
    creationDeDiv2.appendChild(creationDeDiv3);
    creationDeDiv3.setAttribute("class", "cart__item__content__description");
    creationDeDiv3.appendChild(nomDuProduit);
    // div 4
    creationDeDiv2.appendChild(creationDeDiv4);
    creationDeDiv4.setAttribute("class", "cart__item__content__settings");
    // div 5
    creationDeDiv4.appendChild(creationDeDiv5);
    creationDeDiv5.setAttribute("class", "cart__item__content__settings__quantity");
    creationDeDiv5.appendChild(paraQuantite);
    paraQuantite.innerText = "Quantité : ";
    creationDeDiv5.appendChild(inputQuantite);
    inputQuantite.setAttribute("type", "number");
    inputQuantite.setAttribute("class", "itemQuantity");
    inputQuantite.setAttribute("name", "itemQuantity");
    inputQuantite.setAttribute("min", "1");
    inputQuantite.setAttribute("max", "100");
    // div 6
    creationDeDiv4.appendChild(creationDeDiv6);
    creationDeDiv6.setAttribute("class", "cart__item__content__settings__delete");
    creationDeDiv6.appendChild(paraSUp);
    paraSUp.setAttribute("class", "deleteItem");
    paraSUp.innerText = "Supprimer";
    return (counterButton1 = 1);
  }
}
// supprime un élément
function button3function() {
  document.querySelector("li").remove();
}
// cible un élément
function button4function() {
  console.log("Information du le boutton 1....");
  console.log(button4.getBoundingClientRect());
}
function button5function(e) {
  console.log(e.target);
}
// Affiche le scroll
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});

// condition
