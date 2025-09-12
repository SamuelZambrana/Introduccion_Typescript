"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    console.log('Función autoejecutable');
    let Avenger;
    (function (Avenger) {
        Avenger["THOR"] = "Thor";
        Avenger["IRON_MAN"] = "Iron Man";
        Avenger["HULK"] = "Hulk";
    })(Avenger || (Avenger = {}));
    let miAvenger = Avenger.HULK;
    console.log(miAvenger);
    console.log(Avenger.THOR);
    console.log(Avenger.IRON_MAN);
    console.log(Avenger.HULK);
})();
//# sourceMappingURL=enums.js.map