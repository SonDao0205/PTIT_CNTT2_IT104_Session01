const convert = (array1,array2) => {
    return [...array1,...array2].sort();
}

console.log(convert([1, 2, 3, 5, 9], [4, 6, 7, 8]));
