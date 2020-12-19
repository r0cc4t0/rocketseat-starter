console.log('Exercício 3');

function temHabilidade(skills) {
    return skills.indexOf('JavaScript') !== -1;
}

var skills = ['JavaScript', 'ReactJS', 'React Native'];
console.log(temHabilidade(skills));

console.log('\n');