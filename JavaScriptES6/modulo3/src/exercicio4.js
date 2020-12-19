import axios from 'axios';

const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        setTimeout(() => {
            console.log(response.data);
            console.log('\n');
        }, 1000);
    } catch (error) {
        setTimeout(() => { console.warn('O usuário não existe.'); }, 500);
    }
};

export default buscaUsuario;