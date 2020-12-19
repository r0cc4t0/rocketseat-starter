console.log('Exercício 5');

var usuarios = [
    {
        nome: 'Diego',
        habilidades: ['JavaScript', 'ReactJS', 'Redux']
    },
    {
        nome: 'Gabriel',
        habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
    }
];

function exibeHabilidades(usuarios) {
    for (var usuario of usuarios) {
        console.log('O ' + usuario.nome + ' possui as habilidades: ' + usuario.habilidades.join(', '));
    }
}
exibeHabilidades(usuarios);

console.log('\n');