var exercicio1 = 'Exercício 1';

function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(exercicio1);
            return idade >= 18 ? resolve() : reject();
        }, 4000);
    });
}

checaIdade(20)
    .then(function () {
        console.log('Maior de idade');
        console.log('\n');
    })
    .catch(function () {
        console.log('Menor de idade');
        console.log('\n');
    });