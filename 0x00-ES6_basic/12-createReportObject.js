export default function createReportObject(employeesList) {
  const keys = Object.keys(employeesList);
  const values = Object.values(employeesList);

  const allEmployees = {};

  for (const idx of keys) {
    const i = keys.indexOf(idx);
    allEmployees[keys[i]] = values[i];
  }

  function getNumberOfDepartments(allEmployees) {
    return Object.keys(allEmployees).length;
  }

  return { allEmployees, getNumberOfDepartments };
}
