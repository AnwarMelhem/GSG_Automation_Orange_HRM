import Sat_Session_task2 from '../../support/PageObjectes/Sat_Session_21-10_task2'
import LoginPage from "../PageObjectes/LoginPage"
const loginObj: LoginPage = new LoginPage();
const Sat_Session_task2Obj: Sat_Session_task2 = new Sat_Session_task2();
// Saturady 21/10/2023 session task 2 
// Create Employee with Login Details then Login by Login Deatils INFO
describe('ADD Canditate And Upload Resume File', () => {
    beforeEach(function () {

        cy.visit('https://opensource-demo.orangehrmlive.com')
        // Login by Admin Dashboard 
        loginObj.login("Admin", "admin123");
       
       

    })

    it('ADD Canditate And Upload Resume File', () => {
        Sat_Session_task2Obj.Clicks_To_Recruitment_Tab();
        Sat_Session_task2Obj.Assertion_Recruitment();
        Sat_Session_task2Obj.Clicks_To_Add_Canditate();
        Sat_Session_task2Obj.Fill_CanditateInfo();
        Sat_Session_task2Obj.Attach_File('cypress/fixtures/qq.pdf');
        Sat_Session_task2Obj.Assetion_Name_File('qq.pdf');
      
    })
})













