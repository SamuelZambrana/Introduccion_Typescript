(() => {


    class PrivateConstructor {

        static instance: PrivateConstructor | null = null;
        private constructor(public name: string) { }

        static callApocalipsis(): PrivateConstructor {
        if (PrivateConstructor.instance === null) {
            PrivateConstructor.instance = new PrivateConstructor('Apocalipsis');
        }
        return PrivateConstructor.instance;
    }
    }


    // const instance = new PrivateConstructor('Test'); // Error: Constructor of class 'PrivateConstructor' is private.

})