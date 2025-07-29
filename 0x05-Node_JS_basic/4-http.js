const { createServer } = require('node:http');

const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader = ('Content-Type', 'text/plain');
  res.end('Hello ALX!');
});

app.listen(port);
