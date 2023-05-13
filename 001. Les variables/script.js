// Le mode 'use strict' impose une qualité de code
/*"use strict" est une expression de code que vous pouvez ajouter au début d'un script ou d'une fonction JavaScript pour activer le mode strict. Le mode strict est une fonctionnalité introduite dans ECMAScript 5 (ES5) qui permet de rendre le code plus sûr en empêchant certaines actions dangereuses et en supprimant certaines fonctionnalités qui ont été mal conçues dans les versions précédentes de JavaScript.

Lorsque le mode strict est activé, le code doit être écrit d'une manière plus rigoureuse et plus sûre, ce qui peut aider à éviter les erreurs courantes et les problèmes de sécurité. Par exemple, le mode strict empêche la création de variables globales non déclarées, interdit l'utilisation de mots clés réservés comme des noms de variables et des fonctions, et génère des erreurs pour les tentatives d'affectation à des propriétés en lecture seule.*/
`use strict`;

console.log("test en console pour vérifier la connexion au  fichier html");
console.log("Ho yeah !");

// commentaire monoligne

/*
commentaire sur 
plusieurs 
lignes
*/

let maVariable1 = 1;
const maVariable2 = 2;
var maVariable3 = 3;
let maVariable4 = `Ecrire et calculer : ${maVariable1 + maVariable2}`;
// La variable 1 est une variable locale
console.log("La variable 1 à comme valeur: " + maVariable1);
// La variable 2 est une constante donc impossible de changer sa valeur
console.log("La variable 2 à comme valeur: " + maVariable2);
// La variable 3 est une variable globale (visible dans le navigateur)
console.log("La variable 3 à comme valeur: " + maVariable3);
// changer une valeur pas besoin de let ou var (impossble pour const) :
console.log("La variable 4 est " + maVariable4);
// Pour changer une valeur pas besoin de let ou var (impossble pour const) :
maVariable4 = 5;
console.log("La variable 4 à changée de valeur : " + maVariable4);
