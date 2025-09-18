(()=> {

    //Introducción a las clases en ES6

    class Avenger {

        name;
        realName;

        constructor(
            name= '',
            realName= ''
        ) {
            this.name = name;
            this.realName = realName;
        }
    }

    class FlyingAvenger extends Avenger {

        canFly;

        constructor(
           
            canFly= false
        ) {
            super(name, realName);
            this.canFly = canFly;
        }
    }

    const ironman = new FlyingAvenger('Ironman', 'Tony Stark', true);

    console.log(ironman);

    const antman = new Avenger('Antman', 'Scott Lang');

    console.log(antman);

})