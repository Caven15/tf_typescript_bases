import axios from 'axios'

// Interface pour typer la réponse de l'api
interface Pokemon{
    id : number,
    name : string,
    types : Array<{slot : number, type :{name : string}}>
}

// Fonction pour la récupérer les informations d'un pokémon
async function getPokemonByname(pokemonName: string) : Promise<Pokemon>{
    try{
        // effectuer une requête a l'api pokemo pour obtenir un pokemon par son nom
        const reponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        return reponse.data
    } catch(error : any){
        throw new Error(`Erreur lor de la récupération ${pokemonName} : \n ${error.message}`)
    }
}

async function main(){
    const pokemonName : string = 'bulbasaur';

    try{
        const pokemon : Pokemon = await getPokemonByname(pokemonName);
        // Afficher les information du pokémon
        console.log(`Id : ${pokemon.id}`);
        console.log(`Nom : ${pokemon.name}`);
        console.log(`Types : ${pokemon.types.map(t => t.type.name).join(', ')}`); // Convertir les types en chaine de carctères

    } catch(error){
        // Capturer et afficher l'erreur en cas de problème avec la requête
        console.error(error);
    }
}

main();