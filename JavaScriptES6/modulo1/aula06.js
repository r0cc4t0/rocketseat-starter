console.log('Aula 06 - Operações em Array');

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const map = array.map(function (item, index) {
    return item * index;
});
console.log(map);

const reduce = array.reduce(function (total, next) {
    return total + next;
});
console.log(reduce);

const filter = array.filter(function (item) {
    return item % 2 === 0;
});
console.log(filter);

const find = array.find(function (item) {
    return item === 4;
});
console.log(find);

console.log('\n');