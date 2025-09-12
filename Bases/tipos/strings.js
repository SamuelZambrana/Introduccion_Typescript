"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=strings.js.map