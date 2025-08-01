const checkParity = (number) => {
    if(isNaN(number)){
        console.log(`${number} is not number`);
        return;
    }
    number % 2 == 0 ? console.log(`${number} is an even number`) : console.log(`${number} is an odd number`);   
}

checkParity(7);