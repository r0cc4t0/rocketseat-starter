"use strict";

console.log('Aula 05 - Const & Let');
var usuario = {
  nome: 'Diego'
};
usuario.nome = 'Cleiton';
console.log(usuario);

function teste(x) {
  var y = 2;

  if (x > 5) {
    y = 4;
    console.log(x, y);
  }
}

teste(10);
console.log('\n');
