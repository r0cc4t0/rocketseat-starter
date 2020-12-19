var exercicio3 = 'Exercício 3';

var inputElement2 = document.querySelector('input[name=user2]');
var buttonElement2 = document.querySelector('#add2');

function renderLoading() {
    listElement.innerHTML = '';
    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');
    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
}

function renderError() {
    listElement.innerHTML = '';
    var textElement = document.createTextNode('Erro!');
    var errorElement = document.createElement('li');
    errorElement.style.color = '#f00';
    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
}

function listRepositories2() {
    var user = inputElement2.value;
    if (!user) return;
    renderLoading();
    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            renderRepositories(response.data);
            setTimeout(function () {
                console.log(exercicio3);
                console.log(response.data);
                console.log('\n');
            }, 6000);
        })
        .catch(function () {
            renderError();
            setTimeout(function () {
                console.log(exercicio3);
                console.warn('Erro!');
                console.log('\n');
            }, 6000);
        });
}

buttonElement2.onclick = listRepositories2;