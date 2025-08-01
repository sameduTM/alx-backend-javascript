import readDatabase from '../utils';

const filepath = 'database.csv';

class StudentController {
  static getAllStudents(request, response) {
    const header = 'This is the list of our students\n';
    readDatabase(filepath).then((data) => {
      let outputString = header;
      for (const key of Object.keys(data)) {
        if (key) {
          outputString += `Number of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}\n`;
        }
      }
      response.status(200).send(outputString.trim());
    }).catch(() => {
      response.status(500).send(`${header}Cannot load the database`);
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { path } = request;
    const major = path.split('/')[2];
    const allMajors = ['CS', 'SWE'];
    if (!allMajors.includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(filepath).then((data) => {
      const outputString = `List: ${data[major].join(', ')}`;
      response.status(200).send(outputString);
    }).catch(() => response.status(500).send('Cannot load the database'));
  }
}

export default StudentController;
