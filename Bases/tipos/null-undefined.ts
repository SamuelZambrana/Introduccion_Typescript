
(() => {
    console.log('Función autoejecutable');
    const nullFunction = (): null => {
        return null;
    };
    const undefinedFunction = (): undefined => {
        return undefined;
    };
    const a = nullFunction();
    console.log(a); // null
    const b = undefinedFunction();
    console.log(b); // undefined
})();
