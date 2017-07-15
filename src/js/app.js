function sequence() {
    let callNumber = 0;
    return function () {
        return ++callNumber;
    }
}

let generator = sequence();

console.log(generator()); // 1
console.log(generator()); // 2
console.log(generator()); // 3