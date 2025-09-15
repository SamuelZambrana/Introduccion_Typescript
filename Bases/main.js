System.register("funciones/args-default", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                // Funciones en TypeScript - Argumentos opcionales
                const fullName = (firstName, lastName, upper = false) => {
                    return `${firstName} ${lastName || ''}`.toUpperCase();
                };
                const name = fullName('Tony', 'Stark', true);
                console.log({ name });
            });
        }
    };
});
System.register("funciones/args-optionals", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                // Funciones en TypeScript - Argumentos opcionales
                const fullName = (firstName, lastName) => {
                    return `${firstName} ${lastName || ''}`;
                };
                const name = fullName('Tony');
                console.log({ name });
            });
        }
    };
});
System.register("funciones/args-required", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                // Funciones en TypeScript - Argumentos obligatorios
                const fullName = (firstName, lastName) => {
                    return `${firstName} ${lastName}`;
                };
                const name = fullName('Tony', 'Stark');
                console.log({ name });
            });
        }
    };
});
System.register("funciones/args-rest", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                // Funciones en TypeScript - Argumentos restantes y por defecto
                const fullName = (firstName, ...restArgs) => {
                    const lastName = restArgs[0] || '';
                    const upper = restArgs[1] || false;
                    return `${firstName} ${lastName}`.toUpperCase();
                };
                const name = fullName('Tony', 'Stark', true);
                console.log({ name });
            });
        }
    };
});
System.register("funciones/function-type", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                // function types
                const addNumbers = (a, b) => a + b;
                const greet = (name) => `Hello, ${name}`;
                const saveTheWorld = () => console.log('The world is saved!');
                let myFunction;
                myFunction = addNumbers;
                console.log(myFunction(1, 2));
                myFunction = greet;
                console.log(myFunction('Strider'));
                myFunction = saveTheWorld;
                myFunction();
            })();
        }
    };
});
System.register("funciones/functions", [], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                const hero = 'Flash';
                function returnName() {
                    return hero;
                }
                const activateBatSignal = () => {
                    return 'Batiseñal activada';
                };
                console.log(typeof activateBatSignal);
                const heroName = returnName();
                console.log({ heroName });
                console.log(activateBatSignal());
            });
        }
    };
});
System.register("objetos/objects", [], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                //Objeto literal
                let flash = {
                    nombre: "Barry Allen",
                    edad: 24,
                    poderes: ["Super velocidad", "Viajar en el tiempo"],
                    getNombre() {
                        return this.nombre;
                    }
                };
                let superman = {
                    nombre: "Clark Kent",
                    edad: 60,
                    poderes: ["Super fuerza"],
                    getNombre() {
                        return this.nombre;
                    }
                };
                console.log(flash);
                console.log(superman);
            });
        }
    };
});
System.register("objetos/type", [], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                //Objeto literal
                let flash = {
                    nombre: "Barry Allen",
                    edad: 24,
                    poderes: ["Super velocidad", "Viajar en el tiempo"],
                };
                let superman = {
                    nombre: "Clark Kent",
                    edad: 60,
                    poderes: ["Super fuerza"],
                    getNombre() {
                        return this.nombre;
                    }
                };
                let batman = {
                    nombre: "Bruce Wayne",
                    edad: 45,
                    poderes: ["Inteligencia avanzada", "Riqueza"],
                    getNombre() {
                        return this.nombre;
                    }
                };
                console.log(flash);
                console.log(superman);
                console.log(batman);
            });
        }
    };
});
System.register("objetos/union-types", [], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                let myCustomVariable = 'Hola';
                console.log(typeof myCustomVariable);
                myCustomVariable = 20;
                console.log(typeof myCustomVariable);
                myCustomVariable = {
                    nombre: 'Spiderman',
                    edad: 30,
                    poderes: ['Telaraña', 'Trepar paredes']
                };
                console.log(typeof myCustomVariable);
            });
        }
    };
});
System.register("tipos/any", [], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                console.log('Función autoejecutable');
                let avengers = 10;
                let exists;
                let power = 'Dr Strange';
                console.log(avengers.charAt(0));
                console.log(exists);
                console.log(power);
            })();
        }
    };
});
System.register("tipos/arrays", [], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                console.log('Función autoejecutable');
                const avengers = ['Thor', 'Iron Man', 'Hulk', 100, true];
                const villIans = ['Loki', 'Ultron', 'Thanos'];
                villIans.forEach(v => console.log(v.toUpperCase()));
                avengers.push('Capitán América');
                avengers.push(150);
                avengers.push(false);
                console.log(avengers);
            })();
        }
    };
});
System.register("tipos/boleans", [], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [],
        execute: function () {
            // Función anonima autoejecutable, declarado en ambito global
            (() => {
                console.log('Función autoejecutable');
                let isActive = false;
                let isPending = true;
                isActive = (isPending) ? true : false;
                console.log('isActive:', isActive);
            })();
        }
    };
});
System.register("tipos/enums", [], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                console.log('Función autoejecutable');
                let Avenger;
                (function (Avenger) {
                    Avenger["THOR"] = "Thor";
                    Avenger["IRON_MAN"] = "Iron Man";
                    Avenger["HULK"] = "Hulk";
                })(Avenger || (Avenger = {}));
                let miAvenger = Avenger.HULK;
                console.log(miAvenger);
                console.log(Avenger.THOR);
                console.log(Avenger.IRON_MAN);
                console.log(Avenger.HULK);
            })();
        }
    };
});
System.register("tipos/never", [], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                console.log('Función autoejecutable');
                const errorFunction = (err) => {
                    throw new Error(err);
                };
                errorFunction('Esta función siempre lanza un error');
            })();
        }
    };
});
System.register("tipos/null-undefined", [], function (exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                console.log('Función autoejecutable');
                const nullFunction = () => {
                    return null;
                };
                const undefinedFunction = () => {
                    return undefined;
                };
                const a = nullFunction();
                console.log(a); // null
                const b = undefinedFunction();
                console.log(b); // undefined
            })();
        }
    };
});
System.register("tipos/numbers", [], function (exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                console.log('Función autoejecutable');
                let avengers = 5;
                console.log('Avengers:', avengers);
                const villians = 20;
                console.log('Villians:', villians);
                if (avengers > villians) {
                    console.log('Estamos salvados');
                }
                else {
                    console.log('Estamos muertos');
                }
            })();
        }
    };
});
System.register("tipos/strings", [], function (exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                console.log('Función autoejecutable');
                const batman = 'Bruce';
                const superman = "Clark";
                const linternaVerde = `Hal`;
                console.log(batman, superman, linternaVerde);
                const concatenacion = batman + ' ' + superman + ' ' + linternaVerde;
                console.log('Concatenación:', concatenacion);
                const templateString = `
        ${batman} 
        ${superman} 
        ${linternaVerde}
    `;
                console.log('Template String:', templateString.toUpperCase());
                function getName() {
                    return 'Fernando';
                }
                const templateString2 = `
        ${getName()} 
        ${superman} 
        ${linternaVerde}
    `;
                console.log('Template String 2:', templateString2);
            })();
        }
    };
});
System.register("tipos/tuples", [], function (exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                console.log('Función autoejecutable');
                const avengers = ['Thor', 100];
                console.log(avengers);
            })();
        }
    };
});
System.register("tipos/void", [], function (exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                console.log('Función autoejecutable');
                const voidFunction = () => {
                    console.log('Esta función no retorna nada');
                };
                const simpleFunction = () => {
                    return 'Esta función retorna un string';
                };
                const a = voidFunction();
                console.log(a); // undefined
                const b = simpleFunction();
                console.log(b); // Esta función retorna un string
            })();
        }
    };
});
//# sourceMappingURL=main.js.map