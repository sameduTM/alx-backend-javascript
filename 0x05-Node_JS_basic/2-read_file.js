const fs = require('node:fs');

function countStudents (path) {
  try {
    const chunk = fs.readFileSync(path, 'utf8');
    const students = chunk.split('\n').slice(1).filter((value) => value.trim());

    const NUMBER_OF_STUDENTS = students.length;

    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

    const fieldCounts = {};
    const studentCounts = {};

    for (const student of students) {
      const field = student.split(',')[3].trim();
      const firstname = student.split(',')[0].trim();

      if (!fieldCounts[field]) {
        fieldCounts[field] = 0;
        studentCounts[field] = [];
      }
      fieldCounts[field] += 1;
      studentCounts[field].push(firstname);
    }
    for (const key in fieldCounts) {
      if (key) {
        console.log(`Number of students in ${key}: ${fieldCounts[key]}. List: ${studentCounts[key]}`);
      }
    }
  } catch (err) {
    console.log('Cannot load the database');
  }
}

countStudents('database.csv');
