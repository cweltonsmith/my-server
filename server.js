const http = require('http');

const hostname = process.env.hostname || '0.0.0.0'
const port = 3002;

//The server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello...\n');
  res.write('Hello...\n');
  res.end("Hello I'm in your node server. :)\n");
});
     
//Listens
server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  console.log(`Server running at http://localhost:${port}/`)
});