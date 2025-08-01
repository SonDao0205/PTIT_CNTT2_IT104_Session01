const insert = (array1, array2, position) => {
    if(position < 0 || position > array1.length){
        return `vị trí không hợp lệ`
    }
    return [...array1.slice(0, position), ...array2, ...array1.slice(position)];
};
console.log(insert([`a`,`b`,`e`,`f`],[`c`,`d`],2));
