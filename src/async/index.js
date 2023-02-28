const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 2000)
            : reject(new Error('Test Error'))
    });
}

const anotherFunction = async () => {
    console.log('Before');
    const something = await fnAsync();
    console.log(something);
    console.log('Hello World');
}

console.log('Before 1');
anotherFunction();
console.log('After 1');