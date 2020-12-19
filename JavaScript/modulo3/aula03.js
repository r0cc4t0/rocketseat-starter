console.log('Aula 03 - Renderizando ToDos');

function renderToDos() {
    listElement.innerHTML = '';
    for (var todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderToDos();

console.log('\n');