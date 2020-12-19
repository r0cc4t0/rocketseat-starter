console.log('Aula 08 - Valores Padrão');

const x = 10, y = 5;

const adicao = (a = x, b = y) => a + b;
const subtracao = (a = x, b = y) => a - b;
const multiplicacao = (a = x, b = y) => a * b;
const divisao = (a = x, b = y) => a / b;

console.log(adicao(7));
console.log(adicao());
console.log(subtracao(19));
console.log(subtracao());
console.log(multiplicacao(4));
console.log(multiplicacao());
console.log(divisao(12));
console.log(divisao());

console.log('\n');