import Recruitment from  "../../support/PageObjectes/Recruitment"
const RecruitmentObj: Recruitment = new Recruitment();
import LoginPage from "../../support/PageObjectes/LoginPage"
const loginObj: LoginPage = new LoginPage();
let totalCount:number;
describe('Employees Table Data Validation When Add Employee Using API', () => {
    beforeEach(function () {

        cy.visit('https://opensource-demo.orangehrmlive.com')
        loginObj.login("Admin", "admin123");
        

    })

    it('Recruitment: Verify the number of rows', () => {
        RecruitmentObj.Clicks_To_PIM_Tab();
        RecruitmentObj.Assertion_Recruitment();
        cy.intercept(
            {
              method: 'GET',
              url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC',
            },
          ).as('GetEndpoint')
          cy.wait('@GetEndpoint').then((interception) => {
   
           totalCount = interception.response?.body.meta.total;
            console.log(totalCount);
      
          });
          RecruitmentObj.Table(totalCount)

    })
})


// cy.intercept('GET', '/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC').as('apiRequest');
//     cy.wait('@apiRequest').then((interception) => {
//         console.log(interception)