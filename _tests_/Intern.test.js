const Intern = require("../lib/Intern");

describe("Intern class", () => {
    const intern = new Intern('Bri', 14,'bri14@gmail.com', 'The Ohio State University');
    describe("the getRole() method", () => {
        it("returns 'Intern'", () => {
            let role = intern.getRole();
            expect(role).toBe('Intern');
        })
    });
    describe("the getSchooled() method", () => {
        it("returns this.school", () => {
            let school = intern.getSchooled();
            expect(school).toBe('The Ohio State University');
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