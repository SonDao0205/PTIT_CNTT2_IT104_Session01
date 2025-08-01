const sum = (...numbers) => {
    return numbers.map(arr => arr.reduce((acc, curr) => acc + curr, 0));
}

console.log(sum([1,2], [6,7,8], [12,8]));
