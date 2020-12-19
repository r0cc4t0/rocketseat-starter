const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK'); }, 1000);
});

const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log('\n');
};

export default executaPromise;