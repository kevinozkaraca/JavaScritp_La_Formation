// Booléan
let maVariableTrue = true;
let maVariableFalse = false;
// Null
let maVariableNull = null;
// Undefined
let maVariableUndefined = undefined;
// Number
let maVariableNumber1 = 123;
let maVariableNumber2 = 123.123;
// BigInt (trop grand pour etre représenté)
let maVariableBigInt = BigInt(9007199254740991);
// String
let maVariableString = "123";
let maVariableStringPX = "123px";
let maVariableStringVirgule = "123.123";

// 123 n'est pas équivalent à "123"
// 123 + "123" = "123132"
// 123 - "123" = 0 car le -, le / et le * convertissent le string en nombre

console.log("Calcul de '123' + 123 :");
console.log(maVariableNumber1 + maVariableString);
let calculNumberString = maVariableNumber1 + maVariableString;
console.log("type du resultat de '123' + 123 :");
console.log(typeof (maVariableNumber1 + maVariableString));

// Calcul de 2 constantes
const maVariableNumber3 = 123;
const maVariableNumber4 = 123;
console.log("Calcul de 2 constantes :");
console.log(maVariableNumber3 + maVariableNumber4);
console.log("type du resultat de 2 constantes :");
console.log(typeof (maVariableNumber3 + maVariableNumber4));
// Mise en variable du calcul de 2 constantes
let calculNumberConstante = maVariableNumber3 + maVariableNumber4 + 33;
console.log("mise en variable du calcul de 2 constantes, plus un number :");
console.log(calculNumberConstante);
//Typeof permet de connaitre le type de la variable
console.log("type de la variable :");
console.log(typeof (calculNumberConstante));