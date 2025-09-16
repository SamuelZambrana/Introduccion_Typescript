System.register("basica", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                class Avenger {
                    name;
                    realName;
                    isAlive;
                    age;
                    powers;
                    static avgAge = 35;
                    constructor(name, realName, isAlive = true, age, powers = []) {
                        this.name = name;
                        this.realName = realName;
                        this.isAlive = isAlive;
                        this.age = age;
                        this.powers = powers;
                        this.name = name;
                        this.realName = realName;
                        this.isAlive = isAlive;
                        this.age = age;
                        this.powers = powers;
                    }
                }
                const antman = new Avenger('Antman', 'Scott Lang');
                console.log(antman);
                console.log(Avenger.avgAge);
            });
        }
    };
});
//# sourceMappingURL=main.js.map