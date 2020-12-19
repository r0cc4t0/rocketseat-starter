console.log('Aula 07 - Operadores Lógicos');

var sexo = 'F', idade = 23;
var masculino = sexo === 'M' || sexo === 'm';
var feminino = sexo === 'F' || sexo === 'f';

if (masculino && idade >= 18) {
    console.log('Sexo masculino, maior de idade');
}
else if (masculino && idade < 18) {
    console.log('Sexo masculino, menor de idade');
}
else if (feminino && idade >= 18) {
    console.log('Sexo feminino, maior de idade');
}
else if (feminino && idade < 18) {
    console.log('Sexo feminino, menor de idade');
}
else {
    console.log('Sexo indefinido e/ou idade inválida');
}

console.log('\n');