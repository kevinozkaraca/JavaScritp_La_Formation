
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
/*
            --- La boucle for ---
*/
// la boucle ira jusqu'a 5 car (i <= 5)
console.log(`la boucle ira jusqu'a 5 car (i <= 5)`);
for (let i = 0; i <= 5; i++) {
  console.log(`... i est égale à ${i}`);
}
// la boucle ira jusqu'a 5 à cause du break
console.log(`la boucle ira jusqu'a 5 à cause du break...`);
for (let i = 0; i <= 1000; i++) {
  console.log(`... i est égale à ${i}`);
  if (i == 50) break;
  if (i == 5) break; // break contraire de continue
}
// boucle à valeur impaire
console.log(`boucle à valeur impaire...`);
for (let i = 1; i <= 5; i += 2) {
  console.log(`... i est égale à ${i}`);
}
// boucle dans une boucle
console.log(`boucle dans une boucle...`);
for (let i = 0; i <= 10; i++) {
  for (i; i % 2; i++) {
    console.log(`... i est égale à ${i}`);
  }
}
/*
            --- La boucle while ---
*/
//while
console.log(`boucle while...`);
let n = 0;
let x = 1;
while (n < 5) {
  n++;
  x += n;
  console.log(`... n est égale à ${n}`);
}

// do...while
console.log(`boucle while...`);
let i = 0;
do {
  i += 1;
  console.log(`... i est égale à ${i}`);
} while (i < 5);
/*
            --- La fonction math ---
*/
let monExemple = 25.2664864;
console.log(`...la fonction math...`);
console.log(Math.sqrt(25)); //racine carré de 25
console.log(Math.max(25, 2, 6, 7, 456)); //indique le plus grand
console.log(Math.min(25, 2, 1, 5, 78, 89)); //indique le plus petit
console.log(Math.trunc(23.3)); //tronque (retire la virgule)
console.log(Math.ceil(23.3)); //arrondie au dessus
console.log(Math.round(25.5)); //arrondie
console.log(Math.floor(23.9)); //arrondie en dessous (comme trunc en positif mais pas en negatif)
console.log(Math.trunc(Math.random() * 5) + 1); //(nombre aléatoire de 0 à 5 tronqué plus 1 (changé 5 en cas de besoin)
console.log(monExemple.toFixed(2)); //arrondi a deux chiffres apres la virgule
/*
            --- Les dates ---
*/
console.log(`...Les dates...`);
const date = new Date();
console.log(date);
console.log(new Date(2035, 10, 19, 15, 23, 5)); //resultat :  nov  13 2037 15 :23 :05
console.log(date.getYear());
console.log(date.getMonth() + 1); // le mois est indiqué dans un index ? Oui Oui
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
/*
            --- la temporisations ---
*/

// setTimeout

setTimeout(() => console.log("j'arrive dans 3 secondes"), 3000);
// sera executé avant
console.log("J'arrive avant le 'j'arrive dans 3 seocndes'");

// setInterval

const delay = 2;
const limit = 2;
let i22 = 1;

console.log("START!");
const limitedInterval = setInterval(() => {
  console.log(`message ${i22}, appeared after ${delay * i22++} seconds`);

  if (i22 > limit) {
    clearInterval(limitedInterval);
    console.log("interval cleared!");
  }
}, delay * 1000);

// pour faire de l'asynchronysme avec des évenements il y a le addeventlistener "load"
