import { operacoes } from './aula01';
import adicao, * as funcoes from './aula02';
import { resto, potenciacao as potencia, radiciacao as raiz } from './aula03';
import ClasseUsuario, { idade } from './exercicio1';
import Usuario, { idade as IdadeUsuario } from './exercicio1';

console.log('Aula 01 - Configurando o Webpack');
console.log(operacoes(10, 5));
console.log('\n');

console.log('Aula 02 - Import/Export');
console.log(`Adição: ${adicao(98, 74)}`);
console.log(`Subtração: ${funcoes.subtracao(23, 36)}`);
console.log(`Multiplicação: ${funcoes.multiplicacao(47, 9)}`);
console.log(`Divisão: ${funcoes.divisao(85, 51)}`);
console.log('\n');

console.log('Aula 03 - Webpack Dev Server');
console.log(`Resto: ${resto(60, 12)}`);
console.log(`Potenciação: ${potencia(7, 3)}`);
console.log(`Radiciação: ${raiz(8, 2)}`);
console.log('\n');

console.log('Exercício 1');
ClasseUsuario.info();
console.log(idade);
Usuario.info();
console.log(IdadeUsuario);
console.log('\n');