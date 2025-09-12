"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=null-undefined.js.map