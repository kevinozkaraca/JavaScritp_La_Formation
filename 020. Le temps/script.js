
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
