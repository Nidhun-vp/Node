const fs=require('fs');
const data="\nthis is my content for file append operation";
fs.writeFile('./myFolder2/myFile.txt',data,{flag:'a'},(err)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log("appended successfully");
    }
})