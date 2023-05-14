
let tableauPourFonctions = [18, 50, 62, 3, 548, 625, 69523];
let tableau2DPourFonctions = [18, 50, 62, [3, 548, 625, 69523], 548, 625, 69523];

tableauPourFonctions.push(52);
console.log(tableauPourFonctions); // 52 est ajouté
tableauPourFonctions.pop(); // supprime le dernier element
console.log(tableauPourFonctions);
console.log(tableauPourFonctions.indexOf(50)); //1
console.log(tableauPourFonctions.includes(50)); // est ce que l'élément est présent
console.log(tableauPourFonctions.join("aaa")); // join les éléments du tableau avec un aaa
console.log(tableauPourFonctions.slice(2)); // découpe le tableau à partir de l'index 2
console.log(tableauPourFonctions.slice(2, 4)); // déoupe le tableau a partir de 2 sans le 4 et sa suite
console.log(tableauPourFonctions.slice(-2)); // les deux derniers
console.log(tableauPourFonctions.reverse()); // retourne le sens du tableau
console.log(tableauPourFonctions.concat(tableau2DPourFonctions)); // concaténation des tableaux
let resultatIdentiqueQueConcat = [...tableauPourFonctions, ...tableau2DPourFonctions]; // concaténation des tableaux comme le précédent
console.log(resultatIdentiqueQueConcat);
// La fonction map() permet de refaire un tableau en modifiant ses éléments
// 1er méthode map()
const sweetArray0 = [2, 3, 4, 5, 35];
const sweeterArray0 = sweetArray0.map((sweetItem0) => {
    return sweetItem0 * 2;
});
console.log(sweeterArray0);
// 2eme méthode map()
// Fonction + tableau
const makeSweeter = (sweetItem1) => sweetItem1 * 2;
const sweetArray1 = [2, 3, 4, 5, 35];
const sweeterArray1 = sweetArray1.map(makeSweeter);
console.log(sweeterArray1);
// Méthode filter (filtre les mots de plus de 6 lettres)
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6); // word est un paramètre (que si le word est plus grand que 6 lettres il est retourné)
console.log(result);
// Fonction reduce
let array11 = [11, 12, 13, 14];
// prendre chaque élément aaa bbb et les additionner
let sum = array11.reduce((aaa, bbb) => aaa + bbb);
console.log(sum);
// identique à réduce
console.log(11 + 12 + 13 + 14);
// fonction find() retourne le premier élement trouvé
const array10 = [5, 12, 8, 130, 44];
// findIndex revoie l'index pas l'élément
const found = array10.find((element) => element > 10);
console.log(found);
// Fonction some() Retourne true si un des éléments du tableau est validé par la fonction de test.
function isBig(val) {
    if (val >= 10) {
        return true;
    }
    return false;
}
var tab1 = [10, 15, 9, 25, 0, 50];
var tab2 = [8, Math.PI, 3, 9];
console.log(tab1.some(isBig)); /* Retourne true */
console.log(tab2.some(isBig)); /* Retourne false */
// Every() informe si tous les elements ont la condition demande
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
// Flat() ecrase un tableau a multi dimension
testDeFlat = tableau2DPourFonctions.flat();
console.log(testDeFlat);
// sort() tri le tableau par ordre alphabetique ou numérique
// 40 est plus grand que 300 ??
tableauSort = [12, 9, 50, 60, 1, 20, 300, 40, 50, 80, 7, 21, 321, 21];
tableauSort.sort();
console.log(tableauSort);