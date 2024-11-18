const http=require('http')
//create a server
const server=http.createServer((request,response)=>{
    
  
  //check url of user
    if(request.url==='/'){ //empty
        response.writeHead(200,{'Content-type':'text/html'})
        response.end('<h1>Home</h1><p>This is home page</p>')
    }else if(request.url==='/about'){
        response.writeHead(200,{'Content-type':'text/html'})
        response.end('<h1>About</h1><p>This is about page</p>')
    }else if(request.url==='/contact'){
        response.writeHead(200,{'Content-type':'text/html'})
        response.end('<h1>contact</h1><p>This is contact page</p>')
    }else{
        response.writeHead(404,{'Content-type':'text/html'})
        response.end('<h1>404</h1><p>Resource Not Found</p>')
    }
    
   
   
})

//set up as server
server.listen(3000,'127.0.0.1',()=>{
    console.log("server lisening the port 3000...")
})