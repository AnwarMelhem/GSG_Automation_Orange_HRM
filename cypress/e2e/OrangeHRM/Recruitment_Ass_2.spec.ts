import Recruitment_ASS2_API from '../../support/Helper/OrangeHRM_API/Recruitment_ASS2_API'
import Recruitment from '../../support/PageObjectes/Reqruitment_Ass_2';
import LoginPage from "../PageObjectes/LoginPage"
const loginObj: LoginPage = new LoginPage();
const RecruitmentAPIOBJ: Recruitment_ASS2_API = new Recruitment_ASS2_API();
const RecruitmentObj:Recruitment= new Recruitment();
let savedCandidateID:any;
describe('Flow', () => {
    beforeEach(function () {

        cy.visit('https://opensource-demo.orangehrmlive.com')
        loginObj.login("Admin", "admin123");

        RecruitmentAPIOBJ.addUserViaAPI().then((candidateID) => {
            savedCandidateID = candidateID
            RecruitmentAPIOBJ.shortlistCandidateViaAPI(savedCandidateID);
            cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${savedCandidateID}`)
            
        }).catch((error) => {
                console.error("Error:", error);
        });
        
      

    })
    it('Reschedule Interview For Shortlisted Candidate', () => {
        RecruitmentObj.Clicks_To_Reschedule_Interview_Button();
        RecruitmentObj.Assertion_For_Reschedule_Interview();
        RecruitmentObj.Fill_Interview_Information();
        RecruitmentObj.Clicks_To_Save_Button(); 
        RecruitmentObj.Assertion_For_Status();
    })

});