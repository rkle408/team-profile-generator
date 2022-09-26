// This is the base, so we should start here because everyone is an employee

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // These get values and returns them aka getters
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }
}

// const employee1 = new Employee("Rosa", 1, "rkle408@gmali.com");
// console.log(employee1.getName());

module.exports = Employee;