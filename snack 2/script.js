/*
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
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
        lunghezza: 10
    },

    {
        varieta: 'verde',
        peso: 7,
        lunghezza: 14
    },

    {
        varieta: 'verde',
        peso: 3,
        lunghezza: 16
    },

    {
        varieta: 'verde',
        peso: 4,
        lunghezza: 10
    },

    {
        varieta: 'verde',
        peso: 5,
        lunghezza: 11
    },

    {
        varieta: 'verde',
        peso: 7,
        lunghezza: 14
    },

    {
        varieta: 'verde',
        peso: 8,
        lunghezza: 18
    },

    {
        varieta: 'verde',
        peso: 2,
        lunghezza: 19
    },

    {
        varieta: 'verde',
        peso: 3,
        lunghezza: 12
    },
];

let piu15 = [];
let meno15 = [];
let sumPiu = 0;
let sumMeno = 0;
for (let i = 0; i < zucchine.length; i++) {
    const element = zucchine[i];

    if (element.lunghezza > 15) {
        piu15.push(element.lunghezza);
        sumPiu += zucchine[i].lunghezza;
    } else if (element.lunghezza < 15) {
        meno15.push(element.lunghezza);
        sumMeno += zucchine[i].lunghezza;
    }
    
}
console.log(piu15, sumPiu);
console.log(meno15, sumMeno);