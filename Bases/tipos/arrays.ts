
(() => {
    console.log('Función autoejecutable');
    const avengers: (string | number | boolean)[] = ['Thor', 'Iron Man', 'Hulk', 100, true];
    const villIans: string []= ['Loki', 'Ultron', 'Thanos'];

    villIans.forEach( v => console.log(v.toUpperCase()) );
    avengers.push('Capitán América');
    avengers.push(150);
    avengers.push(false);

    console.log(avengers);
    
})();