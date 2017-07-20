function sequence(start, step) {
    step = step || 0;

    return function () {
        if (step === 0) {
            return start;
        } else {
            return start + step;
        }
    }
}

let generator = sequence(10, 3);

console.log(generator());
console.log(generator());
console.log(generator());