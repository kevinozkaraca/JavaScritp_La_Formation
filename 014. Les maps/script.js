/*
            --- Les maps ---
*/
// La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
const array125 = [1, 4, 9, 16];
const map1 = array125.map((x) => x * 2);
console.log(map1);
/*
            --- Les fonctions sur les chaines de caractères ---
*/
let chaineDeCara = "     +hdklfhdsjkfgdjk msqghouidq+mshbvlkxwcbvkjuzeatge iudhbvcjklhdbsqg k+fhsdqkljhflkqjsdhg+for";
// les chaines de caractère peuvent se travailler comme un tableau :
let bouDeChaine = chaineDeCara[2];
console.log(bouDeChaine);
console.log(chaineDeCara.indexOf("r")); // -1
console.log(chaineDeCara.indexOf("o")); // 20 eme
console.log(chaineDeCara.slice(25)); // 83
console.log(chaineDeCara.slice(25, 70)); // de 25 à 70
console.log(chaineDeCara.slice(-10)); // a partir de la fin
console.log(chaineDeCara.trim()); // supprime les vides avant
console.log(chaineDeCara.toLocaleLowerCase());
console.log(chaineDeCara.toUpperCase());
console.log(chaineDeCara.replace("", "a")); // remplace 1 fois seulement
console.log(chaineDeCara.replace(/h/g, "REMPLACE")); // regex, lettres remplace les h par "REMPLACE"
console.log(chaineDeCara.includes("a")); // true si a si trouve
console.log(chaineDeCara.split("+")); // fait un tableau a chaque +