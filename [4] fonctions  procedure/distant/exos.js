"use strict";
// Exercice 1 : Procédure pour afficher la somme des multiples
// Écrire une procédure qui prend deux nombres entiers positifs n et m, et affiche la somme de tous
// les multiples de m qui sont inférieurs ou égaux à n.
function afficherMultiple(n, m) {
    let somme = 0;
    // Boucle sur tout les entiers de 1 à n
    for (let i = 1; i <= n; i++) {
        // V2rifie si le i est un multiple de m
        if (i % m === 0) {
            // Ajoute i à la somme si c'est un multiple de m
            somme += i;
        }
    }
    console.log(somme);
}
afficherMultiple(30, 2);
// Exercice 2 : Fonction pour renvoyer la factorielle d'un nombre
// Écrire une fonction qui prend un nombre entier positif n et renvoie la factorielle de n. La factorielle
// de n (notée n!) est le produit de tous les entiers de 1 à n.
function factorielle(n) {
    // Initialise le résultat à 1 (Car la factrorielle de 0 est 1)
    let resultat = 1;
    // Boucle de 1 à n pour multiplier tout les entiers jusqu'à n
    for (let i = 1; i <= n; i++) {
        // Multiplie le résultat par i
        // resultat = resultat * i;
        resultat *= i;
    }
    // Retourne le résultat de la factorielle
    return resultat;
}
console.log(`La factorielle de 10 est : ${factorielle(10)}`);
// Exercice 3 : Fonction avec paramètre optionnel pour créer une liste d'entiers
// Écrire une fonction qui prend deux nombres entiers start et end, et un pas optionnel step (défaut
// 1), et renvoie un tableau contenant tous les entiers de start à end avec le pas donné.
function creeTabEntiers(start, end, step = 1) {
    let newTab = [];
    // Boucle de start à end en incrémentant par step
    for (let i = start; i <= end; i += step) {
        // Ajoute l'entier courant au tableau
        newTab.push(i);
    }
    return newTab;
}
console.log("Tableau après création", creeTabEntiers(1, 20, 3));
console.log("Tableau après création", creeTabEntiers(1, 20));
// Exercice 4 : Fonction pour vérifier les nombres premiers dans un intervalle
// Écrire une fonction qui prend deux nombres start et end et renvoie un tableau contenant tous les
// nombres premiers entre start et end inclusivement. Un nombre premier est un nombre entier
// supérieur à 1 qui n'a aucun diviseur autre que 1 et lui-même.
function estPremier(n) {
    //Un nombre inférieur ou égal à 1 n'est pas premier
    if (n <= 1)
        return false;
    // Boucle de 2 à n-1 pour férifier si n a des diviseurs
    for (let i = 2; i < n; i++) {
        // Si n et divisible par un nombre autre que 1 et lui même, ce n'est pas un nombre premier
        if (n % i === 0)
            return false;
    }
    // Si aucun diviseur n'a été trouvé, n est un nombre premier
    return true;
}
function nombrePremiers(start, end) {
    // Initialise un tableau vide pour stocker les nombres premiers
    let premiers = [];
    // Boucle de start à end
    for (let i = start; i <= end; i++) {
        if (estPremier(i))
            premiers.push(i);
    }
    // retourne le tableau contenant les nombres premiers
    return premiers;
}
// Exercice 5 : Fonction anonyme pour trier un tableau d'objets
// Écrire une fonction anonyme assignée à une variable qui prend un tableau d'objets et un nom de
// propriété, et renvoie un nouveau tableau trié par cette propriété. La fonction doit gérer les cas
// où la propriété n'existe pas dans certains objets.
const trierTableauObj = function (tableau, props) {
    // Copier le tableau pour éviter de modifier l'original
    let tableauTrie = [...tableau];
    // Utilise un alborithme de tri (tri a bulles)
    for (let i = 0; i < tableauTrie.length - 1; i++) {
        for (let j = 0; j < tableauTrie.length - 1; j++) {
            // Si la propriété de l'objet actuel est supérieur à la suivante, on les échanges
            if (tableauTrie[j][props] > tableauTrie[j + 1][props]) {
                let tempo = tableauTrie[j];
                tableauTrie[j] = tableauTrie[j + 1];
                tableauTrie[j + 1] = tempo;
            }
        }
    }
    return tableauTrie;
};
let tabATrier = [
    { id: 55, nom: "Jhon" },
    { id: 17, nom: "Doe" },
    { id: 29, nom: "Paul" }
];
console.log("tableau avant tri", tabATrier);
console.log("tableau après tri", trierTableauObj(tabATrier, "id"));
console.log("tableau après tri", tabATrier);
// Exercice 6 : Fonction pour générer un tableau de nombres aléatoires uniques
// Écrire une fonction qui prend deux nombres n et max et renvoie un tableau contenant n nombres
// aléatoires uniques compris entre 1 et max inclusivement. Si n est supérieur à max, la fonction doit
// renvoyer un tableau vide.
function randomNumbers(nombre) {
    // Générateur de nombres pseudo aléatoire basé sur un nombre donné en argument
    nombre = (nombre * 9301 + 42297) % 233280;
    return nombre / 233280;
}
function nombreAléatoireUniques(n, max) {
    // Si n n'est pas supérieur à max, retorune un tableau
    if (n > max)
        return [];
    // Initialise un tableau vide pour stocker les nombres uniques
    let resultats = [];
    let valeur = 1;
    while (resultats.length < n) {
        // génère un nombre aléatoire enbtre 1 et max
        let nombreAleatoire = Math.floor(randomNumbers(valeur) * max) + 1;
        valeur++;
        // Vérifie si le nombre est déjà dans le tableau
        let existe = false;
        for (let i = 0; i < resultats.length; i++) {
            if (resultats[i] === nombreAleatoire) {
                existe = true;
                break;
            }
        }
        // si le nombre n'existe pas déjà, l'ajouter au tableau
        if (!existe) {
            resultats.push(nombreAleatoire);
        }
    }
    // retourne le tableau contenant lesbnombres aléatoire uniques
    return resultats;
}
let tabNombreUniques = nombreAléatoireUniques(10, 500);
console.log("Résultat nombre aléatoire : ", tabNombreUniques);
// Exercice 7 : Fonction générique pour fusionner deux tableaux
// Écrire une fonction générique qui prend deux tableaux de n'importe quel type et renvoie un
// nouveau tableau contenant tous les éléments des deux tableaux sans duplication.
function fusionnerTableau(tab1, tab2) {
    // Initialise un tableau vide pour stocker les éléments sans duplication
    let resultats = [];
    // Ajoute le éléments du premier tableau 
    for (let i = 0; i < tab1.length; i++) {
        let present = false;
        for (let j = 0; j < resultats.length; j++) {
            if (resultats[j] === tab1[i]) {
                present = true;
                break;
            }
        }
        if (!present) {
            resultats.push(tab1[i]);
        }
    }
    // Ajoute les éléments du second tableau
    for (let i = 0; i < tab2.length; i++) {
        let present = false;
        for (let j = 0; j < resultats.length; j++) {
            if (resultats[j] === tab2[i]) {
                present = true;
                break;
            }
        }
        if (!present) {
            resultats.push(tab2[i]);
        }
    }
    return resultats;
}
let resultatString = fusionnerTableau(["un", "trois", "cinq"], ["deux", "quatre", "cinq"]);
console.log("Résultat après fusion de string :", resultatString);
let resultatNombre = fusionnerTableau([1, 3, 5], [2, 4, 5]);
console.log("Résultat après fusion de string :", resultatNombre);
// Exercice 9 : Fonction pour appliquer une série d'opérations sur un nombre
// Écrire une fonction qui prend un nombre et un tableau de fonctions, et applique successivement
// chaque fonction au nombre, en renvoyant le résultat final.
function appliquerOperations(nombre, operations) {
    // Initialise le résultat avec la valeur de départ nombre
    let resultat = nombre;
    // boucle sur chaque fonction dans le tableau opérations
    for (let i = 0; i < operations.length; i++) {
        // Appliquer chaque fonction au résultat
        resultat = operations[i](resultat);
    }
    // retourne le résultat après avoir appliquer toutes les fonctions
    return resultat;
}
const fonctions = [
    (n) => n + 5,
    (n) => n * 3,
    (n) => n - 5
];
// Application des opération ç la valeur initiale 50
let resultatFonctions = appliquerOperations(0, fonctions);
console.log(resultatFonctions);
// Autre exemple : Aplpication d'une seule opération (multiplié par 5)
let resultatFonctions2 = appliquerOperations(1, [(n) => n * 5]);
console.log(resultatFonctions2);
// Exercice 10 : Fonction récursive pour générer la suite de Fibonacci
// Écrire une fonction récursive qui prend un nombre entier n et génère un tableau contenant les n
// premiers termes de la suite de Fibonacci. La suite de Fibonacci commence par 0 et 1, et chaque
// terme suivant est la somme des deux termes précédents.
function suiteFibonacci(n) {
    // Fonction récursive pour calculer le nombre de fibonnaci à l'indice donné
    function recursive(indice) {
        // Si l'indice est 0 ou 1, retourne l'indice (0 ou 1)
        if (indice <= 1)
            return indice;
        // Sinon, retourne la somme des deux termes précédents
        return recursive(indice - 1) + recursive(indice - 2);
    }
    // Initialise un tableau vide pour stocker la suite de Fibonacci
    let suite = [];
    // Boucle de 0 à n - 1 pour générer les n premiers termes de notre suite 
    for (let i = 0; i < n; i++) {
        // Ajoute le terme caclulé au tableau
        suite.push(recursive(i));
    }
    // Retourne le tableau contenant la suit de fibonacci
    return suite;
}
// Génère les 10 premier terme de la suite 
let fibo10 = suiteFibonacci(10);
console.log(fibo10);
// Génère les 10 premier terme de la suite 
let fibo20 = suiteFibonacci(20);
console.log(fibo20);
