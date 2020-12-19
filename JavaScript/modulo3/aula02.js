console.log('Aula 02 - Iniciando a Aplicação');

var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');

// var todos = [
//     'Fazer café',
//     'Estudar JavaScript',
//     'Acessar comunidade da Rocketseat'
// ];

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

console.log('\n');