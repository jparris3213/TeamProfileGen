const Employee = require("./Employee");

class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber;
    }

    getRole(){
        return 'Manager';
    };
}