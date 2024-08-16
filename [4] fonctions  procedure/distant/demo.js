"use strict";
// Procédure
function addition(nombre1, nombre2) {
    console.log(`${nombre1} + ${nombre2} = ${nombre1 + nombre2}`);
}
let nombreUser1 = 1;
let nombreUser2 = 1;
addition(nombreUser1, nombreUser2);
// Fonction
function multiplication(nombre1, nombre2) {
    let resultat = (nombre1 * nombre2);
    return resultat;
}
console.log(`5 x 3 = ${multiplication(5, 3)}`);
// Application de paramètre optionnel
function bienvenueOpt(nom, message) {
    if (message) {
        return `${message}, ${nom}`;
    }
    else {
        return `Hello, ${nom}`;
    }
}
console.log(bienvenueOpt("Jhon"));
console.log(bienvenueOpt("Jhon", "Bienvenue à toi"));
// Application de paramètre par default
function bienvenueDef(nom, message = "Hello") {
    return `${message}, ${nom}`;
}
console.log(bienvenueDef("Jhon"));
console.log(bienvenueDef("Jhon", "Bienvenue à toi"));
// fonction flechée (Array function)
const soustration = (nombre1, nombre2) => {
    return nombre1 - nombre2;
};
console.log(`le sésultat de 30 - 15 est : ${soustration(30, 15)}`);
