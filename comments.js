// Create web server
// Create a web server that listens on port 3000 and serves the comments.js file.

// Solution
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/javascript' });

  fs.createReadStream('./comments.js').pipe(res);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});