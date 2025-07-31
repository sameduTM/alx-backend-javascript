const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const path = process.argv[2];

function getOutput(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const chunk = data.split('\n').filter((line) => line.trim());
    const students = chunk.slice(1);
    const NUMBER_OF_STUDENTS = students.length;

    const studentCounts = {};
    const fieldCounts = {};

    for (const student of students) {
      const [firstname, , , field] = student.split(',');

      if (!fieldCounts[field]) {
        fieldCounts[field] = 0;
        studentCounts[field] = [];
      }
      fieldCounts[field] += 1;
      studentCounts[field].push(firstname);
    }

    let listStudents = `Number of students: ${NUMBER_OF_STUDENTS}\n`;
    for (const key of Object.keys(fieldCounts)) {
      listStudents += `Number of students in ${key}: ${fieldCounts[key]}. List: ${studentCounts[key].join(', ')}\n`;
    }
    return listStudents.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});
app.get('/students', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send(`This is the list of our students\n${getOutput(path)}`);
});

app.listen(port, () => {
  console.log('...');
});
