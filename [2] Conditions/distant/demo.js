"use strict";
// Déclaration de variables
let age = 17;
let jour = 1;
let est_adulte = true;
let id = true;
// Conditions if / else 
if (typeof age === "number") {
    if (age >= 18) {
        console.log("Vous êtes majeur !!!");
    }
    else if (age <= 18) {
        console.log("Vous êtes mienur !!!");
    }
    else {
        console.log("Si vous n'êtes ni majeur, ni mineur, existez vous réellement ?? 😨");
    }
}
else {
    console.log(`${age} n'est pas un nombre....`);
}
;
// Condition ternaire
if (typeof age != "string") {
    let message = (age >= 18) ? "Vous êtes majeur (ternaire)" : "Vous ^êtes mienur (ternaire)";
    console.log(message);
}
;
// Switch
let nomDuJour;
switch (jour) {
    case 1:
        nomDuJour = "Lundi";
        break;
    case 2:
        nomDuJour = "Mardi";
        break;
    case 3:
        nomDuJour = "Mercredi";
        break;
    case 4:
        nomDuJour = "Jeudi";
        break;
    case 5:
        nomDuJour = "Vendredi";
        break;
    default:
        nomDuJour = "week-end";
        break;
}
console.log(`Aujoud'hui nous sommes  ${nomDuJour}`);
