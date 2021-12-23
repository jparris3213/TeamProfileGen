const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Create Manager (Employee + Experience + liiiitle bit of Ego", () => {
    it("Creates a Manager Object", () => {
      const manager = new Manager();
      expect(typeof manager).toBe("object");
    });
  });

  describe("Create a Named Managere", () => {
    it("Creates a Named Manager", () => {
      const manager = new Manager(
        "Joey",
        "3",
        "Joey_Manager@testsemail.com",
        "2"
      );
      expect(manager.name).toBe("Joey");
    });
  });

  describe("Create a Named Manager with ID", () => {
    it("Creates a Named Manager", () => {
      const manager = new Manager(
        "Joey",
        "3",
        "Joey_Manager@testsemail.com",
        "2"
      );
      expect(manager.id).toBe("3");
    });
  });

  describe("Create a Named Manager with Email", () => {
    it("Creates a Named Manager", () => {
      const manager = new Manager(
        "Joey",
        "3",
        "Joey_Manager@testsemail.com",
        "2"
      );
      expect(manager.email).toBe("Joey_Manager@testsemail.com");
    });
  });

  describe("Create a Named Manager with Office Number", () => {
    it("Creates a Named Manager", () => {
      const manager = new Manager(
        "Joey",
        "3",
        "Joey_Manager@testsemail.com",
        "2"
      );
      expect(manager.officeNumber).toBe("2");
    });
  });

  //Method Tests
  describe("Use getRole() to retrieve overwritten Role", () => {
    it("Uses getRole() Method to retrieve Manager", () => {
      const manager = new Manager(
        "Joey",
        "3",
        "Joey_Manager@testsemail.com",
        "2"
      );
      expect(manager.getRole()).toBe("Manager");
    });
  });
});
