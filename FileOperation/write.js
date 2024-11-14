const fs=require('fs');
const data="this is my content for file write operation";
fs.mkdir('./myfolder2',{recursive:true},(error)=>{
    if(error){
        console.log(err);
        return;
    }
    fs.writeFile('./myfolder2/myfile.txt',data,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("writtern to the file successfully")
        }
    });
});