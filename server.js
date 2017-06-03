// content of index.js
const http = require('http')
const port = 3000
const fs = require('fs');

/*
const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}



const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

var fs = require('fs');
*/
http.createServer(function(req, res){
    fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(port);
console.log(`Server is listening on Port ${port}`);
