const Intern = require('../lib/Intern')

it('should get the school name by the getSchool() method',()=>{
    const school = 'the Matrix';
    const schoolName = new Intern('yasir', 2748,'email@email.com','Engineer',school)
    expect(schoolName.getSchool()).toEqual(school);
})