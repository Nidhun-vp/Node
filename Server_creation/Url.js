const http=require('http')
//create a server
const server=http.createServer((request,response)=>{
    
  
  //check url of user
    if(request.url==='/'){ //empty
        response.write("<h1>Home page loaded...</h1>")
        response.end('Tis is home page')
    }else if(request.url==='/about'){
        response.write("<h1>About page loaded...</h1>")
        response.end('This is my about page')
    }else if(request.url==='/contact'){
       response.write("<h1>contact page loaded...</h1>")
        response.end('This is my contact page')
    }else{
        response.end("404,resource not found")
    }
    
   
   
})

//set up as server
server.listen(3000,'127.0.0.1',()=>{
    console.log("server lisening the port 3000...")
})