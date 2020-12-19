console.log('Exercício 2');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

buttonElement3.onclick = function () {
    var square = document.createElement('div');
    square.style.width = '100px';
    square.style.height = '100px';
    square.style.backgroundColor = '#f00';
    square.style.marginTop = '15px';
    square.onmouseover = function () {
        square.style.backgroundColor = getRandomColor();
    }
    squaresElement.appendChild(square);
};

console.log('\n');