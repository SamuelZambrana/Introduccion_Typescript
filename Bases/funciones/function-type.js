"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=function-type.js.map