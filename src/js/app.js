function sequence(start, step) {
    start = start || 0;
    step = step || 1;
    start -= step;
    return () => {
        return start += step;
    };
}

const gen2 = sequence(0, 2);

function take(fn, count) {
    const arrOfResults = [];

    for (let i = 0; i < count; i++) {
        arrOfResults.push(fn());
    }

    return arrOfResults;
}

console.log(take(gen2, 5));

/*----Next step-----*/

let arr = [1, 2, 3];

function square(x) {
    return x * x;
}

function map(fn, array) {
    const arrOfResults = [];

    array.forEach((item) => {
        arrOfResults.push(fn(item))
    });
    return arrOfResults;
}

console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]
