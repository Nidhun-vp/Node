const calculator=require('./operations')
const read=require('readline-sync');
console.log("Enter your choice ? 1.sum 2.subtraction 3.product 4.division");

var choice=Number(read.question('enter your choice number'));
var x=Number(read.question('enter your 1st number'));
var y=Number(read.question('enter your 2nd number'));
switch(choice){
    case 1:console.log(calculator.add(x,y));
             break;
    case 2:console.log(calculator.sub(x,y));
             break;
    case 3:console.log(calculator.mul(x,y));
             break;
    case 4:console.log(calculator.div(x,y));
            break; 
    case 5:console.log("exiting...");
           break;                
    default:console.log("invalid choice");
             break;
    
    

}