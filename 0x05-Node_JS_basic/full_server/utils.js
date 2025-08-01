import { readFile } from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error(err));
        return;
      }
      const chunk = data.split('\n');
      const students = chunk.slice(1).filter((line) => line.trim());

      const studentCounts = {};
      for (const student of students) {
        const firstname = student.split(',')[0];
        const field = student.split(',')[3];

        if (!studentCounts[field]) {
          studentCounts[field] = [];
        }
        studentCounts[field].push(firstname);
      }
      resolve(studentCounts);
    });
  });
}

export default readDatabase;
