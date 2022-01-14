const Employee = require("../lib/Employee");

it("create employee object with name, id number, email, and role", () => {
  const employee = new Employee('Josh',2748,'email@email.com','employee');
//   expect(typeof employee).toBe("object");
  expect(employee.name).toEqual('josh');
  expect(employee.id).toEqual(2748);
  expect(employee.email).toEqual('email@email.com');
  expect(employee.role).toEqual('employee');
});
// it('should set the employee name by the constractor function',() =>{
//     const name = 'Josh';
//     const employee = new Employee(name);
//     expect(employee.name).toEqual(name);

// })
// it('should set the employee id by the constructor function', () =>{
//     const id = 2748;
//     const employee = new Employee('Josh',id);
//     expect(employee.id).toEqual(id);
// })
// it('should set the employee email by the constructre function',() =>{
//     const email ='email@email.com'
//     const employee = new Employee('Josh',2748,email);
//     expect(employee.email).toEqual(email);
// })
// it('should set the employee role by the constructre function',() =>{
//     const role ='Employee'
//     const employee = new Employee('Josh',2748,'email@email.com',role);
//     expect(employee.role).toEqual(role);
// })
