/*
Crea un array di 10 oggetti che rappresentano una zucchina, 
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

const zucchine = [
    {
        varieta: 'verde',
        peso: 5,
        lunghezza: 20
    },

    {
        varieta: 'verde',
        peso: 6,
        lunghezza: 20
    },

    {
        varieta: 'verde',
        peso: 7,
        lunghezza: 20
    },

    {
        varieta: 'verde',
        peso: 3,
        lunghezza: 20
    },

    {
        varieta: 'verde',
        peso: 4,
        lunghezza: 20
    },

    {
        varieta: 'verde',
        peso: 5,
        lunghezza: 20
    },

    {
        varieta: 'verde',
        peso: 7,
        lunghezza: 20
    },

    {
        varita: 'verde',
        peso: 8,
        lunghezza: 20
    },

    {
        varieta: 'verde',
        peso: 2,
        lunghezza: 20
    },

    {
        varieta: 'verde',
        peso: 3,
        lunghezza: 20
    },
];

    
    let sum = 0;
    for (let index = 0; index < zucchine.length; index++) {
        const element = zucchine[index];
         sum += element.peso
         console.log(sum)
    }

    

