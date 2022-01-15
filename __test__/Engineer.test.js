const Engineer = require('../lib/Engineer')

it('should get GitHub user name by the gitHub() method',()=>{
    const github ="GitHubUser";
    const eng = new Engineer(github)
    expect(eng.gitHub()).toEqual(github);
})