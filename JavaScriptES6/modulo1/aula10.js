console.log('Aula 10 - Operadores Rest/Spread');

const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const array = [0, 1, 2, 3, 4];

console.log('Rest');

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);

const [a, b, ...c] = array;
console.log(a);
console.log(b);
console.log(c);

console.log('Spread');

const array2 = [5, 6, 7, 8, 9];
const array3 = [...array, ...array2];
console.log(array3);

const usuario2 = { ...usuario, nome: 'Gabriel', idade: 28 };
console.log(usuario2);

console.log('\n');