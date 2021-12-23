const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("create Employee", () => {
    it("make employee instance", () => {
      const employee = new Employee();

      expect(typeof employee).toBe("object");
    });
  });

  describe("Employee with Name", () => {
    it("Makes an Employee with a Name", () => {
      const employee = new Employee("Jake");

      expect(employee.name).toBe("Jake");
    });
  });

  describe("Employee with a Name and an ID", () => {
    it("Creates an Employee Instance with a Name and an ID", () => {
      const employee = new Employee("Jake", "1");

      expect(employee.id).toBe("1");
    });
  });

  describe("Employee with Name, ID, and Email", () => {
    it("Creates an Employee Instance with Name, ID, and Email", () => {
      const employee = new Employee("Jake", "1", "test@testemail.com");

      expect(employee.email).toBe("test@testemail.com");
    });
  });

  describe("Method to Get Name from Employee Object", () => {
    it("Returns the name of the Employee Object using the .getName() Method", () => {
      const test_employee = new Employee("Jacob", "1", "test@testsEmail.com");

      expect(test_employee.getName()).toBe("Jacob");
    });
  });

  describe("Method to Get ID from Employee Object", () => {
    it("Returns the ID of the Employee Object using the .getID() Method", () => {
      const test_employee = new Employee("Jacob", "1", "test@testsEmail.com");

      expect(test_employee.getID()).toBe("1");
    });
  });

  describe("Method to Get Email from Employee Object", () => {
    it("Returns the Email of the Employee Object using the .getEmail() Method", () => {
      const test_employee = new Employee("Jacob", "1", "test@testsEmail.com");

      expect(test_employee.getEmail()).toBe("test@testsEmail.com");
    });
  });

  describe("GetRole() Method Test", () => {
    it("Returns the Basic Role of Employee using the GetRole() Method", () => {
      const test_employee = new Employee("Jacob", "1", "test@testsEmail.com");

      expect(test_employee.getRole()).toBe("Employee");
    });
  });
});
