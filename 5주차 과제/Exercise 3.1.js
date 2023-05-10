const isValidNumber = (num) => {
    const parseNum = parseInt(num);
    const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    return numArr.includes(parseNum) ? true : false;
};
