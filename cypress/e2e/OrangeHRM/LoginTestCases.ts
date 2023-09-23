
import LoginTestCases from "../PageObjectes/LoginTestCasesPage"
const LoginTestCasesObj: LoginTestCases = new LoginTestCases();

describe('lOGIN Home Page', () => {
    beforeEach(function () {
        cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.fixture('LoginTestCases').as('LoginInfo')
    })


    it("Valid User Login and valid Username valid pass", () => {
        cy.get('@LoginInfo').then((infoLogin: any) => {
            LoginTestCasesObj.LoginTestCasesValidCase(infoLogin[0].Username, infoLogin[0].Password)
        })
    });
    it("Invalid Username and Valid Password", () => {
        cy.get('@LoginInfo').then((infoLogin: any) => {
            LoginTestCasesObj.LoginTestCasesInvalidUserNameAndPassword(infoLogin[1].Username, infoLogin[1].Password)
        })
    });
    it("Valid Username and Invalid Password", () => {
        cy.get('@LoginInfo').then((infoLogin: any) => {
            LoginTestCasesObj.LoginTestCasesInvalidUserNameAndPassword(infoLogin[2].Username, infoLogin[2].Password)
        })
    });
    it("Invalid Username and Invalid Password", () => {
        cy.get('@LoginInfo').then((infoLogin: any) => {
            LoginTestCasesObj.LoginTestCasesInvalidUserNameAndPassword(infoLogin[3].Username, infoLogin[3].Password)
        })
    });
    it("Empty Username and Empty Password", () => {
        cy.get('@LoginInfo').then((infoLogin: any) => {
            LoginTestCasesObj.LoginTestCasesEmptyUserNameAndPassword()
        })
    });
    it("Empty Username", () => {
        cy.get('@LoginInfo').then((infoLogin: any) => {
            LoginTestCasesObj.LoginTestCasesEmptyUserName( infoLogin[4].Password)
        })
    });
    it("Empty Password", () => {
        cy.get('@LoginInfo').then((infoLogin: any) => {
            LoginTestCasesObj.LoginTestCasesEmptyPassword(infoLogin[5].Username)
        })
    });

    it("Check Password Type", () => {
        LoginTestCasesObj.CheckPassword()
    });

})
  
