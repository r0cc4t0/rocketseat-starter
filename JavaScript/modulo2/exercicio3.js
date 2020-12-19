console.log('Exercício 3');

var listElement = document.createElement('ul');
listElement.style.marginTop = '15px';
divElement.appendChild(listElement);

var nomes = ['Diego', 'Gabriel', 'Lucas'];

for (var nome of nomes) {
    var itemElement = document.createElement('li');
    var itemText = document.createTextNode(nome);
    itemElement.appendChild(itemText);
    listElement.appendChild(itemElement);
}

console.log('\n');