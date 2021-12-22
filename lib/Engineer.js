const Employee = require("./Employee");

class Intern {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getGetHub(){
        return this.github;
    }
    getRole(){
        return 'Engineer';
    };
}