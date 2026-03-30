

const http = require('http')

const server = http.createServer((req, res) => {
    res.end('SUNNU');
    console.log(req)
})

server.listen(3000)

console.log(server)