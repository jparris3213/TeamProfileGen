const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Create Intern (Employee - Pay + Experience^2)", () => {
    it("Creates Intern Object", () => {
      const intern = new Intern();
      expect(typeof intern).toBe("object");
    });
  });

  describe(" Tests .name property of Intern Object", () => {
    it("Uses .name property to retrieve Object name", () => {
      const intern = new Intern(
        "Benito",
        "4",
        "Benito_Intern@testsemail.com",
        "UNCG"
      );
      expect(intern.name).toBe("Benito");
    });
  });

  describe("Create Named Intern", () => {
    it("Uses .id property to retrieve Object id", () => {
      const intern = new Intern(
        "Benito",
        "4",
        "Benito_Intern@testsemail.com",
        "UNCG"
      );
      expect(intern.id).toBe("4");
    });
  });

  describe("Create Named Intern", () => {
    it("Uses .email property to retrieve Object email", () => {
      const intern = new Intern(
        "Benito",
        "4",
        "Benito_Intern@testsemail.com",
        "UNCG"
      );
      expect(intern.email).toBe("Benito_Intern@testsemail.com");
    });
  });

  describe("Create Named Intern", () => {
    it("Uses .school property to retrieve Object school", () => {
      const intern = new Intern(
        "Benito",
        "4",
        "Benito_Intern@testsemail.com",
        "UNCG"
      );
      expect(intern.school).toBe("UNCG");
    });
  });

  //Method Tests
  describe(".getSchool() Method Test", () => {
    it("Uses the .getSchool() method", () => {
      const intern = new Intern(
        "Benito",
        "4",
        "Benito_Intern@testsemail.com",
        "UNCG"
      );
      expect(intern.getSchool()).toBe("UNCG");
    });
  });

  describe("Use the getRole() method to retrieve the overwritten role of Intern", () => {
    it("Uses the .getSchool() method", () => {
      const intern = new Intern(
        "Benito",
        "4",
        "Benito_Intern@testsemail.com",
        "UNCG"
      );
      expect(intern.getRole()).toBe("Intern");
    });
  });
});
