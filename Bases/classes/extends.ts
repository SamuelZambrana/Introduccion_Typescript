(()=> {

    class Avenger {

        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger llamado');
        }

        protected getFullName() {
            return `${ this.name } ${ this.realName }`;
        }
    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean = true
        ){
            super(name, realName);
            console.log('Constructor Xmen llamado');
        }
        
        get fullName() {
            return this.getFullName();
        }

        set fullName(name: string) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 letras');
            }
            this.name = name;
        }
    }


})