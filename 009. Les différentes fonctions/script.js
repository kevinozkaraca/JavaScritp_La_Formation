/*
            ---LES DIFFRENTS TYPES DE FONCTIONS ---
*/

// Déclaration d'une fonction
function calculSimple1(choisirUnNombre) {
    return choisirUnNombre - 1;
}
const resultat1 = calculSimple1(10);
// Expression d'une fonction (dans une variable)
const calculSimple2 = function (choisirUnNombre) {
    return choisirUnNombre - 1;
};
const resultat2 = calculSimple2(10);
// Fonction félché (=> ce que nous voulons retourné)
calculSimple3 = (nummeroChoisi) => nummeroChoisi - 1;
const resultat3 = calculSimple3(10);
//Affichage des résultat :
console.log(resultat1, resultat2, resultat3);