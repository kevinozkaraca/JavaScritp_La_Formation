/*
            ---LES OBJETS - DICTIONNAIRE ---
*/
let maVoiture1 = new Object();
maVoiture1.fabricant = "Ford";
maVoiture1.modele = "Mustang";
maVoiture1.annee = 1969;
// identique
let maVoiture2 = {
    fabricant: "Ford",
    modele: "Mustang",
    annee: 1969,
};
// resultat identique
console.log(maVoiture1);
console.log(maVoiture2);
// Ajouter dans l'object
maVoiture1["compte"] = "@moncompte";
console.log(maVoiture1);
//parcourir l'objet
console.log(maVoiture1.compte);
// Info : Il est pôssible de mettre des fonctions dans l'objet