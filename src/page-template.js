const createTeams = (teams) => {
  const createManager = (manager) => {
    return `
        <div class = "employee-card">
        <div class = "card-header">
        <h2 class = "card-title">${manager.getName()}</h2>
        <h3 class = "card-title"><i class="fas fa-user-tie"></i> ${manager.getRole()}</h3>
        </div>
        <div class = "card-body">
        <ul class = "team-list">
        <li class = "list-item">ID:${manager.getId()}</li>
        <li class = "list-item">Email:<a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></li>
        <li class = "list-item">Office number: ${manager.getOffice()}</li>
        </ul>
        </div>
        </div>
        `;
  };
  const createEngineer = (engineer) => {
    return `
        <div class = "employee-card">
        <div class = "card-header">
        <h2 class = "card-title"> ${engineer.getName()}</h2>
        <h3 class = "card-title"><i class="fas fa-project-diagram"></i> ${engineer.getRole()}</h3>
        </div>
        <div class = "card-body">
        <ul class = "team-list">
        <li class = "list-item">ID: ${engineer.getId()}</li>
        <li class = "list-item">Email:<a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()}</a></li>
        <li class = "list-item">GitHub account:<a href="https://github.com/${engineer.gitHub()}"> ${engineer.gitHub()}</a></li>
        </ul>
        </div>
        </div>
        `;
  };
  const createIntern = (internData) => {
    return `
        <div class = "employee-card">
        <div class = "card-header">
        <h2 class = "card-title"> ${internData.getName()}</h2>
        <h3 class = "card-title"><i class="fas fa-user-graduate"></i> ${internData.getRole()}</h3>
        </div>
        <div class = "card-body">
        <ul class ="team-list">
        <li class ="list-item">ID:${internData.getId()}</li>
        <li class = "list-item">Email:<a href="mailto:${internData.getEmail()}"> ${internData.getEmail()}</a></li>
        <li class = "list-item">School name: ${internData.getSchool()}</li>
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
      .map((intern) => createIntern(intern))
      .join("")
  );
  return pageInfo.join("");
};
module.exports = (teams) => {
  return `

  <!DOCTYPE html>
  <html lang='en'>
  <head>
  <meta charset="UTF-8" \/>
  <meta name="viewport" content="width=device=width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
  <link rel="stylesheet" href="style.css">
  <title>My Team</title>
  </head>
  <body>
  <div class='container-fluid'>
  <div class='row'>
  <div class='col-12 jumbotron mb-3 title'>
  <h1> My Team </h1>
  </div>
  </div>
  </div>
  <div class='container'>
  <div class ='row'>
  <div class = 'employee-style col-12 d-flex justify-cintent-center'>
  ${createTeams(teams)}
  </div>
  <div>
  </div>
  </body>
  </html>
  `;
};
