const Employee = require ("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school){
        super(name,id,email);
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchooled() {
        return this.school;
    }

    getIcon() {
        return '<i class="fas fa-crown"></i>'
    }
}

module.exports = Intern;