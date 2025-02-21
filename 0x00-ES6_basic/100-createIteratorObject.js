export default function createIteratorObject(report) {
  const allEmps = report.allEmployees;
  const allObjs = Object.values(allEmps);

  const newList = [];
  for (const i of allObjs) {
    for (const idx of i) {
      newList.push(idx);
    }
  }

  return newList;
}
