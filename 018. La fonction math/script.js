/*
--- La fonction math-- -
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