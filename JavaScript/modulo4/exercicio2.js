var exercicio2 = 'Exercício 2';

var inputElement = document.querySelector('input[name=user]');
var buttonElement = document.querySelector('#add');
var listElement = document.querySelector('ul');

function renderRepositories(repositories) {
    listElement.innerHTML = '';
    for (var repo of repositories) {
        var textElement = document.createTextNode(repo.name);
        var itemElement = document.createElement('li');
        itemElement.appendChild(textElement);
        listElement.appendChild(itemElement);
    }
}

function listRepositories() {
    var user = inputElement.value;
    if (!user) return;
    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            renderRepositories(response.data);
            setTimeout(function () {
                console.log(exercicio2);
                console.log(response.data);
                console.log('\n');
            }, 5000);
        })
        .catch(function () {
            listElement.innerHTML = '';
            setTimeout(function () {
                console.log(exercicio2);
                console.warn('Erro!');
                console.log('\n');
            }, 5000);
        });
}

buttonElement.onclick = listRepositories;