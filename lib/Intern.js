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
        return '<i class="bi bi-briefcase-fill"></i>'
    }
}

module.exports = Intern;