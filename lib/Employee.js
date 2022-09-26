// This is the base, so we should start here because everyone is an employee

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

module.exports = Employee;