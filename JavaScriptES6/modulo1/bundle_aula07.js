"use strict";

console.log('Aula 07 - Arrow Functions');
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var map = array.map(function (item, index) {
  return item * index;
});
console.log(map);
var reduce = array.reduce(function (total, next) {
  return total + next;
});
console.log(reduce);
var filter = array.filter(function (item) {
  return item % 2 !== 0;
});
console.log(filter);
var find = array.find(function (item) {
  return item === 7;
});
console.log(find);

var teste_array = function teste_array() {
  return ['v', 'w', 'x', 'y', 'z'];
};

var teste_object = function teste_object() {
  return {
    nome: 'João',
    humano: true
  };
};

console.log(teste_array());
console.log(teste_object());
console.log('\n');
