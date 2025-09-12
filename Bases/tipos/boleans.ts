
// Función anonima autoejecutable, declarado en ambito global
(() => {
    console.log('Función autoejecutable');

    let isActive: boolean = false;
    let isPending: boolean = true;

    isActive = ( isPending ) ? true : false;
    console.log('isActive:', isActive);
})();
