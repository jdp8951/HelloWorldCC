// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from Node.js on AWS\n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
