const http = require('http');
const fs = require('fs')

const hostname = '0.0.0.0';
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})

server.listen(process.env.PORT || 3000, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
