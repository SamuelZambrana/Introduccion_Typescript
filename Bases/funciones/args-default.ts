(() => {
    // Funciones en TypeScript - Argumentos opcionales
    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
        return `${firstName} ${lastName || ''}`.toUpperCase();
    }

    const name = fullName('Tony', 'Stark', true);
    console.log({ name });

})