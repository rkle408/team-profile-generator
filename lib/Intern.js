const Employee = require('./Employee');

//Interns have school, Engineer and Manager do not
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }
}

// Construct the object:
// const intern = new Intern("Rose", 1, "rkle408@gmail.com", "UCSD")

module.exports = Intern;