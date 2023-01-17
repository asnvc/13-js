console.clear();
/*
ARRAY (sąrašas, list'as, masyvas, matrica)
- rekomenduotina laikyti homogenišką informaciją
- galima ir skirtingu tipu informacija laikytu sarase


*/

const empty = [];
const marks = [10, 2, 8, 4, 6];
const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];
const chaos = [true, 7, 'asd', -3.14, 'ewreg', false, []];

console.log(empty);
console.log(marks);
console.log(names);
console.log(chaos);

const petroPazimys1 = 10;
const petroPazimys2 = 2;
const petroPazimys3 = 8;
const petroPazimys4 = 4;
const petroPazimys5 = 6;

const petroSuma = petroPazimys1 + petroPazimys2 + petroPazimys3 + petroPazimys4 + petroPazimys5;

const petroKiekis = 5;

const petroVidurkis = petroSuma / petroKiekis;
console.log('Petro pazymiu vidurkis:', petroVidurkis);

console.log('---------------------');

//    index:  0, 1, 2, 3, 4, ....
const ona = [10, 2, 8, 4, 6, 10];

const onosSuma = ona [0] + ona [1] + ona [2] + ona [3] + ona [4] + ona [5];
console.log(onosSuma);

const onosKiekis = ona.length;
console.log(onosKiekis);

const onosVidurkis = onosSuma / onosKiekis;
console.log('Onos pazymiu vidurkis:', onosVidurkis);

console.log('---------------------');

const vegs = ['pomidoras', 'agurkas', 'svogunas', 'bulve'];

// Reikia nupirkti: pomodiras, agurkas, svogunas, bulve

let sakinys = 'Reikia nupirkti: ';
let index = 0;

sakinys += vegs[index];
index += 1;
sakinys += ', ';

sakinys += vegs[index];
index += 1;
sakinys += ', ';

sakinys += vegs[index]
index += 1;
sakinys += ', ';

sakinys += vegs[index];
index += 1;
sakinys += '. ';

console.log(sakinys);