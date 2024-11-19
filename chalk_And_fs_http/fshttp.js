const http=require('http');
const fs=require('fs');
const { UTF8 } = require('mysql/lib/protocol/constants/charsets');
const server=http.createServer((req,res)=>{
     if(req.url==='/'){
        fs.readFile("home.html",'utf8',(err,data)=>{
            if(err){
                res.end('internal server error');
            }else
            {
                res.writeHead(200,{'content-type':'text/html'});
                res.end(data)
            }
        });
     }



});
server.listen(8000,()=>{
    console.log('server lisening at port 8000')
})