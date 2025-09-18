
(() => {
    console.log('Función autoejecutable');
    
    const voidFunction = (): void => {
        console.log('Esta función no retorna nada');
    }

    const simpleFunction = (): string => {
        return 'Esta función retorna un string';
    }

    const a = voidFunction();
    console.log(a); // undefined

    const b = simpleFunction();
    console.log(b); // Esta función retorna un string

})();