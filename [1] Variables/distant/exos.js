"use strict";
// Exercice 1 :
// Déclarez une variable isDone et initialisez-la avec une valeur booléenne de votre choix.
// Affichez
// cette valeur dans la console.
console.log("--- Exo 1 ---");
let isDone = false;
console.log(`résultat de isDone : ${isDone}`);
// Exercice 2 :
// Déclarez une variable greeting et initialisez-la avec une chaîne de caractères de votre
// choix.
// Affichez cette chaîne dans la console.
console.log("--- Exo 2 ---");
let greeting = "Hello world !!!";
console.log(`résultat de greeting : ${greeting}`);
// Exercice 3 :
// Déclarez une variable numbers et initialisez-la avec un tableau contenant les nombres
// de 1 à 5.
// Utilisez une boucle pour afficher chaque élément du tableau.
console.log("--- Exo 3 ---");
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
}
// Exercice 4 :
// Déclarez une variable person et initialisez-la avec un objet contenant les propriétés
// firstName
// et lastName de type chaîne de caractères. Affichez les valeurs de ces propriétés dans la
// console.
console.log("--- Exo 4 ---");
let person = {
    firstName: "Jhon",
    lastName: "Doe"
};
console.log(`Le Prénom de la personne est ${person.firstName}`);
console.log(`Le Nom de la personne est ${person.lastName}`);
// Exercice 5:
// Déclarez une variable status avec un type union pouvant être soit une chaîne de
// caractères
// "success", soit "error", soit "loading". Initialisez cette variable avec l'une de ces valeurs
// et
// affichez-la dans la console
