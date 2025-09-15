"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=type.js.map