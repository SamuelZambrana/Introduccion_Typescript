
(() => {
    console.log('Función autoejecutable');

    const errorFunction = (err: string): never => {
        throw new Error(err);
    };
    errorFunction('Esta función siempre lanza un error');
})();
