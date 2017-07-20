function sequence(start, step) {
    step = step || 0;
    start = start;
    return function () {
        return step+start;
    }
}

let generator = sequence(10, 3);

console.log(generator());
console.log(generator());
console.log(generator());