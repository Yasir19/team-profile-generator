const Manager = require('../lib/Manager')

it('should get office number by the getOffice() method',()=>{
    const office = 2;
    const officeNumber = new Manager('yasir', 2748,'email@email.com',office)
    expect(officeNumber.getOffice()).toEqual(office);
})
it('should return Manager by using getRole() method',()=>{
    const role = "Manager";
    const manager = new Manager ('yasir', 2748, 'email@email.com',role)
    expect(manager.getRole()).toBe(role)
})