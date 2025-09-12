"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatSignal = () => {
        return 'Batiseñal activada';
    };
    console.log(typeof activateBatSignal);
    const heroName = returnName();
    console.log({ heroName });
    console.log(activateBatSignal());
});
//# sourceMappingURL=functions.js.map