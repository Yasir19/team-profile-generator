const Manager = require('../lib/Manager')

it('should get office number by the getOffice() method',()=>{
    const office = 2;
    const officeNumber = new Manager('yasir', 2748,'email@email.com','Engineer',office)
    expect(officeNumber.getOffice()).toEqual(office);
})