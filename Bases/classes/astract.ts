(()=> {


    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string,
            public isAlive: boolean,
        ) {}
    }

    class Xmen extends Mutante {

        salvarMundo() {
            return 'Mundo salvado!';
        }
    }
    class Villain extends Mutante {

        conquistarMundo() {
            return 'Mundo conquistado!';
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    const magneto = new Villain('Magneto', 'Max Eisenhardt', true);
    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());

})