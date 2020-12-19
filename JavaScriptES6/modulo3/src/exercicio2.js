import axios from 'axios';

export default async function getUserFromGitHub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        setTimeout(() => {
            console.log(response.data);
            console.log('\n');
        }, 1000);
    } catch (error) {
        setTimeout(() => { console.warn('O usuário não existe.'); }, 500);
    }
}