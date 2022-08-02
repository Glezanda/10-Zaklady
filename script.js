console.log("Caligula");

console.log( Math.floor(Math.random()) * 100 );
/*
let barva = prompt("Write color of yout hair");

console.log("Color of my eyes is " + barva)
*/

let rok = prompt("Write year of your birth");
let dnesniDatum = new  Date();

let pocetRoku = dnesniDatum.getYear() - rok;

console.log("User is " + pocetRoku + " old");