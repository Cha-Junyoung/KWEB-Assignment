const displayTimes = () => {
    const number = parseInt(document.getElementById('number').value);
    const timesResult = document.getElementById('times-result');

    if (![1, 2, 3, 4, 5, 6, 7, 8, 9].includes(number)) {
        timesResult.innerText = 'Input Error!';
        return;
    }

    else {
        const result = [];
        for (let i = 1; i <= 9; i++) {
            result.push(number + ' X ' + i + ' = ' + number * i);
        }
        timesResult.innerText = result.join('\n');
    }
};