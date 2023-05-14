
/*
            ---LES TABLEAUX ---
*/

let quatre = 4;
let monTableau1 = [1, "deux", 3, quatre];
let monTableau2 = new Array(1, "deux", 3, quatre);
// les deux tableaux sont identiques
console.log(monTableau1);
console.log(monTableau2);
// l'index d'un tableau commence à 0
console.log(monTableau1[0]);
// la taille d'un tableau commence à 1  !!! gth  à la fin
console.log(monTableau1.length);
// réassignation d'un élément
monTableau1[3] = "NONNNN";
// length -1 est équivalent à la fin du tableau
console.log(monTableau1[monTableau1.length - 1]);
// Tableau dans un tableau
let monTableau3 = [
    [1, 2, 3],
    [4, 5, 6, 7, 8],
    [9, 10],
];
//acceder à 5 (deuxieme élément du deuxieme élément)
console.log(monTableau3[1][1]);
// Les objets sont des tableaux avec des clefs et des valeurs
let maVoiture = new Object();
maVoiture.fabricant = "Ford";
maVoiture.modele = "Mustang";
maVoiture.annee = 1969;
console.log(maVoiture);
// destructuration ou debalage d'un tableau
const arrayTest = [2, 3, 4];
const aTest = arrayTest[0];
const bTest = arrayTest[1];
const cTest = arrayTest[2];
const [xTest, yTest, zTest] = arrayTest;

// affiche le tableau
console.log(arrayTest);
console.log(yTest); // 3

// valeurs par défauts
const [p = 2, q = 6, r = 7] = [8, 9];
console.log(p, q, r);

//spread operator ...
const tableauAAjouter = [10, 20, 30];
const spreadPratique = [3, 2, 8, ...tableauAAjouter];
// sans les ... c'est un tableau dans un tableau
const tableauDansTableau = [3, 2, 8, tableauAAjouter];
console.log(spreadPratique);
console.log(tableauDansTableau);
// rest operator
const [aa, bb, cc, ...reste] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reste);
// dans une fonction met dans un tableau
function mettreDansUnTableau(...argument11) {
    console.log(argument11);
}
mettreDansUnTableau(11, 22, 33, 44, 55);
// une partie dans un tableau
function mettreDansUnTableau1(aaa, bbb, ...argument11) {
    console.log(aaa, bbb, argument11);
}
mettreDansUnTableau1(11, 22, 33, 44, 55, 222);
