
(() => {
    console.log('Función autoejecutable');

    let avengers: any = 10;
    let exists;
    let power: any = 'Dr Strange';

    console.log((avengers as string).charAt(0));
    console.log(exists);
    console.log(power);


})();
