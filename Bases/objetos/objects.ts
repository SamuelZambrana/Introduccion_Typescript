(() => {

    //Objeto literal
    let flash: {
        nombre: string,
        edad: number,
        poderes: string[],
        getNombre?: () => string
    } = {
        nombre: "Barry Allen",
        edad: 24,
        poderes: ["Super velocidad", "Viajar en el tiempo"],
        getNombre() {
            return this.nombre;
        }
    }

    let superman: {
        nombre: string,
        edad: number,
        poderes: string[],
        getNombre?: () => string
    } = {
        nombre: "Clark Kent",
        edad: 60,
        poderes: ["Super fuerza"],
        getNombre() {
            return this.nombre;
        }
    }

    console.log(flash);
    console.log(superman);

})