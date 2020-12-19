console.log('Exercício 1');

var buttonElement3 = document.createElement('button');
var buttonText = document.createTextNode('Novo Quadrado');
buttonElement3.setAttribute('id', 'new');
buttonElement3.style.marginTop = '15px';
buttonElement3.appendChild(buttonText);

var squaresElement = document.createElement('div');
squaresElement.setAttribute('id', 'squares');

divElement.appendChild(buttonElement3);
divElement.appendChild(squaresElement);

buttonElement3.onclick = function () {
    var square = document.createElement('div');
    square.style.width = '100px';
    square.style.height = '100px';
    square.style.backgroundColor = '#f00';
    square.style.marginTop = '15px';
    squaresElement.appendChild(square);
};

console.log('\n');