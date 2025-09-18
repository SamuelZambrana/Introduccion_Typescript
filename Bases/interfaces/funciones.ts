(() => {

    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    const addNumbers: addTwoNumbers = (a: number, b: number): number => a + b;

    console.log(addNumbers(1, 2));


})