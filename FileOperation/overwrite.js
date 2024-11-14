const fs=require('fs');
const data="\nthis is my content for file overwritted operation";
fs.writeFile('./myfile.txt',data,{flag:'w'},(err)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log("over writted successfully");
    }
})