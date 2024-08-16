"use strict";
// For
// Affichage des nombre pair de 1 à 10
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log("-----------------------------");
// For of me permet le parcours des éléments d'une collection (tableau, tuple, ect...)
let fruits = ["promme", 'Poire', "Banane"];
for (let fruit of fruits) {
    console.log(fruit); // Afficher chaque fruit de la collection
}
console.log("-----------------------------");
//  Boucler sur une chaine de caractère 
let message = 'Typescipt';
for (let caractere of message) {
    console.log(caractere);
}
console.log("-----------------------------");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers) {
    if (number === 5) {
        console.log(`Nombre trouvé => ${number}`);
        break;
    }
}
console.log("-----------------------------");
// For in qui permet de parcourir toutes les attributs d'un objet
let etudiant = { nom: "Jhon", age: 35, grade: "Medior" };
for (let atr in etudiant) {
    console.log(` ${atr} : ${etudiant[atr]}`);
}
console.log("-----------------------------");
// While
let compteur = 1;
while (Math.random() > 0.2) {
    console.log(compteur);
    compteur++;
}
let nombre = 15;
console.log("-----------------------------");
do {
    console.log(nombre);
    nombre++;
} while (nombre < 10);
// forEAch
let prenoms = ["Jhon", "Bob", "Tom", "Snoop"];
// UTilisation du foreach pour parcourir chaque élément du tableau
prenoms.forEach((prenom, index) => {
    // La fonction flechée est executées pour chaque élément du tableau
    // "prenom" repreésente l'élément actuelle (chaque prénom)
    // "index" représente la position actuelle dans le tableau
    // Affiche un message pour chaque prénom 
    console.log(`Bonjour, ${prenom}! Vous êtes à la position ${index + 1} dans la liste.`);
});
// Fonction pour vérifier si un mot de passe est valide
console.log("-----------------------------");
function motDePasseValide(motDePasse) {
    // Définition de l'expression régulière pour valider le mot de passe
    // ^ 	        : Début de la chaine (le mot de passe doit corresponddre a toute la chaine)
    // (?=.*[!#$%]) : Cette partie comprend les caractères spéciaux courants que nous voulons détecter
    // (?=.*[a-z])  : Cette partie s'assure qu'il y a au moins une lettre minuscule quelque part dans la chaine
    // (?=.*[A-Z])  : Cette partie s'assure qu'il y a au moins une lettre majuscule quelque part dans la chaine
    // (?=.*\d)     : Cette partie s'assure qu'il y a au moins un chiffre quelque part dans la chaine
    // .{8,}        : Cette partie s'assure que le mot de passe contient au moins 8 caractères
    // $            : Fin de la chaine (le mot de passe doit corresponddre a toute la chaine)
    const regex = /^(?=.*[!#$%])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    // LA méthode test() retourne true si le mot de passe respecte toutes les conditons imposées par l'expression régulière, sinon on renvoie false
    return regex.test(motDePasse);
}
let motDePasse1 = "Strong!Pass1";
console.log(`Le mot de passe "${motDePasse1}" est => ${motDePasseValide(motDePasse1)}`);
let motDePasse2 = "test";
console.log(`Le mot de passe "${motDePasse2}" est => ${motDePasseValide(motDePasse2)}`);