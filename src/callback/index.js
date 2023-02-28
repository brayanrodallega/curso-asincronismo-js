function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(6, 2, sum));


// setTimeout
setTimeout(function() {
    console.log('Hello World');
}, 3000);

function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 3000, 'Brayan');
