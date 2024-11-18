//npm install moment
const moment=require('moment')

const currentdatetime=moment();
console.log('currrent Date and Time:',currentdatetime.format('YY/MM/DD HH:mm:ss'));

const futureDate=moment();
console.log('current Date: and Time',futureDate.format('YYYY-MM-DD'));

const pastday=moment().add(7,'days');
console.log('Date 7 days from now:',pastday.format('YYYY-MM-DD'));

//custom date time formatting
console.log(moment().format('dddd,MMMM Do YYYY,h:mm:ss:a'));
console.log(moment().format('MMM Do YY'));
console.log(moment().format('[Today is] dddd'));

const date1=moment('2024-11-18');
const date2=moment('2024-11-20');
 
console.log('Is date1 before date2?',date1.isBefore(date2));//true
console.log('Is date1 before date2?',date1.isAfter(date2));//true
console.log('Is date1 before date2?',date1.isSame(date2));//true
