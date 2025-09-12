
(() => {
    console.log('Función autoejecutable');
    enum Avenger {
        THOR = 'Thor',
        IRON_MAN = 'Iron Man',
        HULK = 'Hulk'
    }

    let miAvenger: Avenger = Avenger.HULK;
    console.log(miAvenger);

    console.log(Avenger.THOR);
    console.log(Avenger.IRON_MAN);
    console.log(Avenger.HULK);
})();