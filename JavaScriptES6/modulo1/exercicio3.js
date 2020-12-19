console.log('Exercício 3');

const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item + 10));

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade;
console.log(mostraIdade(usuario));

const nome = 'Diego';
const idade = 23;
const mostraUsuario = (nome = 'Mateus', idade = 18) => ({ nome, idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario());

const promise = () => new Promise((resolve, reject) => resolve());
console.log(promise);

console.log('\n');