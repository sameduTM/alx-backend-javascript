/**
 * Function to get a list of student IDs from an array of student objects.
 *
 * @param {Array} students - The array of student objects.
 * @returns {Array} - The array of student IDs or an empty array if the input is not an array.
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}
