// Le mode 'use strict' impose une qualité de code
/*"use strict" est une expression de code que vous pouvez ajouter au début d'un script ou d'une fonction JavaScript pour activer le mode strict. Le mode strict est une fonctionnalité introduite dans ECMAScript 5 (ES5) qui permet de rendre le code plus sûr en empêchant certaines actions dangereuses et en supprimant certaines fonctionnalités qui ont été mal conçues dans les versions précédentes de JavaScript.

Lorsque le mode strict est activé, le code doit être écrit d'une manière plus rigoureuse et plus sûre, ce qui peut aider à éviter les erreurs courantes et les problèmes de sécurité. Par exemple, le mode strict empêche la création de variables globales non déclarées, interdit l'utilisation de mots clés réservés comme des noms de variables et des fonctions, et génère des erreurs pour les tentatives d'affectation à des propriétés en lecture seule.*/
`use strict`;

console.log("test en console pour vérifier la connexion au  fichier html :");
console.log("Ho yeah !");

// commentaire monoligne
/*
commentaire sur 
plusieurs 
lignes
*/

/*
            ---LES VARIABLES ---
*/
let maVariable1 = 1;
const maVariable2 = 2;
var maVariable3 = 3;
console.log("-- Variable déclarée à = 1 -- resultat :");
console.log(maVariable1);
// changer une valeur pas besoin de let ou var (impossble pour const) :
console.log("-- Variable modifiée à = 3 -- resultat :");
maVariable1 = 3;
console.log(maVariable1);
