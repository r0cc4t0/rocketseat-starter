console.log('Exercício 4');

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
};
const { nome, endereco: { cidade, estado } } = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

console.log('\n');