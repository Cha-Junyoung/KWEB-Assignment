const getDivisors = (num) => {
    let returnArr = [];

    for(let i = 1; i < Math.ceil(Math.sqrt(num)); i++) {
        if(num % i === 0) returnArr.push(i, num/i);
    }
    return returnArr.sort((v1, v2) => v1-v2);
};