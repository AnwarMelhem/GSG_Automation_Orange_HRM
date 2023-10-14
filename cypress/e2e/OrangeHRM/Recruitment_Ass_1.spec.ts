import Recruitment from "../../support/PageObjectes/Recruitment_Ass_1"
const RecruitmentObj: Recruitment = new Recruitment();
import LoginPage from "../../support/PageObjectes/LoginPage"
const loginObj: LoginPage = new LoginPage();
let totalCountFromInterceptionAPI: number;
describe('Employees Table Data Validation When Add Employee Using API', () => {
    beforeEach(function () {

        cy.visit('https://opensource-demo.orangehrmlive.com')
        loginObj.login("Admin", "admin123");


    })

    it('Recruitment: Verify the number of rows', () => {
        RecruitmentObj.Clicks_To_Recruitment_Tab();

        RecruitmentObj.Assertion_Recruitment();

        cy.intercept(
            {
                method: 'GET',
                url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC',
            },
        ).as('GetEndpoint')
        cy.wait('@GetEndpoint').then((interception) => {

            totalCountFromInterceptionAPI = interception.response?.body.meta.total;
            console.log(totalCountFromInterceptionAPI);

        });


        RecruitmentObj.Table_Rows_Validation(totalCountFromInterceptionAPI)

    })
})


