console.log('Exercício 4');

function experiencia(anos) {
    if (anos < 0) {
        return 'Valor inválido';
    } else if (anos >= 0 && anos <= 1) {
        return 'Iniciante';
    } else if (anos > 1 && anos <= 3) {
        return 'Intermediário';
    } else if (anos > 3 && anos <= 6) {
        return 'Avançado';
    } else {
        return 'Jedi Master';
    }
}

var anosEstudo = 7;
console.log(experiencia(anosEstudo));

console.log('\n');