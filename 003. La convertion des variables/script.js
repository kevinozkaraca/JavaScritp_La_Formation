let maVariableNumber1 = 123;
let maVariableNumber2 = 123.123;
let maVariableBigInt = BigInt(9007199254740991);
let maVariableString = "123";
let maVariableStringPX = "123px";
let maVariableStringVirgule = "123.123";
let maVariableTrue = true;
let maVariableFalse = false;
let maVariableNull = null;
let maVariableUndefined = undefined;
let tableau = [maVariableNumber1, maVariableNumber2, maVariableBigInt, maVariableString, maVariableStringPX, maVariableStringVirgule, maVariableTrue, maVariableFalse, maVariableNull, maVariableUndefined];
let tableauVide = [];

console.log("-- Convertion d'une string en number :");
console.log(Number(maVariableString));
console.log("-- type apres convertion : ");
console.log(typeof (Number(maVariableString)));
console.log("--------------------------------------");
console.log("-- Convertion d'un number en string :");
console.log(String(maVariableNumber1));
console.log("-- type apres convertion : ");
console.log(typeof (String(maVariableNumber1)));
console.log("--------------------------------------");
console.log("-- Convertion d'une true en number :");
console.log(Number(maVariableTrue));
console.log("-- type apres convertion : ");
console.log(typeof (Number(maVariableTrue)));
console.log("--------------------------------------");
console.log("-- Convertion d'un false en number :");
console.log(Number(maVariableFalse));
console.log("-- type apres convertion : ");
console.log(typeof (Number(maVariableFalse)));
console.log("--------------------------------------");
console.log("-- Convertion d'un undefined en number :");
console.log(Number(maVariableUndefined));
console.log("-- type apres convertion : ");
console.log(typeof (Number(maVariableUndefined)));
/*
NaN est considéré comme un type de données numériques en JavaScript, même si sa valeur ne peut pas être traitée comme un nombre.

C'est pourquoi lorsque vous demandez le type de NaN avec l'opérateur typeof, vous obtenez number.
*/
console.log("--------------------------------------");
console.log("-- Convertion d'un true en string :");
console.log(String(maVariableTrue));
console.log(maVariableNumber1.toString());
console.log("-- type apres convertion : ");
console.log(typeof (String(maVariableTrue)));
console.log("--------------------------------------");
console.log("-- Convertion d'un number en boolean :");
console.log(Boolean(maVariableNumber1));
console.log("-- type apres convertion : ");
console.log(typeof (Boolean(maVariableNumber1)));
console.log("--------------------------------------");
console.log("-- Convertion d'un string en boolean :");
console.log(Boolean(maVariableString));
console.log("-- type apres convertion : ");
console.log(typeof (Boolean(maVariableString)));
console.log("--------------------------------------");
console.log("-- Convertion d'un tableau en boolean :");
console.log(Boolean(tableau));
console.log("-- type apres convertion : ");
console.log(typeof (Boolean(tableau)));
console.log("--------------------------------------");
console.log("-- Convertion d'un tableau vide en boolean :");
console.log(Boolean(tableauVide));
console.log("-- type apres convertion : ");
console.log(typeof (Boolean(tableauVide)));
console.log("--------------------------------------");

console.log("-- Recupération des number dans un string (123px) : ");
console.log(parseInt(maVariableStringPX));
console.log("-- Recupération des number dans un string (123.123) : ");
console.log(parseFloat(maVariableStringVirgule));
console.log("-- couper un number à la virgule (123.123) : ");
console.log(parseInt(maVariableNumber2));
console.log("-- convertir un string en number à la virgule '123.123' : ");
console.log(parseFloat(maVariableStringVirgule));