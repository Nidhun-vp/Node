const read=require('readline-sync');
const moment=require('moment')

mydob=read.question("enter your year:")
mycurrentYear=moment()
currentDAte=mycurrentYear.format('YYYY-MM-DD');
currentyear=mycurrentYear.format('YYYY');
console.log(currentDAte)
var age=currentyear-mydob
console.log(age);