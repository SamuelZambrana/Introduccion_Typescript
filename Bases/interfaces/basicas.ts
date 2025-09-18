(()=> {
  // Bases/interfaces/basicas.ts

    interface SuperHeroe {
        nombre: string;
        artesMarciales: string[];
    }

    const superheroe: SuperHeroe = {
        nombre: "Dr. Strange",
        artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
    };

    const { nombre, artesMarciales } = superheroe;

    console.log(nombre);
    console.log(artesMarciales.join(", "));

})();