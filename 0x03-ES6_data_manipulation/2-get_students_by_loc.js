/**
 * Function to get a list of students who are located in a specific city.
 *
 * @param {Array} students - The array of student objects.
 * @param {string} city - The city to filter students by.
 * @returns {Array} - The array of students located in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students) || typeof city !== 'string') {
    return [];
  }

  return students.filter((student) => student.location === city);
}
