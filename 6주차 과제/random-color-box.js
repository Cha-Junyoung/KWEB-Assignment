const setRandomBgColor = () => {
    const color_box = document.getElementById('color-box');
    color_box.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
}