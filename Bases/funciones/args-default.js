"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    // Funciones en TypeScript - Argumentos opcionales
    const fullName = (firstName, lastName, upper = false) => {
        return `${firstName} ${lastName || ''}`.toUpperCase();
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
});
//# sourceMappingURL=args-default.js.map