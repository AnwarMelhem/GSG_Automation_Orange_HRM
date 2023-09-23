/// <reference types="Cypress" />
import LoginPage from "../PageObjectes/LoginPage"
const loginObj: LoginPage = new LoginPage();
let ResponseID: any
describe('API Exercises', () => {
    beforeEach(function () {
        cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.visit('https://opensource-demo.orangehrmlive.com')
        loginObj.login("Admin", "admin123")

    })


    it('Verify Location API Response', () => {
        cy.request('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations')
            .then((Response) => {
                expect(Response).property('status').to.equal(200);
            })

    })
    it('Verify Login subunit API Response', () => {
        cy.request('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit')
            .then((Response) => {
                expect(Response).property('status').to.equal(200);
            })

    })
    it('Verify Login messages API Response', () => {
        cy.request('https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages')
            .then((Response) => {
                expect(Response).property('status').to.equal(200);
            })

    })
    it('Verify Login messages API shortcuts', () => {
        cy.request('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts')
            .then((Response) => {
                expect(Response).property('status').to.equal(200);
            })

    })
    function generateRandomString(length: number) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charactersLength);
            result += characters.charAt(randomIndex);
        }

        return result;
    }



    it.only('Create User', () => {
        cy.request({
            method: 'POST',
            url: '/web/index.php/api/v2/admin/users',
            body: {
                username: "AnwarMelhem.v1 " + generateRandomString(10),
                password: "password1",
                status: true,
                userRoleId: 1,
                empNumber: 53
            }
        }).then((Response) => {
            expect(Response).property('status').to.equal(200);
            ResponseID = Response.body.data.id;

        })

    })

    afterEach(() => {

        cy.request({
            method: 'DELETE',
            url: '/web/index.php/api/v2/admin/users',
            body: {
                ids: [ResponseID]
            }
        }).then((Response) => {
            expect(Response).property('status').to.equal(200);
        })
    });

})