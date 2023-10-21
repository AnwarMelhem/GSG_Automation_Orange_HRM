class Sat_Session_task1 {
    private id: any;
    private empNumber: any;

    setEmpLoyeeId(id: string) {
        this.id = id;
    }
    getEmployeeId(): string {
        return this.id;
    }
    setEmpNumber(num: number) {
        this.empNumber = num;
    }
    getEmpNumber(): number {
        return this.empNumber;
    }
// elements UI
    elements = {
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        DropDawn:()=>cy.get('.oxd-userdropdown-tab'),
        logout:()=>cy.get(':nth-child(4) > .oxd-userdropdown-link')

    }
// lOGOUT fUNCTION
    Logout_Function() {
        this.elements.DropDawn().click();
        this.elements.logout().click();
    }
// Add
    addNewEmployee(firstName: string, middleName: string, LastName: string, employeeId: string): Cypress.Chainable<any> {

        return cy.wrap(undefined).then(() => {
            cy.api({
                method: "POST",
                url: "/web/index.php/api/v2/pim/employees",
                body: {
                    firstName: firstName,
                    middleName: middleName,
                    lastName: LastName,
                    empPicture: null,

                    employeeId: employeeId,


                },
            }).then((response) => {
                expect(response).property("status").to.equal(200);
                this.setEmpNumber(response.body?.data.empNumber);
            });
        });
    }
    createLoginDetails(username: string, password: string) {
       
        cy.api({
            method: "POST",
            url: "/web/index.php/api/v2/admin/users",
            body: {
                empNumber: this.getEmpNumber(),
                password: password,
                status: true,
                userRoleId: 2,
                username: username 
            },
        }).then((response) => {
            expect(response).property("status").to.equal(200);
        });
    }

}


export default Sat_Session_task1;