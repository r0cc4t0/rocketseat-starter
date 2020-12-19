import axios from 'axios';

export default class GitHub {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            setTimeout(() => {
                console.log(response.data);
                console.log('\n');
            }, 1000);
        } catch (error) {
            setTimeout(() => { console.warn('O repositório não existe.'); }, 500);
        }
    }
}