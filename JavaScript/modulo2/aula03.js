console.log('Aula 03 - Lidando com Elementos');

var linkElement = document.createElement('a');
linkElement.setAttribute('href', 'https://rocketseat.com.br/');
linkElement.setAttribute('title', 'Site da Rocketseat');

var textElement = document.createTextNode('Acessar site da Rocketseat');
linkElement.appendChild(textElement);
console.log(linkElement);

var divElement = document.querySelector('#app');
divElement.appendChild(linkElement);

var buttonElement2 = document.querySelector('button[name=teste]');
console.log(buttonElement2);
divElement.removeChild(buttonElement2);

console.log('\n');