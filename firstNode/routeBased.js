import fs from 'fs';
import http from 'http';

const server = http.createServer((req, res) => {

    // console.log(`Here is the Website URL :- ${req.url}`)
    console.log('Server Started')
    const URL = req.url;
    fs.appendFile('Log.txt', `[URL] ${req.url}\n[Time] ${Date().toLocaleString()}`, (err) => {
        if (err) console.log(err);
    })
    switch (URL) {
        case '/':
            res.end('Home Page')
            break
        case '/about':
            res.end('About Page')
            break
        case '/contact':
            res.end('Contact Page')
            break
    }
})

server.listen(1114) 