(() => {

    interface Xmen {
        nombre: string;
        realName: string;
        mutandPower(id: number): string;
    }


    class Mutant implements Xmen {
        constructor(
            public nombre: string,
            public realName: string
        ) { }

        mutandPower(id: number): string {
            return this.nombre + ' ' + id;
        }
    }

    const wolverine = new Mutant('Wolverine', 'Logan');
    const charles = new Mutant('Profesor X', 'Charles Xavier');

    console.log(wolverine.mutandPower(1));
    console.log(charles.mutandPower(2));

})