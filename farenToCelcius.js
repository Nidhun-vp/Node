const read=require('readline-sync');
const farenheit=Number(read.question('enter farenheit value :'));

const celcius=(farenheit-32)*5/2;
console.log('celcius=:',celcius);
