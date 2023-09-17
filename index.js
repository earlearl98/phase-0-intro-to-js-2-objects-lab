// Write your solution in this file!
const employee = {
  name: 'Earl Earl',
  streetAddress: '91 Ngong Lane',
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

