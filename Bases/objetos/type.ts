(() => {

    type Heroe = {
        nombre: string,
        edad: number,
        poderes: string[],
        getNombre?: () => string
    }

    //Objeto literal
    let flash: Heroe = {
        nombre: "Barry Allen",
        edad: 24,
        poderes: ["Super velocidad", "Viajar en el tiempo"],
    }

    let superman: Heroe = {
        nombre: "Clark Kent",
        edad: 60,
        poderes: ["Super fuerza"],
        getNombre() {
            return this.nombre;
        }
    }

    let batman: Heroe = {
        nombre: "Bruce Wayne",
        edad: 45,
        poderes: ["Inteligencia avanzada", "Riqueza"],
        getNombre() {
            return this.nombre;
        }
    }

    console.log(flash);
    console.log(superman);
    console.log(batman);

})