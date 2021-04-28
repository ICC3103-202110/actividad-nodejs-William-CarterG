
function fibonacci(n) {
    return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2);
 }
 

const readline = require('readline').createInterface({
    input : process.stdin,
    output: process.stdout
}) ;
readline.question('Ingresa un número: ', number => {
    console.log(`F(${number}) = ${fibonacci(number)}`);
    readline.close();
});
