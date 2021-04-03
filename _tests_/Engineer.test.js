const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    const engineer = new Engineer('Horatio', 11,'Horatio11@gmail.com', 'HoratioHub');
    describe("the getRole() method", () => {
        it("returns 'Engineer'", () => {
            let role = engineer.getRole();
            expect(role).toBe('Engineer');
        }
        )
    });
    describe("the getGit() method", () => {
        it("returns this.gitHub", () => {
            let git = engineer.getGit();
            expect(git).toBe('HoratioHub');
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