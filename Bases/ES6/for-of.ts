(()=> {


    type Avenger = {
        nombre: string,
        clave: string,
    }

    const iroman: Avenger = {
        nombre: "Tony Stark",
        clave: "Ironman"
    }

    const capitanAmerica: Avenger = {
        nombre: "Steve Rogers",
        clave: "Capitán América"
    }

    const thor: Avenger = {
        nombre: "Thor Odinson",
        clave: "Thor"
    }

    const avengers: Avenger[] = [iroman, capitanAmerica, thor];

    for (const avenger of avengers) {
        console.log(avenger);
        console.log(avenger.nombre);
        console.log(avenger.clave);
    }

})