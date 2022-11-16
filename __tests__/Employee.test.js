const Employee = require("../lib/Employee");

test("Create new employee.", () => {
  const employeeInstance = new Employee();
  expect(typeof employeeInstance).toBe("object");
});

test("Name test.", () => {
  const name = "Kyle";
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
});

test("ID test.", () => {
  const id = 2;
  const employeeInstance = new Employee("Kyle", id);
  expect(employeeInstance.id).toBe(id);
});

test("Email test.", () => {
  const email = "kyky19@me.com";
  const employeeInstance = new Employee("Kyle", 2, email);
  expect(employeeInstance.email).toBe(email);
});

test("getName method.", () => {
  const testName = "Kyle";
  const employeeInstance = new Employee(testName);
  expect(employeeInstance.getName()).toBe(testName);
});

test("getID method.", () => {
  const testID = 2;
  const employeeInstance = new Employee("Kyle", testID);
  expect(employeeInstance.getId()).toBe(testID);
});

test("getEmail method.", () => {
  const testEmail = "kyky19@me.com";
  const employeeInstance = new Employee("Kyle", 2, testEmail);
  expect(employeeInstance.getEmail()).toBe(testEmail);
});

test("Testing role.", () => {
  const returnValue = "Employee";
  const employeeInstance = new Employee("Kyle", 2, "kyky19@me.com");
  expect(employeeInstance.getRole()).toBe(returnValue);
});
