const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    let data = fs.readFileSync('./files/welcome.txt');

    console.log(data);
    res.end(data.toString());
  } else {
    res.writeHead(500);
    res.end('not found');
  }
});

server.listen(3100, () => {
  console.log('listen from server');
});
