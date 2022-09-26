const Employee = require('./Employee');

// An engineer has a github, a manager and intern do not!
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
}

module.exports = Engineer;