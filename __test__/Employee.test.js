const Employee = require("../lib/Employee");

it("should create employee object with name, id number, email, and role", () => {
  const employee = new Employee("Josh", 2748, "email@email.com", "employee");

  expect(employee.name).toEqual("Josh");
  expect(employee.id).toEqual(2748);
  expect(employee.email).toEqual("email@email.com");
  expect(employee.role).toEqual("employee");
});
it("should get the name from getName method", () => {
  const name = "Josh";
  const employee = new Employee(name);
  expect(employee.getName()).toEqual(name);
});
it("should get the employee id by the gitId method", () => {
  const id = 2748;
  const employee = new Employee("Josh", id);
  expect(employee.getId()).toEqual(id);
});
it("should get the employee email by the getEmail method", () => {
  const email = "email@email.com";
  const employee = new Employee("Josh", 2748, email);
  expect(employee.getEmail()).toEqual(email);
});
it("should get the employee role by the getRole method", () => {
  const role = "Employee";
  const employee = new Employee("Josh", 2748, "email@email.com", role);
  expect(employee.getRole()).toEqual(role);
});
