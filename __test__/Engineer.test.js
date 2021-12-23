const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Create Engineer", () => {
    it("Creates an Engineer Object", () => {
      const engineer = new Engineer();
      expect(typeof engineer).toBe("object");
    });
  });

  describe("Named Engineer", () => {
    it("Creates a Named Engineer", () => {
      const engineer = new Engineer("John", "2", "John@testsemail.com");
      expect(engineer.name).toBe("John");
    });
  });

  describe("Named and ID'd Engineer", () => {
    it("Creates a Named Engineer", () => {
      const engineer = new Engineer("John", "2", "John@testsemail.com");
      expect(engineer.id).toBe("2");
    });
  });

  describe("Named, ID'd and Email Engineer", () => {
    it("Creates a Named Engineer", () => {
      const engineer = new Engineer("John", "2", "John@testsemail.com");
      expect(engineer.email).toBe("John@testsemail.com");
    });
  });

  describe("Engineers Github", () => {
    it("Creates a Named Engineer with a github username", () => {
      const engineer = new Engineer(
        "John",
        "2",
        "John@testsemail.com",
        "jdparri3213"
      );
      expect(engineer.github).toBe("jdparri3213");
    });
  });
  //Method Tests
  describe("getGitHub Method Test", () => {
    it("Uses the GetGitHub Method to retrieve the github username", () => {
      const engineer = new Engineer(
        "John",
        "2",
        "John@testsemail.com",
        "jdparri3213"
      );
      expect(engineer.getGitHub()).toBe("jdparri3213");
    });
  });

  describe("getRole() Override Method Test", () => {
    it("Uses .getRole() Method to retrieve overridden Role", () => {
      const engineer = new Engineer(
        "John",
        "2",
        "John@testsemail.com",
        "jdparri3213"
      );
      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});
