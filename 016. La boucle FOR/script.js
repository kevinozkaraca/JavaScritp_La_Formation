
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