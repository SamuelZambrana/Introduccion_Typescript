"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    console.log('Función autoejecutable');
    const errorFunction = (err) => {
        throw new Error(err);
    };
    errorFunction('Esta función siempre lanza un error');
})();
//# sourceMappingURL=never.js.map