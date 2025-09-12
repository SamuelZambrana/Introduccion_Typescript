"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    // Funciones en TypeScript - Argumentos opcionales
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    const name = fullName('Tony');
    console.log({ name });
});
//# sourceMappingURL=args-optionals.js.map