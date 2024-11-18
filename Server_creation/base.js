const http=require('http')
//create a server
const server=http.createServer((request,response)=>{
    //response.end('Hello its ended.')//show text on black screen
    response.write('<h1>welcome to node app</h1><br><h3>demo</h3>')//write method show text on white screen 
    console.log("got a new request")
})

//set up as server
server.listen(3000,'127.0.0.1',()=>{
    console.log("server has started....")
})