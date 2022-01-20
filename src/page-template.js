const createTeams = (teams) => {
  const createManager = (manager) => {
    return `
        <div class = 'employee-card'>
        <div class = 'card-header'>
        <h2 class = 'title'>${manager.getName()}<h2>
        <h3 class = 'title><${manager.getRole()}<h3>
        </div>
        <div class = 'card-body'>
        <ul class ='team-list'>
        <li class ='list-item'>ID:${manager.getId()}</li>
        <li class = 'list-item>Email:<a href='mailto:${manager.getEmail()}'>${manager.getEmail()}</a></li>
        <li class = 'list-item>Office number:${manager.getOffice()}</li>
        </ul>
        </div>
        </div>
        `;
  };
  const createEngineer = (engineer) => {
    return `
        <div class = 'employee-card'>
        <div class = 'card-header'>
        <h2 class = 'title'>${engineer.getName()}<h2>
        <h3 class = 'title><${engineer.getRole()}<h3>
        </div>
        <div class = 'card-body'>
        <ul class ='team-list'>
        <li class ='list-item'>ID:${engineer.getId()}</li>
        <li class = 'list-item>Email:<a href='mailto:${engineer.getEmail()}'>${engineer.getEmail()}</a></li>
        <li class = 'list-item>GitHub account:<a href='https://github.com/${engineer.gitHub()}'>${engineer.gitHub()}</li>
        </ul>
        </div>
        </div>
        `;
  };
  const createIntern = (intern) => {
    return `
        <div class = 'employee-card'>
        <div class = 'card-header'>
        <h2 class = 'title'>${intern.getName()}<h2>
        <h3 class = 'title><${intern.getRole()}<h3>
        </div>
        <div class = 'card-body'>
        <ul class ='team-list'>
        <li class ='list-item'>ID:${intern.getId()}</li>
        <li class = 'list-item>Email:<a href='mailto:${intern.getEmail()}'>${intern.getEmail()}</a></li>
        <li class = 'list-item>School name:${intern.getSchool()}</li>
        </ul>
        </div>
        </div>
        `;
  };
  const pageInfo = [];
  pageInfo.push(
    teams
      .filter((teams) => teams.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );
  pageInfo.push(
    teams
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
      .join("")
  );
  pageInfo.push(
    teams
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createIntern(intern)).join("")
  );
  return pageInfo.join("");
};
module.exports = (teams) => {
  return `
        <!DOCTYPE html>
        <html lang='en'>

        <body>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device=width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>

        <body>
        <div >
        <div>
        <div>
        <h1 > My Team</h1>
        </div>
        </div>
        </div>
        <div>
        <div>
        <div>
        ${createTeams(teams)}
        </div>
        <div>
        </div>
        </body>
        </html>
        `;
};
