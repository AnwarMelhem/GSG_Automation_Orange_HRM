
import Selector from "../PageObjectes/Selector"
import LoginTestCases from "../PageObjectes/LoginTestCasesPage"
import LoginPage from "../PageObjectes/LoginPage"
const loginObj:LoginPage= new LoginPage();
const SelectorObj:Selector=new Selector();

describe('Selector Test', () => {
    before(function () {
        cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.fixture('LoginTestCases').as('LoginInfo')
        loginObj.login("Admin","admin123")
        cy.wait(5000);
    })
    // it('Get Quick Lunch', () => {
      
    //     // cy.contains('p','Quick Launch').parents().then(z=>{
    //     //     console.log(z);
    //     // })
    //     SelectorObj.getQuickLunchCard().then(z=>{
    //         console.log(z)
    //     })
    //     SelectorObj.getQuickLunchCard2()
    //   })

      it('get Time at work',()=>{
        SelectorObj.getTimeAtWork()
        
      })

   
  

})
  
