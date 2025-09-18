(()=> {

    class Avenger {

        static avgAge: number = 35;
        static getAvgAge() {
            return this.avgAge;
        }

        constructor(
            public name: string,
            public realName: string,
            private isAlive: boolean = true,
            public age?: number,
            public powers: string[] = []
        ) {
            this.name = name;
            this.realName = realName;
            this.isAlive = isAlive;
            this.age = age;
            this.powers = powers;
        }

        private bio () {
            return `${ this.name } (${ this.realName })`;
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Scott Lang');

    console.log(antman);
    console.log(Avenger.avgAge);
    console.log(antman['bio']());

})