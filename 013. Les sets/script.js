/*
            --- Les sets ---
*/
//Un objet Set permet de stocker un ensemble de valeurs uniques de n'importe quel type, qu'il s'agisse de valeurs primitives ou d'objets.
const monSet = new Set();
monSet.add(1); // { 1 }
monSet.add(5); // { 1, 5 }
monSet.add(5); // { 1, 5 }
monSet.add("du texte"); // { 1, 5, 'du texte' }
console.log(monSet);
const o = { a: 1, b: 2 };
monSet.add(o);
console.log(monSet);
monSet.add({ a: 1, b: 2 });
console.log(monSet);