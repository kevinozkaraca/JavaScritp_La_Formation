let maCondition1 = true;
let maCondition2 = 4;
let maCondition3 = 2;
let maCondition4 = 3 > 2;
console.log("maCondition1 : true ");
console.log("maCondition2 : 4 ");
console.log("maCondition3 : 2 ");
console.log("---------------------------------");
// si ma condition est true
console.log("Condition1 valable ? : ");
console.log("Si maCondition1 (true) est true :");
if (maCondition1 == true) {
    console.log("It's true");
}
// si ma condition n'est pas plus petit que 3
// < > <= >= == ===
console.log("---------------------------------");
console.log("Condition2 est-il pas plus petit que trois ? :");
if (!maCondition2 < 3) {
    console.log("It's true");
}
else {
    console.log("It's false");
}
//---------------------------------
console.log("Condition2 est-il pas plus grand que trois ? et condition3 égal à deux :");
if (!maCondition2 < 3 && maCondition3 === 2) {
    console.log("It's true");
}
else {
    console.log("It's false");
}
//---------------------------------
console.log("Condition2 n'est-il pas plus grand que trois ? ou condition3 égal à deux :");
if (!maCondition2 < 3 || maCondition3 === 2) {
    console.log("It's true");
}
else {
    console.log("It's false");
}
//---------------------------------
console.log("---------------------------------");
// Les maths avant la comparaison
console.log("Condition2 + 2 est-il égale à 4 :");
if (maCondition2 + 2 === 4) {
    console.log("It's true");
}
else {
    console.log("It's false");
}
// Il est possible de mettre de conditions dans des variables
console.log("---------------------------------");
console.log("Condition dans une variable si 3 est plus grand que 2 :");
if (maCondition4) {
    console.log("It's true");
}
else {
    console.log("It's false");
}

// ATTENTION :

// concaténation :
let maVariable1 = 55;
let maVariable2 = 12;
let maVariable3 = 30;
let maVariableString = "pomme";
console.log("---------------------------------");
console.log("Concaténation :");
console.log(`avec les ${maVariable1 + maVariable2} et les ${maVariableString}`);
// opération dans une variable
let maVariable4 = maVariable1 + maVariable3;
console.log("---------------------------------");
console.log("Opération dans une variable :");
console.log(maVariable4);

/*
            ---LES STRUCTURES CONDITIONNELLES ---
*/

// IF
// pas besoin de { } si if seulement :
if (maVariable4 == 101) console.log("Ha ok ");
if (maVariable4 == 101) {
    console.log("Ha ok ");
}
// IF ELSE
if (!maVariable4 == 101) {
    console.log("Ha ok ");
} else {
    console.log("Ha non ");
}
//IF - ELSE IF - ELSE
if (!maVariable4 == 101) {
    console.log("Ha ok ");
} else if (!maVariable3 == 101) {
    console.log("Ha non ");
} else {
    console.log("Ha HA ");
}
// SWITCH - BREAK - DEFAULT
const expr = "Papayas";
switch (expr) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
    // sans le breack le code ne s'arrete pas
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}
// les conditions ternaaires
let cinq = 5;
// si cinq est plus grand que 3 alors console  ':' sinon
cinq > 3 ? console.log("Oui cinq est plus grand que trois") : console.log("CECI NE SERA PAS EN CONSOLE");