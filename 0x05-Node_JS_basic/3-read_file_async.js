const fs = require('node:fs/promises');

async function countStudents (path) {
  try {
    const chunk = await fs.readFile(path, { encoding: 'utf8' });

    const students = chunk.split('\n').slice(1);
    console.log(`Number of students: ${students.length}`);

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
        console.log(`Number of students in ${key}: ${fieldCounts[key]}. List: ${studentCounts[key]}`);
      }
    }
  } catch (err) {
    console.error('Cannot load the database:');
  }
}

module.exports = countStudents;
