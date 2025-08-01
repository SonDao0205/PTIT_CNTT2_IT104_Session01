const group = (array) => {
    const map = {};
    for (const word of array) {
        const key = word.split("").sort().join(``);
        if(!map[key]){
            map[key] = [];
        }
        map[key].push(word);
    }
    return map;
}

console.log(group(["eat","tea","tan","ate","nat","bat"]));
