console.log('Aula 05 - Excluindo ToDos');

function renderToDos() {
    listElement.innerHTML = '';

    for (var todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deleteToDo(' + pos + ')');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderToDos();

function deleteToDo(pos) {
    todos.splice(pos, 1);
    renderToDos();
}

console.log('\n');