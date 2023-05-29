
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