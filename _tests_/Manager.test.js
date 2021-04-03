const Manager = require("../lib/Manager");

describe("Manager class", () => {
    const manager = new Manager('Dave', 9,'Dave09@gmail.com', 3224);
    describe("the getRole() method", () => {
        it("returns 'Manager'", () => {
            let role = manager.getRole();
            expect(role).toBe('Manager');
        })
    });
    describe("the getOfficeNumber() method", () => {
        it("returns this.officeNumber", () => {
            let officeNumber = manager.getOfficeNumber();
            expect(officeNumber).toBe(3224);
        }
        )
    });
    describe("the getIcon() method", () => {
        it("returns the appropriate HTML icon code", () => {
            let iconCode = manager.getIcon();
            expect(iconCode).toBe('<i class="fa fa-gavel" aria-hidden="true"></i>');
        }
        )
    });

})