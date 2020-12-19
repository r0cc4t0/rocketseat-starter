console.log('Exercício 1');

var endereco = {
    rua: 'Rua dos Pinheiros',
    numero: 1293,
    bairro: 'Centro',
    cidade: 'São Paulo',
    uf: 'SP'
};

function exibeMensagem(endereco) {
    return (
        'O usuário mora em ' + endereco.cidade + '/' + endereco.uf + ', no bairro ' +
        endereco.bairro + ', na ' + endereco.rua + ', nº ' + endereco.numero + '.'
    );
}
console.log(exibeMensagem(endereco));

console.log('\n');