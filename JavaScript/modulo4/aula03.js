var aula03 = 'Aula 03 - Utilizando o Axios';

axios.get('https://api.github.com/users/diego3g')
    .then(function (response) {
        setTimeout(function () {
            console.log(aula03);
            console.log(response);
            console.log('\n');
        }, 3000);
    })
    .catch(function (error) {
        setTimeout(function () {
            console.log(aula03);
            console.warn(error);
            console.log('\n');
        }, 3000);
    });