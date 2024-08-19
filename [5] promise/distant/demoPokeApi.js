"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Fonction pour la récupérer les informations d'un pokémon
function getPokemonByname(pokemonName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // effectuer une requête a l'api pokemo pour obtenir un pokemon par son nom
            const reponse = yield axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            return reponse.data;
        }
        catch (error) {
            throw new Error(`Erreur lor de la récupération ${pokemonName} : \n ${error.message}`);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const pokemonName = 'bulbasaur';
        try {
            const pokemon = yield getPokemonByname(pokemonName);
            // Afficher les information du pokémon
            console.log(`Id : ${pokemon.id}`);
            console.log(`Nom : ${pokemon.names}`);
            console.log(`Types : ${pokemon.types.map(t => t.type.name).join(', ')}`); // Convertir les types en chaine de carctères
        }
        catch (error) {
            // Capturer et afficher l'erreur en cas de problème avec la requête
            console.error(error);
        }
    });
}
main();
