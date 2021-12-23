class Employee {
    //Initial Constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    //Methods
    getName() {
        return this.name;
    };
    getID() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };

    //This is overwritten by extended classes
    getRole() {
        return 'Employee';
    };
}

module.exports = Employee;

