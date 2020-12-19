console.log('Aula 06 - Salvando no Storage');

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

function addToDo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderToDos();
    saveToStorage();
}

buttonElement.onclick = addToDo;

function deleteToDo(pos) {
    todos.splice(pos, 1);
    renderToDos();
    saveToStorage();
}

console.log('\n');