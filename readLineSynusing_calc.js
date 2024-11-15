const calculator=require('./operations')
const read=require('readline-sync');

const n1=Number(read.question('enter first number'));
const n2=Number(read.question('enter first number'));
console.log('first letter:',n1);
console.log('second Number:',n2);

console.log(calculator.add(n1,n2));
console.log(calculator.sub(n1,n2));
console.log(calculator.mul(n1,n2));
console.log(calculator.div(n1,n2));
console.log(calculator)