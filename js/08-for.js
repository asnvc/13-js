console.clear()
/*
FOR (ciklas)

for(pradzia; klausimas; pakeitimas) {
    kartojama logika
}
*/

const marks = [10, 2, 8, 4, 6];
let suma = 0;

suma += marks [0];
suma += marks [1];
suma += marks [2];
suma += marks [3];
suma += marks [4];

console.log('Vidurkis:', suma/ marks.length );


const mark = [10, 2, 8, 4, 6];
let sum = 0;
let index = 0;

sum += mark[index++];
sum += mark[index++];
sum += mark[index++];
sum += mark[index++];
sum += mark[index++];


console.log('Vidurkis:', sum/ mark.length );

// Isspausdinti nuo 0 iki 5.
for (let i=0; i <= 5; i++) {
    console.log(i);
}

// Isspausdinti nuo 100 iki 104.
for (let i=100; i <= 104; i++) {
    console.log(i);
}

// Isspausdinti nuo 1000 iki 995.
for (let i=1000; i >= 995; i--) {
    console.log(i);
}

console.log('---------');

const pazymiai = [2, 4, 6, 8, 10, 10, 8, 6, 4, 2];

let sumz = 0;

for(let i = 0; i < pazymiai.length; i++){
    console.log(i, '-->', pazymiai[i]);
}

console.log('---------');

const numbers = [10,20,30,40,50,60,70,80,90,100];

for(let i = 0; i<numbers.length; i+= 2){
    console.log(i, '-->', numbers[i]);

}

console.log('---------');

const abc = 'abcdefghijklmnoprstuvwxyz';
let text = ''

for(let i=0; i<abc.length; i+= 5){
    text += abc[i];
    console.log(i, abc[i], text);
}


console.log('---------');

const students = ['Petras', 'Maryte', 'Jonas', 'Ona']
// Sveiki, mano vardas yra [vardas]!

for(let i=0;i<students.length;i++){
    const name = students[i];
    const hi = `Sveiki, mano vardas yra ${name}!`
    console.log(hi);
}