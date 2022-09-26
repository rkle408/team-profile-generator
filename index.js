// Test!
// console.log('Hello there!');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

console.log("Welcome to team generator!")

const teamMembers = [];

function appMenu(){
    inquirer // Ask questions to build a team
    .prompt([{
        type: 'input',
        name: 'managerName',
        message: 'What is the team manager name?',
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the team manager ID?',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the team manager email?',
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'What is the team manager office number?',
    },
    ]).then((answers) => {
        const manager = new Manager(
            answers.managerName,
            answers.managerID,
            answers.managerEmail,
            answers.managerOfficeNumber,
        )
        console.log(manager);
        createTeam();
    })
}

function createTeam(){
    inquirer.prompt([{
        type: 'list',
        name: 'teamChoice',
        message: 'Which type of team member?',
        choices: [
            "Engineer",
            "Intern",
            "Manager",
        ]
    }]).then((userChoice) => {
        if(userChoice.teamChoice === "Engineer"){

        } else if (userChoice.teamChoice === "Intern"){

        }
    })
}

appMenu();

// Need to build function to render HTML of each employee profile