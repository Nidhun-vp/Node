const fs=require('fs');//filesystem module
fs.mkdir('./myFolder',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Folder created successfully')
    }
})//folder creation.