//#region création de promises

// Une promise est un objet représentant l'achèvement ou l'échec d'une opération asynchrone.

// fonction pour une tentivate de récupération sur une api (serveur)
// function fetchDataFromApi() : Promise<string> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             // simule la récupération de données avec succès ou échec
//             const success : boolean = false;
//             if (success){
//                 resolve("Data récupérée avec succès !!!")
//             }
//             else{
//                 reject( new Error("Erreur lors de la récupération de données..."))
//             }
//         },1500)

//     })
// }

// Utilisation de la promise
// fetchDataFromApi().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error.message);
// })

// console.log("coucou !!!");

//#endregion

//#region chaining de promises

// Les promises peuvent êtres chainés pour effectuer des opérations sequentielles.

// function step1() : Promise<string> {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Step 1 finie avec succès")
//         },500)
//     })
// }

// function step2() : Promise<string> {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Step 2 finie avec succès")
//         },500)
//     })
// }

// function step3() : Promise<string> {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Step 3 finie avec succès")
//         },500)
//     })
// }

// step1()
//     .then(dataResult1 =>{
//         console.log(dataResult1);
//         return step2();
//     })
//     .then(dataResult2 =>{
//         console.log(dataResult2);
//         return step3();
//     })
//     .then(dataResult3 =>{
//         console.log(dataResult3);
//     })
//     .catch(error => {
//         console.log(`Erreur dans la réalisation des étapes (1,2,3) : \n ${error}`);
//     })

//#endregion

//#region async / await

// L'utilisation de asynx/Await permet de simplifier le code asychrone
// en rendant le code plus linéaire et lisible

// async function fetchDataAsync() : Promise<string>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             // simule la récupération de données avec succès ou échec
//             const success : boolean = true;
//             if (success){
//                 resolve("Data async récupérée avec succès !!!")
//             }
//             else{
//                 reject( new Error("Erreur lors de la récupération de données..."))
//             }
//         },1500)

//     })
// }

// async function main(){
//     console.clear()
//     try{
//         const data : string = await fetchDataAsync()
//         console.log(data);
//     } catch(error){
//         console.log(error);
//     }
// }

// main()

//#endregion

//#region chaining async / await
// async function step4() : Promise<string>{
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Step 4 est finie avec succès !"), 2500)
//     })
// }

// async function step5() : Promise<string>{
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Step 5 est finie avec succès !"), 2500)
//     })
// }

// async function step6() : Promise<string>{
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Step 6 est finie avec succès !"), 2500)
//     })
// }

// async function executeStep(){
//     try {
//         const result4 = await step4()
//         console.log(result4);

//         const result5 = await step5()
//         console.log(result5);

//         const result6 = await step6()
//         console.log(result6);
//     } catch (error) {
//         new Error(`Erreur dans les steps 4,5,6 : \n ${error}`);
//     }
// }

// executeStep();

//#endregion
import axios from 'axios';

//#region Récupération de données depuis une api en promise
function fetchUserData(userId : string) : Promise<any>{
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
}

fetchUserData("5")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Erreur de récupération utilisateur", error)
    })

async function fetchUserDataAsync(userId : string){
    try{
        let reponse : any = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        console.log(reponse.data);
        console.log(reponse.data.name);
        console.log(reponse.data.username);
    } catch(error){
        console.error("Erreur lors de la récupération utilisateur", error);
    }
}

fetchUserDataAsync("2");