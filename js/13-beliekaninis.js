console.clear()

function beliekaninis(start, finish, divide) {
    let count = 0;

    for (let i=start; i <= finish; i++) {
         if (i % divide === 0) {
            count++;
         }
    }

    return count;
}

console.log(beliekaninis(0, 11, 3),'--->', 4);
console.log(beliekaninis(0, 11, 5),'--->', 3);
console.log(beliekaninis(0, 11, 7),'--->', 2);
