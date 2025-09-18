
(()=> {

     type Heroe = {
        nombre: string,
        edad: number,
        poderes: string[],
        getNombre?: () => string
    }

    let myCustomVariable: (string | number | Heroe) = 'Hola';
    console.log(typeof myCustomVariable);

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        nombre: 'Spiderman',
        edad: 30,
        poderes: ['Telaraña', 'Trepar paredes']
    }
    console.log(typeof myCustomVariable);
})
