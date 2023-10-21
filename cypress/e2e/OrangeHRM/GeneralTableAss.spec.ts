
import Recruitment_ASS2_API from '../../support/Helper/OrangeHRM_API/Recruitment_ASS2_API'
import Recruitment from '../../support/PageObjectes/Reqruitment_Ass_2';
import LoginPage from "../PageObjectes/LoginPage"
const loginObj: LoginPage = new LoginPage();
const RecruitmentAPIOBJ: Recruitment_ASS2_API = new Recruitment_ASS2_API();
const RecruitmentObj:Recruitment= new Recruitment();
let savedCandidateID:any;

import GeneralTableAss from "../../support/PageObjectes/GeneralTableAss.spec"
import Common_Table_Fun from "../../support/Helper/GenericFunctun/GeneralTableAss"
const GeneralTableObj:GeneralTableAss = new GeneralTableAss();
const CommonTableObj:Common_Table_Fun= new Common_Table_Fun();
describe('Flow', () => {
    beforeEach(function () {

        cy.visit('https://opensource-demo.orangehrmlive.com')
        loginObj.login("Admin", "admin123");

        // RecruitmentAPIOBJ.addUserViaAPI().then((candidateID) => {
        //     savedCandidateID = candidateID
        // }).catch((error) => {
        //         console.error("Error:", error);
        // });
        
      

    })
    it('Flow', () => {
        GeneralTableObj.Clicks_To_PIM_Recruitment(); 

        let candidateTableData = [
            {
              Vacancy: "Associate IT Manager",
              Candidate: "anwar1 anwar1 anwar1",
              "Hiring Manager": "Peter Mac Anderson",
              "Date of Application": "2023-10-25",
              Status: "Application Initiated",
            }
          ];

         CommonTableObj.checkRows(".oxd-table-row",candidateTableData)
        
     
    })

});