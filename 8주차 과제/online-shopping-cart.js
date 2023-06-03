let result = 0;

const item = {
    apple: 700,
    orange: 800,
    lemon: 900,
};

for (const buttonEl of document.getElementsByClassName('add-to-cart')) {
    buttonEl.addEventListener('click', event => {
        const itemName = event.target.parentNode.parentNode.getAttribute('id');
        result += item[itemName];
        document.getElementById('cost').innerText = result;
    });
}
