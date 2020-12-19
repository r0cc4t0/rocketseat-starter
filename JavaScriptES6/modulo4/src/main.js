import api from './api';

class App {

    constructor() {
        console.log('Aula 01 - Estrutura e Estilos');
        console.log('\n');
        this.repositories = [];
        this.formElement = document.querySelector('#repo-form');
        this.inputElement = document.querySelector('input[name=repository]');
        this.listElement = document.querySelector('#repo-list');
        this.registerHandlers();
    }

    registerHandlers() {
        this.formElement.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingElement = document.createElement('span');
            let loadingText = document.createTextNode('Carregando...');
            loadingElement.setAttribute('id', 'loading');
            loadingElement.appendChild(loadingText);
            this.formElement.appendChild(loadingElement);
        } else {
            document.querySelector('#loading').remove();
        }
    }

    async addRepository(event) {
        console.log('Aula 02 - Adicionar Repositórios');
        event.preventDefault();
        const repoInput = this.inputElement.value;
        if (repoInput.length === 0) return;
        this.setLoading();

        try {
            console.log('Aula 04 - Buscando da API');
            const response = await api.get(`/repos/${repoInput}`);
            console.log(response);
            const { name, description, html_url, owner: { avatar_url } } = response.data;
            this.repositories.push({ name, description, html_url, avatar_url });
            this.inputElement.value = '';
            this.render();
        }
        catch (error) {
            console.log('Aula 05 - Loading e Error');
            console.warn('O repositório não existe!');
            console.log('\n');
            alert('O repositório não existe!');
        }

        this.setLoading(false);
    }

    render() {
        console.log('Aula 03 - Render em Tela');
        console.log('\n');
        this.listElement.innerHTML = '';

        this.repositories.forEach(repo => {
            let imageElement = document.createElement('img');
            imageElement.setAttribute('src', repo.avatar_url);

            let titleElement = document.createElement('strong');
            let titleText = document.createTextNode(repo.name);
            titleElement.appendChild(titleText);

            let descriptionElement = document.createElement('p');
            let descriptionText = document.createTextNode(repo.description);
            descriptionElement.appendChild(descriptionText);

            let linkElement = document.createElement('a');
            let linkText = document.createTextNode('Acessar');
            linkElement.setAttribute('target', '_blank');
            linkElement.setAttribute('href', repo.html_url);
            linkElement.appendChild(linkText);

            let itemElement = document.createElement('li');
            itemElement.appendChild(imageElement);
            itemElement.appendChild(titleElement);
            itemElement.appendChild(descriptionElement);
            itemElement.appendChild(linkElement);

            this.listElement.appendChild(itemElement);
        });
    }

}

new App();