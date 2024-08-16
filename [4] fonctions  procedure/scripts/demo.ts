// Procédure
function addition(nombre1 : number, nombre2 : number) : void{
    console.log(`${nombre1} + ${nombre2} = ${nombre1 + nombre2}`);
}

let nombreUser1 : number = 1
let nombreUser2 : number = 1

addition(nombreUser1,nombreUser2);

// Fonction
function multiplication(nombre1 : number, nombre2 : number) : number{
    let resultat : number = (nombre1 * nombre2);
    return resultat;
}

console.log(`5 x 3 = ${multiplication(5,3)}`);

// Application de paramètre optionnel
function bienvenueOpt(nom : string, message? : string) : string{
    if (message){
        return `${message}, ${nom}`;
    }
    else{
        return `Hello, ${nom}`
    }
}

console.log(bienvenueOpt("Jhon"));
console.log(bienvenueOpt("Jhon", "Bienvenue à toi"));

// Application de paramètre par default
function bienvenueDef(nom :string, message : string = "Hello") : string {
    return `${message}, ${nom}`
}

console.log(bienvenueDef("Jhon"));
console.log(bienvenueDef("Jhon", "Bienvenue à toi"));

// fonction flechée (Array function)
const soustration = (nombre1 : number, nombre2 : number) : number => {
    return nombre1 - nombre2
}

console.log(`le résultat de 30 - 15 est : ${soustration(30,15)}`);


// Fonction générique
function id<T>(parametre : T) : T{
    return parametre
}

console.log(id<number>(42));
console.log(id<string>("hello"));