const Employee = require("../lib/Employee");

describe("Employee class", () => {
    const employee = new Employee('Max', 12,'maxson.green@gmail.com');
    describe("the getName() method", () => {
        it("returns this.name", () => {
            let name = employee.getName();
            expect(name).toBe('Max');
        }
        )
    });
    describe("the getID() method", () => {
        it("returns this.ID", () => {
            let ID = employee.getId();
            expect(ID).toBe(12);
        }
        )
    });
    describe("the getEmail() method", () => {
        it("returns this.email", () => {
            let email = employee.getEmail();
            expect(email).toBe('maxson.green@gmail.com');
        }
        )
    });
    describe("the getRole() method", () => {
        it("returns 'Employee'", () => {
            let role = employee.getRole();
            expect(role).toBe('Employee');
        }
        )
    });
})