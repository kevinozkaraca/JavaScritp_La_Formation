"use strict";
/*
            --- Les objets ---
*/
class Vehicule {
  constructor(marque, modele, annee, nbRoue, nbPorte) {
    this.marque = marque;
    (this.modele = modele), (this.annee = annee), (this.nbRoue = nbRoue), (this.nbPorte = nbPorte);
  }
}

class Moto extends Vehicule {
  constructor(marque, modele, annee) {
    super(marque, modele, annee, 2, 0);
  }
}

class Voiture extends Vehicule {
  constructor(marque, modele, annee) {
    super(marque, modele, annee, 3, 2);
  }
}

let voiture = new Voiture("Renault", "Picasso", "2005");
// affiche le nombre de roues alors qu'on lui à pas indiqué en paramettre car héritage du constructeur
console.log(voiture.nbRoue);

// Le constructeu commence toujours par une majuscule

const Personne = function (nom, prenom, datdDeNaissance) {
  this.nom = nom;
  this.prenom = prenom;
  this.datdDeNaissance = datdDeNaissance;

  // Ne pas faire ceci
  //   this.clalculAge = function () {
  //     console.log(2022 - this.datdDeNaissance);
  //   };
};
const Keke = new Personne("Kevin", "Ozkaraca", 1984);

console.log(Keke);

// Faire ceci
Personne.prototype.calculAge = function () {
  console.log(2022 - this.datdDeNaissance);
};
Keke.calculAge();
console.log(Keke.__proto__ === Personne.prototype); // true
console.log(Personne.prototype.isPrototypeOf(Keke)); // true

/*
            --- Les closures ---
*/
// Affichage des compteurs sur la page
let bouttons = document.getElementsByClassName("classButtonsFlex");
let compteurs = document.getElementsByClassName("Counters");

function compteur() {
  var i = 0;
  // retourne une fonction anonyme
  return function () {
    return i++;
  };
}

// Mise dans une vairable pour utilisé le return
let monCompteur0 = compteur();
let monCompteur1 = compteur();
let monCompteur2 = compteur();
let monCompteur3 = compteur();
let mesCompteurs = [monCompteur0, monCompteur1, monCompteur2, monCompteur3];
// Application de la closure sur chaque bouton
for (let y = 0; y < 4; y++) {
  bouttons[y].addEventListener("click", function () {
    compteurs[y].innerText = `${mesCompteurs[y]()}`;
  });
}

/*
            --- Les objets ---
*/

/*
Les getters et setters sont des fonctions dans JavaScript qui vous permettent d'avoir un contrôle 
plus fin sur l'accès et la modification des propriétés d'un objet. Les getters sont utilisés pour accéder 
à la valeur d'une propriété d'un objet, tandis que les setters sont utilisés pour modifier la valeur d'une propriété d'un objet.

Voici un exemple de code qui montre comment utiliser des getters et des setters en JavaScript :

*/

// Définition de l'objet avec des propriétés privées
const monObjet = {
  // Définition d'une propriété privée
  _maPropriete: "ma valeur initiale",

  // Définition d'un getter pour la propriété privée
  get maPropriete() {
    // Renvoie la valeur de la propriété privée
    return this._maPropriete;
  },

  // Définition d'un setter pour la propriété privée
  set maPropriete(valeur) {
    // Modifie la valeur de la propriété privée
    this._maPropriete = valeur;
  },
};

// Accès à la propriété privée via le getter
console.log(monObjet.maPropriete); // Affiche "ma valeur initiale"

// Modification de la propriété privée via le setter
monObjet.maPropriete = "ma nouvelle valeur";

// Accès à la propriété privée modifiée via le getter
console.log(monObjet.maPropriete); // Affiche "ma nouvelle valeur"

/*
En utilisant des getters et des setters, vous pouvez contrôler l'accès et la modification des propriétés 
d'un objet de manière plus précise et plus sécurisée. Cela peut être utile lorsque vous voulez empêcher les
 utilisateurs de modifier des propriétés sensibles de votre objet, ou lorsque vous voulez effectuer des 
 vérifications ou des calculs lorsqu'une propriété est modifiée.*/
const 