const Employee = require ("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, gitHub){
        super(name,id,email);
        this.gitHub = gitHub;
    }

    getRole() {
        return "Engineer";
    }

    getGit() {
        return this.gitHub;
    }

    getIcon() {
        return '<i class="fa fa-flask" aria-hidden="true"></i>'
        }
}

module.exports = Engineer;