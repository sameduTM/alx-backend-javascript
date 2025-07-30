const http = require('http');
const fs = require('fs');
const { URL } = require('url');

const port = 1245;

const app = http.createServer((req, res) => {
  const { method, url } = req;
  const parsedUrl = new URL(url, `http://${req.headers.host}`);
  const { pathname } = parsedUrl;

  if (method === 'GET' && pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ALX!');
  } else if (method === 'GET' && pathname === '/students') {
    fs.readFile('database.csv', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Cannot load the database');
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter((line) => line.trim());
      const NUMBER_OF_STUDENTS = students.length;

      const fieldCounts = {};
      const studentCounts = {};

      for (const student of students) {
        const parts = student.split(',');
        const firstname = parts[0];
        const field = parts[3];

        if (!fieldCounts[field]) {
          fieldCounts[field] = 0;
          studentCounts[field] = [];
        }
        fieldCounts[field] += 1;
        studentCounts[field].push(firstname);
      }

      let result = 'This is the list of our students\n';
      result += `Number of students: ${NUMBER_OF_STUDENTS}\n`;

      for (const key of Object.keys(fieldCounts)) {
        result += `Number of students in ${key}: ${fieldCounts[key]}. List: ${studentCounts[key].join(', ')}\n`;
      }

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result.trim()); // .trim() to avoid extra newline at the end
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

app.listen(port, () => {
  console.log('...');
});

module.exports = app;
