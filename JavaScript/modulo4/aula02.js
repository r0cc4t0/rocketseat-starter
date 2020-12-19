var aula02 = 'Aula 02 - Promises';

var minhaPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/diego3g');
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição!');
                }
            }
        }
    });
};

minhaPromise()
    .then(function (response) {
        setTimeout(function () {
            console.log(aula02);
            console.log(response);
            console.log('\n');
        }, 2000);
    })
    .catch(function (error) {
        setTimeout(function () {
            console.log(aula02);
            console.warn(error);
            console.log('\n');
        }, 2000);
    });