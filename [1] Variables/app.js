"use strict";
// Déclaration de variables7
console.clear();
// Déclaration d'une variable avec le typage explicite 
let maChaine = "Hello world !!!";
console.log(`maChaine ${maChaine}`);
// Déclaration d'une variable avec typage explicite (Typescript infère le type)
let nombre = 10; // a évité lorsque nous travaillons en typescript
console.log(`nombre ${nombre}`);
// Déclaration d'une variable pour un tableau de nombre 
let monTableau = [1, 2, 3, 4, 5];
console.log(`monTableau ${monTableau}`);
// Déclaration d'un tuple contenant plusieurs types
let monTuple = ["test", 12345, true];
console.log(`monTuple ${monTuple}`);
// Déclaration d'un variables avec un typage explicite pour un objet
let monObjet = { nom: "toto", age: 50 };
console.log(`monObjet ${monObjet}`);
// Déclaration de variables avec Union types (Peut contenir plusieur types)
let monUnion = "Hello world !!!";
console.log(`monUnion ${monUnion}`);
monUnion = 50; // monUnion est maintenant de types number
console.log(`monUnion ${monUnion}`);
// L'utilisation de l'opérateur litéral pour déclarer des variables avec des valeur spécifiques
let monLitteral;
monLitteral = "deux";
console.log(`monLitteral ${monLitteral}`);
// D2claration d'une variable avec le type Any (peut contenir n'importe quel type)
let monAny = "hello";
console.log(`monAny ${monAny}`);
monAny = true;
console.log(`monAny ${monAny}`);
monAny = 30;
console.log(`monAny ${monAny}`);
// Utilisation de l'opérateur Undefined pour délcarer une variable pouvant être undefined
let maVariableNonDefinie;
console.log(`maVariableNonDefinie ${maVariableNonDefinie}`);
// Utilisation du l'opérateur null pour déclarer une variable pouvant être nul
let maVarNull;
maVarNull = null;
console.log(`maVarNull ${maVarNull}`);
maVarNull = "test";