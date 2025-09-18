import { getPokemon } from './generics/get-pokemon';
import Pokemon from './decorators/pokemon-class';



getPokemon(4)
    .then( pokemon => console.log( pokemon ) )
    .catch( error => console.error( error ) )
    .finally( () => console.log('Fin de getPokemon')  )


const charmander = new Pokemon('Charmander', 4, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png');
console.log( charmander );
