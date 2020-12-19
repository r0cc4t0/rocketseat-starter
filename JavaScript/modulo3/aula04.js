console.log('Aula 04 - Criando ToDos');

function addToDo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderToDos();
}

buttonElement.onclick = addToDo;

console.log('\n');