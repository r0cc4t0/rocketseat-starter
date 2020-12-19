import executaPromise from './aula01';
import Api from './aula02';
import umPorSegundo from './exercicio1';
import getUserFromGitHub from './exercicio2';
import GitHub from './exercicio3';
import buscaUsuario from './exercicio4';

setTimeout(() => {
    console.log('Aula 01 - Async/Await');
    executaPromise();
}, 0);

setTimeout(() => {
    console.log('Aula 02 - Configurando o Axios');
    Api.getUserInfo('diego3g');
    Api.getUserInfo('agpwefskyqm');
}, 4000);

setTimeout(() => {
    console.log('Exercício 1');
    umPorSegundo();
}, 6000);

setTimeout(() => {
    console.log('Exercício 2');
    getUserFromGitHub('diego3g');
    getUserFromGitHub('diego3g124123');
}, 10000);

setTimeout(() => {
    console.log('Exercício 3');
    GitHub.getRepositories('Rocketseat/unform');
    GitHub.getRepositories('Rocketseat/dslkvmskv');
}, 12000);

setTimeout(() => {
    console.log('Exercício 4');
    buscaUsuario('diego3g');
}, 14000);