/*
            ---LA FONCTION ---
*/

// les arguments sont comme des variables locales
function maSuperFonctionDeLaMort1(argument1) {
    argument1 = "OH lala !";
    console.log(argument1);
}
// Appel de la fonction
maSuperFonctionDeLaMort1();

// argument 2 = valeur par défaut !
function maSuperFonctionDeLaMort2(argument1, argument2 = 2) {
    argument1 = "OH lala !";
    console.log(argument1, argument2);
    const laVariableDeMaFonction = `Je stoque ${argument1} et ${argument2}`;
    return laVariableDeMaFonction;
}
// Appel de la fonction
maSuperFonctionDeLaMort2();
// Récupération du return de ma fonction
let recuperationDeLaVariableDeLaFonction = maSuperFonctionDeLaMort2();
console.log(recuperationDeLaVariableDeLaFonction);

