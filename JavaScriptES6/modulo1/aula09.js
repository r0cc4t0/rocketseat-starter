console.log('Aula 09 - Desestruturação');

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
};

const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraEstado({ endereco: { estado } }) {
    console.log(estado);
}
mostraEstado(usuario);

console.log('\n');