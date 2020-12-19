"use strict";

console.log('Aula 09 - Desestruturação');
var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraEstado(_ref) {
  var estado = _ref.endereco.estado;
  console.log(estado);
}

mostraEstado(usuario);
console.log('\n');
