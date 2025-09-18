function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = ( print: boolean = false ): Function => {
    if (print) {
        return printToConsole;
    } else {
        return () => {};
    }
}

const bloquearPrototipo = function( constructor: Function ) {
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}

function checkValidPokemonId() {
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        const originalMethod = descriptor.value;

        descriptor.value = ( id: number ) => {
            if ( id < 1 || id > 800 ) {
                return console.error('El id del pokemon debe estar entre 1 y 800');
            } else {
                return originalMethod( id );
            }
        }

        return descriptor;
    }
}

// @bloquearPrototipo
@bloquearPrototipo

@printToConsoleConditional( true )
    
@printToConsole
class Pokemon {
    constructor(
        public name: string,
        public id: number,
        public sprites: string,
    ) {}
    @checkValidPokemonId()
    savePokemonToDB(id: number) {
        console.log('Guardando en base de datos a ', id);
    }
}

export default Pokemon;