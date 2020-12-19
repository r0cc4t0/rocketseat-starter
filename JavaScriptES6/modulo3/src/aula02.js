import axios from 'axios';

export default class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            setTimeout(() => {
                console.log(response);
                console.log('\n');
            }, 1000);
        } catch (error) {
            setTimeout(() => { console.warn('Erro na API!'); }, 500);
        }
    }
}