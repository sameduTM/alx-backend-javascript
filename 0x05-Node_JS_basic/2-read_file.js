const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    // Remove empty lines and split
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const students = lines.slice(1); // skip header

    const fieldCounts = {};
    const fieldNames = {};

    for (const line of students) {
      const parts = line.split(',');

      const firstname = parts[0].trim();
      const field = parts[3].trim();

      if (!fieldCounts[field]) {
        fieldCounts[field] = 0;
        fieldNames[field] = [];
      }

      fieldCounts[field] += 1;
      fieldNames[field].push(firstname);
    }

    const total = Object.values(fieldCounts).reduce((sum, count) => sum + count, 0);
    console.log(`Number of students: ${total}`);

    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const names = fieldNames[field].join(', ');
        console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${names}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
