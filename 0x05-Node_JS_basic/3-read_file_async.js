const fs = require('fs').promises;

async function countStudents (path) {
  try {
    const chunk = await fs.readFile(path, { encoding: 'utf8' });

    const lines = chunk.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);
    const NUMBER_OF_STUDENTS = students.length;
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

    const fieldCounts = {};
    const studentCounts = {};

    for (const student of students) {
      const firstname = student.split(',')[0];
      const field = student.split(',')[3];

      if (!fieldCounts[field]) {
        fieldCounts[field] = 0;
        studentCounts[field] = [];
      }
      fieldCounts[field] += 1;
      studentCounts[field].push(firstname);
    }
    for (const key of Object.keys(fieldCounts)) {
      if (key) {
        console.log(`Number of students in ${key}: ${fieldCounts[key]}. List: ${studentCounts[key].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
