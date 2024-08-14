"use strict";
// Exercice 1 : Vérification d'âges
// Écrivez un programme qui prend en entrée un âge (un nombre) et affiche un message. Si
// l'âge est inférieur à 18 ans, le programme doit afficher "Vous êtes mineur". Si l'âge est
// compris entre 18 et 65 ans, le programme doit afficher "Vous êtes adulte". Si l'âge est
// supérieur à 65 ans, le programme doit afficher "Vous êtes senior".
console.log("---  Exo 1 ---");
let age = 5;
if (age < 18) {
    console.log("Vous êtes mineur");
}
else if (age <= 65) {
    console.log("Vous êtes adulte");
}
else {
    console.log(" vous êtes senior");
}
// Exercice 2 : Classification des nombres
// Rédigez un programme qui reçoit un nombre et affiche un message. Si le nombre est
// positif, le programme doit afficher "Positif". Si le nombre est négatif, il doit afficher
// "Négatif". Si le nombre est égal à zéro, le programme doit afficher "Zéro".
console.log("---  Exo 2 ---");
let nombre = 0;
switch (true) {
    case nombre > 0:
        console.log("Positif");
        break;
    case nombre < 0:
        console.log("Négatif");
        break;
    default:
        console.log("Zéro");
        break;
}
// Exercice 3 : Pair ou Impair
// Concevez un programme qui prend un nombre en entrée et affiche "Pair" si le nombre est
// pair, ou "Impair" s'il est impair.
console.log("---  Exo 3 ---");
let nombre2 = 15;
let resultat = (nombre2 % 2 === 0 ? "Pair" : "Impair");
console.log(`Le nombre est ${resultat}`);
// Exercice 4 : Calcul de réduction
// Écrivez un programme qui reçoit un montant (nombre) et calcule un nouveau montant en
// appliquant une réduction selon les règles suivantes : si le montant est supérieur à 1000,
// appliquez une réduction de 20 % ; si le montant est compris entre 500 et 1000, appliquez
// une réduction de 10 % ; si le montant est inférieur à 500, appliquez une réduction de 5 %.
// Le programme doit afficher le montant après réduction.
console.log("---  Exo 4 ---");
let montant = 450;
let reduction;
console.log(`Le montant avant réduction est : ${montant} €`); // Symbole eurso avec altr gr + e
if (montant > 1000) {
    reduction = 0.20; // 20 % de réduction si le montant est supérieur à 1000
}
else if (montant >= 500) {
    reduction = 0.10; // 10 % de réduction si le montant est compris entre 500 et 1000
}
else {
    reduction = 0.05; // 5 % de réduction si le montant est inférieur à 500
}
let montantAvecReduction = montant - (montant * reduction);
console.log(`Le montant après réduction est : ${montantAvecReduction} €`);
// Exercice 5 : Vérification de mots de passe
// Élaborez un programme qui prend un mot de passe en entrée (chaîne de caractères) et
// affiche un message. Si le mot de passe contient moins de 8 caractères, affichez "Mot de
// passe trop court". Si le mot de passe contient au moins 8 caractères mais aucun chiff re,
// affichez "Le mot de passe doit contenir au moins un chiffre". Si le mot de passe contient
// au moins 8 caractères et au moins un chiffre, affichez "Mot de passe valide".
console.log("---  Exo 5 ---");
let motDePasse = "AlexTest15";
if (motDePasse.length < 8) {
    console.log("Mot de passe trop court");
}
else {
    let contientChiffre = false;
    // Vérification manuelle si le mot de passe contient un chiffre 
    for (let i = 0; i < motDePasse.length; i++) {
        if (motDePasse[i] >= '0' && motDePasse[i] <= '9') {
            contientChiffre = true;
            console.log(motDePasse[i]);
            break;
        }
    }
    if (!contientChiffre) {
        console.log("Le mot de passe doit contenir au moins un chiffre");
    }
    else
        console.log("Mot de passe valide"); // Mot de passe avec au moint 8 caractère et un chiffre
}
// Exercice 6 : Évaluation des notes
// Rédigez un programme qui prend une note sur 100 (nombre) et affiche un grade en
// fonction de cette note : si la note est entre 90 et 100, affichez "A" ; si elle est entre 80 et
// 89, affichez "B" ; si elle est entre 70 et 79, affichez "C" ; si elle est entre 60 et 69, affichez
// "D" ; si elle est inférieure à 60, affichez "F".
console.log("---  Exo 6 ---");
let note = 91;
switch (true) {
    case note >= 90 && note <= 100:
        console.log("A");
        break;
    case note >= 80 && note < 90:
        console.log("B");
        break;
    case note >= 70 && note < 80:
        console.log("C");
        break;
    case note >= 60 && note < 70:
        console.log("D");
        break;
    default:
        console.log("F");
        break;
}
// Exercice 7 : Vérification d'années bissextiles
// Écrivez un programme qui reçoit une année (nombre) et affiche true si l'année est
// bissextile, sinon affiche false. Une année est bissextile si elle est divisible par 4 mais pas
// par 100, ou si elle est divisible par 400.
console.log("---  Exo 7 ---");
// Année bissextile 2000 / 2004
// Année non bissextile 2001 / 2002
let annee = 2004;
let estBissextile = (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
console.log(estBissextile ? true : false);
// Exercice 8 : Analyse des scores
// Concevez un programme qui prend un tableau de scores (une liste de nombres) et affiche
// les statistiques suivantes : le score maximum, le score minimum, la moyenne des
// scores, et la médiane des scores
console.log("---  Exo 8 ---");
let scores = "20 30 50 70 90";
let tableauScores = [];
let scoreActuel = "";
for (let i = 0; i < scores.length; i++) {
    if (scores[i] !== " ") {
        scoreActuel += scores[i]; // Construction de mon nombre actuel
    }
    else {
        tableauScores.push(parseInt(scoreActuel)); // Ajout du nombre au talbeau après conversion
        scoreActuel = ""; // Réinitialisation pour le nombre suivant
    }
}
if (scoreActuel !== "") {
    tableauScores.push(parseInt(scoreActuel)); // Ajout du dernier nombre s'il y en a un
}
if (tableauScores.length > 0) {
    let scoreMax = tableauScores[0];
    let scoreMin = tableauScores[0];
    let sommesScores = 0;
    // Calcul manuel du maximum, minimum et de la somme des scores
    for (let i = 0; i < tableauScores.length; i++) {
        if (tableauScores[i] > scoreMax) {
            scoreMax = tableauScores[i];
        }
        if (tableauScores[i] < scoreMin) {
            scoreMin = tableauScores[i];
        }
        sommesScores += tableauScores[i];
    }
    let moyenneScore = sommesScores / tableauScores.length;
    // Calcul de la médiane
    tableauScores.sort((a, b) => a - b);
    let medianeScore;
    let milieu = Math.floor(tableauScores.length / 2);
    if (tableauScores.length % 2 === 0) {
        medianeScore = (tableauScores[milieu - 1] + tableauScores[milieu] / 2);
    }
    else {
        medianeScore = tableauScores[milieu];
    }
    console.log(`Score maximum : ${scoreMax}`);
    console.log(`Score minimum : ${scoreMin}`);
    console.log(`Moyennes des scores : ${moyenneScore}`);
    console.log(`Médiane des scores : ${medianeScore}`);
}
else {
    console.log("Aucun score disponible...");
}
