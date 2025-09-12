"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=args-rest.js.map