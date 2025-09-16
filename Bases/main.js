System.register("basicas", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                // Bases/interfaces/basicas.ts
                const superheroe = {
                    nombre: "Dr. Strange",
                    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
                };
                const { nombre, artesMarciales } = superheroe;
                console.log(nombre);
                console.log(artesMarciales.join(", "));
            })();
        }
    };
});
System.register("clases", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                class Mutant {
                    nombre;
                    realName;
                    constructor(nombre, realName) {
                        this.nombre = nombre;
                        this.realName = realName;
                    }
                    mutandPower(id) {
                        return this.nombre + ' ' + id;
                    }
                }
                const wolverine = new Mutant('Wolverine', 'Logan');
                const charles = new Mutant('Profesor X', 'Charles Xavier');
                console.log(wolverine.mutandPower(1));
                console.log(charles.mutandPower(2));
            });
        }
    };
});
System.register("complejas", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                const client = {
                    name: 'Alejandro',
                    age: 23,
                    address: {
                        id: 123456,
                        zip: '12345',
                        city: 'New York'
                    },
                    getFullAddress(id) {
                        return this.address?.city || '';
                    }
                };
            });
        }
    };
});
System.register("funciones", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            (() => {
                const addNumbers = (a, b) => a + b;
                console.log(addNumbers(1, 2));
            });
        }
    };
});
//# sourceMappingURL=main.js.map