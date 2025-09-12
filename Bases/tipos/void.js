"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=void.js.map