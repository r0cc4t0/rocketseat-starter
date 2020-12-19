console.log('Aula 07 - Arrow Functions');

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const map = array.map((item, index) => item * index);
console.log(map);

const reduce = array.reduce((total, next) => total + next);
console.log(reduce);

const filter = array.filter(item => item % 2 !== 0);
console.log(filter);

const find = array.find(item => item === 7);
console.log(find);

const teste_array = () => ['v', 'w', 'x', 'y', 'z'];
const teste_object = () => ({ nome: 'João', humano: true });
console.log(teste_array());
console.log(teste_object());

console.log('\n');