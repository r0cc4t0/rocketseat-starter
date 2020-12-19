console.log('Aula 05 - Funções');

function adicao(a, b) {
    return a += b;
}
function subtracao(a, b) {
    return a -= b;
}
function multiplicacao(a, b) {
    return a *= b;
}
function divisao(a, b) {
    return a /= b;
}
function resto(a, b) {
    return a %= b;
}

var a = 10, b = 5;
console.log(adicao(a, b));
console.log(subtracao(a, b));
console.log(multiplicacao(a, b));
console.log(divisao(a, b));
console.log(resto(a, b));

console.log('\n');