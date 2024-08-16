"use strict";
// Exercice 1 : Somme des carrés
// Écrivez un programme qui utilise une boucle for pour calculer la somme des
// carrés des nombres de 1 à 20. Le résultat final doit être affiché dans la console.
// Utilisez la formule n * n pour obtenir le carré d'un nombre n.
console.log("--- Exo 1 ---");
let sommeCarre = 0;
for (let i = 1; i <= 20; i++) {
    // Ajoute le carré de i à la somme
    sommeCarre += i * i;
}
console.log(`La somme des carré de 1 à 20 est : ${sommeCarre}`);
// Exercice 2 : Compter les occurrences
// Écrivez un programme qui utilise une boucle pour parcourir un tableau de
// nombres et compte combien de fois un nombre cible donné apparaît dans le
// tableau. Affichez le nombre d'occurrences dans la console. Si le nombre cible
// n'est pas présent, le programme doit retourner 0.
console.log("--- Exo 2 ---");
let tableau = [1, 2, 3, 4, 2, 1, 3, 4, 5, 1];
let cible = 2;
let compteur = 0;
for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] === cible) {
        compteur++;
    }
}
console.log(`Le nombre ${cible} apparait ${compteur} fois dans le tableau`);
// Exercice 3 : Réverser un tableau
// Écrivez un programme qui utilise une boucle for pour inverser l'ordre des
// éléments d'un tableau de nombres [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Affichez le tableau
// inversé dans la console.
console.log("--- Exo 3 ---");
let tableau2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tabReverse = [];
for (let i = tableau2.length - 1; i >= 0; i--) {
    tabReverse.push(tableau2[i]);
}
console.log(`Tableau avant inversion : ${tableau2}`);
console.log(`Tableau apr§s inversion : ${tabReverse}`);
// Exercice 4 : Table de multiplication
// Écrivez un programme qui utilise une boucle for pour générer la table de
// multiplication d'un nombre entier donné, de 1 à 12. Affichez chaque ligne de la
// table dans la console au format "n x i = produit", où n est le nombre donné et i
// varie de 1 à 12.
console.log("--- Exo 4 ---");
let nombre = 5;
for (let i = 1; i <= 12; i++) {
    console.log(`${nombre} x ${i} = ${(nombre * i)}`);
}
// Exercice 5 : Filtrer les nombres pairs
// Écrivez un programme qui utilise une boucle pour parcourir un tableau de
// nombres et créer un nouveau tableau contenant uniquement les nombres pairs.
// Affichez le tableau résultant dans la console.
console.log("--- Exo 5 ---");
let tableau3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nombrePairs = [];
for (let i = 0; i < tableau3.length; i++) {
    if (tableau3[i] % 2 === 0) {
        nombrePairs.push(tableau3[i]);
    }
}
console.log(`Nombre pairs : ${nombrePairs}`);
// Exercice 6 : Calcul de la moyenne
// Écrivez un programme qui utilise une boucle pour calculer la somme des
// éléments d'un tableau de nombres, puis divisez cette somme par le nombre
// d'éléments pour obtenir la moyenne. Affichez la moyenne dans la console. Gérez
// le cas où le tableau est vide.
console.log("--- Exo 6 ---");
let tableau4 = [20, 40, 60, 80, 100];
let somme = 0;
for (let i = 0; i < tableau4.length; i++) {
    somme += tableau4[i];
}
let moyenne = (tableau4.length > 0) ? (somme / tableau4.length) : 0;
console.log(`La moyenne est : ${moyenne}`);
// Exercice 7 : Trouver le second plus grand
// Écrivez un programme qui utilise une boucle pour trouver et afficher le second
// plus grand nombre dans un tableau d'entiers. Gérez le cas où le tableau contient
// moins de deux éléments.
console.log("--- Exo 7 ---");
let tableau5 = [1, 2, 3, 4, 5];
let max = tableau5[0];
let secondMax = -Infinity; // REcherche le plus petit nombre négatif posible sur le type number
for (let i = 0; i < tableau5.length; i++) {
    if (tableau5[i] > max) {
        secondMax = max;
        max = tableau5[i];
    }
    else if ((tableau5[i] > secondMax) && (tableau5[i] != max)) {
        secondMax = tableau5[i];
    }
}
if (tableau5.length < 2) {
    console.log("le tableau ne contient pas assez d'éléments");
}
else {
    console.log(`"Le plus grand nombre est : ${max}"`);
    console.log(`"Le second plus grand nombre est : ${secondMax}"`);
}
// Exercice 8 : Vérification des nombres premiers
// Écrivez un programme qui utilise une boucle pour vérifier si un nombre entier
// donné est premier. Un nombre premier est un nombre entier supérieur à 1 qui n'a
// aucun diviseur autre que 1 et lui-même. Le programme doit afficher true si le
// nombre est premier, sinon false. Gérez également les cas où le nombre est
// inférieur ou égal à 1.
console.log("--- Exo 8 ---");
let nombre2 = 18;
let estPremier = true;
if (nombre2 <= 1) {
    estPremier = false;
}
else {
    // nous calclons une limite approximative
    // nous vérifions les diviseurs jusqu'a la moitié du nombre
    let limite = 1;
    while (limite * limite <= nombre2) {
        limite++;
    }
    limite--;
    for (let i = 2; i <= limite; i++) {
        if (nombre2 % i === 0) {
            estPremier = false;
            break;
        }
    }
}
console.log(`Le nombre ${nombre2} est premier : ${estPremier}`);
// Exercice 9 : Compter les caractères
// Écrivez un programme qui utilise une boucle pour parcourir une chaîne de
// caractères et compter le nombre de fois que chaque caractère apparaît. Affichez
// un objet contenant les caractères comme clés et leur nombre d'occurrences
// comme valeurs dans la console. Gérez la casse des caractères (c'est-à-dire, a et
// A doivent être comptés séparément).
console.log("--- Exo 9 ---");
let mot = "HelloWorld";
let compteurCaracteres = {};
for (let i = 0; i < mot.length; i++) {
    if (compteurCaracteres[mot[i]]) {
        // Incrémente le compteur si le caractère existe dans l'objet
        compteurCaracteres[mot[i]]++;
    }
    else {
        // Ajoute le caractère à l'objet avec un compteur 1
        compteurCaracteres[mot[i]] = 1;
    }
}
console.log(`Compte des caractère : ${compteurCaracteres}`);
console.log("Compte des caractère :", compteurCaracteres);
// Exercice 10 : Générateur de permutations
// Écrivez un programme qui utilise une boucle pour générer et afficher toutes les
// permutations possibles d'une chaîne de caractères donnée. Affichez le tableau
// résultant dans la console. Assurez-vous de gérer les chaînes contenant des
// caractères répétés.
console.log("--- Exo 10 ---");
let chaine = "abc";
let resultats = [];
// Première permutation : abc
for (let i = 0; i < chaine.length; i++) {
    // Premier caractère
    let char1 = chaine[i];
    for (let j = 0; j < chaine.length; j++) {
        // evité de répeter le même caractère
        if (i === j)
            continue;
        // Deuxième caractère
        let char2 = chaine[j];
        for (let k = 0; k < chaine.length; k++) {
            // éviter de répeter les caractère déjà utilisé
            if (k === i || k === j)
                continue;
            let char3 = chaine[k];
            // Combine les trois caractères pour former une permutation
            let permutation = char1 + char2 + char3;
            // Ajoute la permutation au tableau des résultats
            resultats.push(permutation);
        }
    }
}
console.log("Toutes les permutation possible ", resultats);
