const readline=require('readline');
const read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
read.question('please enter your name',(name)=>{
    console.log(`hello,${name}!`);
    read.close();
});