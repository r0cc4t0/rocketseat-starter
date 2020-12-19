console.log('Aula 02 - Trabalhando com a DOM');

var elementById = document.getElementById('nome');
var elementsByName = document.getElementsByName('nome');
var elementsByTagName = document.getElementsByTagName('input');
var elementsByClassName = document.getElementsByClassName('botao');
var querySelector = document.querySelector('input[name=nome]');
var querySelectorAll = document.querySelectorAll('button');

console.log(elementById);
console.log(elementsByName);
console.log(elementsByTagName);
console.log(elementsByClassName);
console.log(querySelector);
console.log(querySelectorAll);

var buttonElement = document.querySelector('button.botao');
buttonElement.onclick = function () {
    alert(querySelector.value);
};

console.log('\n');