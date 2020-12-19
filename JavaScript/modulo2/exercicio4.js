console.log('Exercício 4');

var inputElement = document.createElement('input');
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('name', 'nome');

var buttonElement4 = document.createElement('button');
var buttonText2 = document.createTextNode('Adicionar');
buttonElement4.appendChild(buttonText2);

function addItem(text) {
    var itemElement = document.createElement('li');
    var itemText = document.createTextNode(text);
    itemElement.appendChild(itemText);
    listElement.appendChild(itemElement);
}

function adicionar() {
    addItem(inputElement.value);
    inputElement.value = '';
}

buttonElement4.onclick = adicionar;
divElement.appendChild(inputElement);
divElement.appendChild(buttonElement4);

console.log('\n');