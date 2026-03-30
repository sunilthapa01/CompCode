import  http  from 'http';


const server = http.createServer((req, res) => {
    res.end("Building HTTP Server in NodeJS !!")
    // console.log(res);
    console.log("Server has Started !")
    
})

server.listen(1114)