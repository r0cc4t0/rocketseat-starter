"use strict";

console.log('Aula 08 - Valores Padrão');
var x = 10,
    y = 5;

var adicao = function adicao() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : y;
  return a + b;
};

var subtracao = function subtracao() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : y;
  return a - b;
};

var multiplicacao = function multiplicacao() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : y;
  return a * b;
};

var divisao = function divisao() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : y;
  return a / b;
};

console.log(adicao(7));
console.log(adicao());
console.log(subtracao(19));
console.log(subtracao());
console.log(multiplicacao(4));
console.log(multiplicacao());
console.log(divisao(12));
console.log(divisao());
console.log('\n');
