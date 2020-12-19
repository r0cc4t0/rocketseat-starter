console.log('Aula 06 - Condicionais');

function retornaSexo1(sexo) {
    if (sexo === 'M' || sexo === 'm') {
        return 'Masculino';
    }
    else if (sexo === 'F' || sexo === 'f') {
        return 'Feminino';
    }
    else {
        return 'Outro';
    }
}

function retornaSexo2(sexo) {
    switch (sexo) {
        case 'M':
        case 'm':
            return 'Masculino';
        case 'F':
        case 'f':
            return 'Feminino';
        default:
            return 'Outro';
    }
}

console.log(retornaSexo1('F'));
console.log(retornaSexo2('m'));

console.log('\n');