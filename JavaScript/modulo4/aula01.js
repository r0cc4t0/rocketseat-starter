var aula01 = 'Aula 01 - Requisições AJAX';

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/diego3g');
xhr.send(null);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        setTimeout(function () {
            console.log(aula01);
            console.log(JSON.parse(xhr.responseText));
            console.log('\n');
        }, 1000);
    }
};