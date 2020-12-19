"use strict";

console.log('Exercício 3');
var arr = [1, 2, 3, 4, 5];
console.log(arr.map(function (item) {
  return item + 10;
}));
var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario));
var nome = 'Diego';
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Mateus';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario());

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log(promise);
console.log('\n');
