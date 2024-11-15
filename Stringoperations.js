const calculator=require('./strLib')
const read=require('readline-sync');

const s1=read.question('enter first String:');
const s2=read.question('enter second string:');

console.log(calculator.concat(s1,s2));
console.log(calculator.lower(s1,s2));
console.log(calculator.upper(s1,s2));
console.log(calculator.reverse(s1,s2));
