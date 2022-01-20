const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const yourTeam = require('../src/page-template');
const{writeFile} = require('../utils/generate-site');
const fs = require('fs');
const path = require('path');

const output_dir = path.resolve(__dirname,"output");
const outputPath = path.join(output_dir,"team.html")
const teams = [];
const arrayId = [];

const createTeam = () =>{
    const managerInfo = () => {
        console.log('please enter tour team information');
        return inquirer.prompt([
            {
            type: 'input',
            name: 'managerName',
            message: 'Enter team manager name',
            validate: answer =>{
                if (!answer){
                    return 'manager name is required!';
                }else{
                    return true;
                }
            }
        },
            {
                type: 'input',
                name: 'managerId',
                message: 'Enter manager ID number',
                validate: answer => {
                    const input = answer.match(
                        /^[0-9]\d*$/
                    );
                    if(!input){
                        return 'ID accepts pnly numbers';
                    }else{
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter manager email',
                validate: answer =>{
                    input = answer.match(
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        );
                    if(input){
                        return true;
                    }else{
                        return 'The email address is not correct'
                        
                    }
                }
            },
            {
                type: 'input',
                name: 'office',
                message: 'enter the office number',
                validate: answer =>{
                    const input = answer.match(
                        /^[0-9]\d*$/
                    );
                    if (!input){
                        return 'office number must be onlu numbers';
                    }else{
                        return true;
                    }
                }

            }
        
    ])
    .then(answers => {
        const managers = new Manager(answers.managerName, answers.managerId, answers.email, answers.office);
        teams.push(managers);
        arrayId.push(answers.managerId);
        teamInfo();
    });
   
    };
   
    const teamInfo = () =>{
        return inquirer.prompt([
            {
            type: 'list',
            name:'teamMember',
            message: 'Select your team members',
            choices:['Engineer','Intern','I dont want to include any members'],
            }
        ]).then(teamMembers =>{
            switch(teamMembers.teamMember){
                case 'Engineer':
                    engineerInfo();
                    break;
                    case 'Intern':
                        internInfo();
                        break;
                        default:
                        buildTeam();
            }
        });
    }
    const engineerInfo = () =>{
        return inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Enter your Enginner name',
                validate: answer =>{
                    if(!answer){
                        return 'Engineer name is required';
                    }else{
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name : 'engineerId',
                message: 'Enter the engineer ID',
                validate: answer =>{
                    const input =answer.match(/^[0-9]\d*$/)
                    if(!input){
                        return 'ID must be only numbers!'
                        
                    }else{
                        return true;
                    }

                }

            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'enter the engineer email address',
                validate: answer =>{
                    const input = answer.match ( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                    if (!input){
                        return 'The email address is not correct';
                    }else{
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'enter github account'

            }
        ])
        .then(answers =>{
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
            teams.push(engineer)
            arrayId.push(answers.engineerid);
            teamInfo()
        })

    }
    const internInfo= () =>{
        return inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'Enter intern employee name',
                validate: answer =>{
                    if(!answer){
                       return'Inter employee name is required';
                    }else{
                        return true;
                    }
                }

            },
            {
                type: 'input',
                name: 'internId',
                message: 'Enter the Employee ID',
                validate: answer =>{
                    const input = answer.match(/^[0-9]\d*$/);
                    if(!input){
                        return 'Id must be only numbers';
                    }else{
                        return true;
                    }
                }

            },
            {
                type: 'input',
                name: 'interEmail',
                meassage: 'Enteer employee email',
                validate: answer =>{
                    const input = answer.match( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                    if (!input){
                       return 'Please enter valid email';
                    }else{
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'schoolName',
                validate: answer =>{
                    if(!answer){
                        return 'school name is required'
                    }else{
                        return true;
                    }
                }
            }
        ])
        .then(internData =>{
            const intern = new Intern(internData.internName, internData.internId, internData.internEmail, internData.school);
            teams.push(intern);
            arrayId.push(answers.internId);
            teamInfo();
        })

    }

// function buildTeam(){
//     if(!fs.existsSync(output_dir)){
//         fs.mkdirSync(output_dir)
//     }
//     fs.writeFileSync(outputPath, yourTeam(teams), "utf-8")
// }
// managerInfo();
// }
// createTeam();
managerInfo().then(teams =>{
    return yourTeam(teams)
})
.then(teams => {
    return writeFile(teams);
})
}
createTeam();