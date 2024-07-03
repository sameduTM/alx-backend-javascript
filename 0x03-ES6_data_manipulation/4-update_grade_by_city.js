/**
 * Function to update the grades of students in a specific city.
 *
 * @param {Array} students - The array of student objects.
 * @param {string} city - The city to filter students by.
 * @param {Array} newGrades - The array of new grade objects.
 * @returns {Array} - The array of students in the specified city with updated grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
