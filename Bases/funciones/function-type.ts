(() => {
    // function types
    const addNumbers = (a: number, b: number) => a + b;

    const greet = (name: string) => `Hello, ${name}`;

    const saveTheWorld = () => console.log('The world is saved!');

    let myFunction: Function;

    myFunction = addNumbers
    console.log(myFunction(1, 2));

    myFunction = greet
    console.log(myFunction('Strider'));
    
    myFunction = saveTheWorld
    myFunction(); 


})();