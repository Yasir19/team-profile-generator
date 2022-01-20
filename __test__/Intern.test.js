const Intern = require('../lib/Intern')

it('should get the school name by the getSchool() method',()=>{
    const school = 'the Matrix';
    const schoolName = new Intern('yasir', 2748,'email@email.com',school)
    expect(schoolName.getSchool()).toEqual(school);
})
it('should return Intern by using getRole() method',()=>{
    const role = "Intern";
    const Int = new Intern ('yasir', 2748, 'email@email.com',role)
    expect(Int.getRole()).toBe(role)
})