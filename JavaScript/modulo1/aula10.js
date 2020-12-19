var aula10 = 'Aula 10 - Intervalo e Timeout';

function exibeAlgo() {
    console.log('setTimeout()');
}
function exibeAlgo2() {
    console.log('setInterval()');
}

setTimeout(function () {
    console.log(aula10);
}, 1000);
setTimeout(exibeAlgo, 2000);
setInterval(exibeAlgo2, 3000);
setTimeout(exibeAlgo, 7000);