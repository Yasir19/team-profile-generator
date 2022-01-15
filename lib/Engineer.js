const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(github) {
    super(name, id, email, role);
    this.github = github;
  }
  gitHub() {
    return this.github;
  }
}
module.exports = Engineer;
