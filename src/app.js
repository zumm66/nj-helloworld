require('dotenv').config();
// console.log(process.env.PORT);
const http = require('http');
const student = require('./student');
const server = http.createServer((req,res) => {
    if(req.url == "/") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>This is Home Page<h1>');
    };

    if(req.url == "/student") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`This is student you ask for ${student.getSetudentName()}`);
    };
});

server.listen(process.env.PORT || 5444, () => {
    console.log(`Server is running at ${process.env.PORT || 5444}`);
});