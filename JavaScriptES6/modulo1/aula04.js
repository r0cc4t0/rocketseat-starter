console.log('Aula 04 - Classes');

class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class ToDoList extends List {
    constructor() {
        super();
    }
    mostraMensagem() {
        console.log('Mensagem de Teste');
    }
}

class Matematica {
    static operacao(a, b) {
        return Math.pow(a, b);
    }
}
console.log(Matematica.operacao(2, 6));

const MinhaLista = new ToDoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo ToDo');
    MinhaLista.mostraMensagem();
};

console.log('\n');