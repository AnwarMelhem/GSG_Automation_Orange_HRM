/// <reference types="Cypress" />
import LoginPage from "../PageObjectes/LoginPage"
const loginObj:LoginPage= new LoginPage();

describe('lOGIN Home Page', () => {
  beforeEach(function(){
 cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.visit('https://opensource-demo.orangehrmlive.com')
  })

  it('Valid Login', () => {
    loginObj.login("Admin","admin123")

  })
  
})
// describe('Forget Password', () => {
//   beforeEach(function(){
//  cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
//     cy.visit('https://opensource-demo.orangehrmlive.com')
//   })

//   it('Forget password', () => {
//     loginObj.forgetPass('ADMIN');
//   })
  
  
// })