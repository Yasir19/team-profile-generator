const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

// const createTeam = () =>{
    const managerInfo = () => {
        console.log('please enter tour team information');
        return inquirer.prompt([
            {
            type: 'input',
            name: 'managerName',
            message: 'Enter team manager name',
            validate: answer =>{
                if (!answer){
                    return console.log('manager name is required!');
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
                        return console.log('ID accepts pnly numbers')
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
                        console.log('Please enter a valid email');
                        
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
                        return console.log('office number must be onlu numbers');
                    }else{
                        return true;
                    }
                }

            }
        
    ]);
   
    };
    managerInfo().then(answers => console.log(answers));
// }
