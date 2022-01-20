const Engineer = require('../lib/Engineer')

it('should get GitHub user name by the gitHub() method',()=>{
    const github ="GitHubUser";
    const eng = new Engineer('yasir', 2748,'email@email.com',github)
    expect(eng.gitHub()).toBe(github);
})

it('should return Engineer by using getRole() method',()=>{
    const role = "Engineer";
    const eng = new Engineer ('yasir', 2748, 'email@email.com','GitHubUser')
    expect(eng.getRole()).toBe(role)
})