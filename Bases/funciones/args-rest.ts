(() => {
    // Funciones en TypeScript - Argumentos restantes y por defecto
    const fullName = (firstName: string, ...restArgs: [string?, boolean?]): string => {
        const lastName = restArgs[0] || '';
        const upper = restArgs[1] || false;
        return `${firstName} ${lastName}`.toUpperCase();
    }

    const name = fullName('Tony', 'Stark', true);
    console.log({ name });

})