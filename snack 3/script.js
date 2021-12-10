/*
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

let lettere = ['a', 'b', 'c'];
let numeri = [1, 2, 3]; 

let lettereNumeri = [];



function mischiare(array1, array2, array3) {
for (let i = 0; i < array1.length; i++) {
    array3.push(array1[i], array2[i]);
}
return array3
}

let arrayMisto = mischiare(lettere, numeri, lettereNumeri);
console.log(arrayMisto);




