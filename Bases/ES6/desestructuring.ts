(()=> {

    type Avenger = {
        nombre: string,
        clave: string,
        poder?: string,
        activos: boolean,
        // edad?: number
    }

    const avenger: Avenger = {
        nombre: "Steve",
        clave: "Capitán América",
        poder: "Droga",
        activos: true
    }

    const { nombre, clave, poder, activos } = avenger;

    console.log(nombre);
    console.log(clave);
    console.log(poder);
    console.log(activos);

    const extraer = ({ nombre, clave, poder }: Avenger) => {
        console.log(nombre);
        console.log(clave);
        console.log(poder);
    }

    extraer(avenger);

    // Desestructuración en arreglos
    const avengers: string[] = ["Thor", "Ironman", "Spiderman"];
    const [thor, ironman, spiderman] = avengers;

    console.log(thor);
    console.log(ironman);
    console.log(spiderman);

    const extraerArr = ([thor, ironman, spiderman]: string[]) => {
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    }

    extraerArr(avengers);

})