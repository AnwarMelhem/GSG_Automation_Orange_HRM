/// <reference types="Cypress" />
import LoginPage from "../PageObjectes/LoginPage"
const loginObj:LoginPage= new LoginPage();

describe('Forget Password', () => {
    beforeEach(function(){
   cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.visit('https://opensource-demo.orangehrmlive.com')
    })
  
    it('Forget password', () => {
      loginObj.forgetPass('ADMIN');
    })
    
    
  })
