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
    // describe("the getEmail() method", () => {
    //     it("returns this.email", () => {
    //         let email = employee.getEmail();
    //         expect(email).toBe('maxson.green@gmail.com');
    //     }
    //     )
    // });

})