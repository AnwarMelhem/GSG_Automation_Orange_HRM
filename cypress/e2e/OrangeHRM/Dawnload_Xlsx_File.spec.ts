import Dawnload_Xlsx_File from '../../support/PageObjectes/Dawnload_Xlsx_File.spec'
import LoginPage from "../PageObjectes/LoginPage"
const loginObj: LoginPage = new LoginPage();
const Dawnload_Xlsx_FileOBJ: Dawnload_Xlsx_File = new Dawnload_Xlsx_File();
// Saturady 21/10/2023 session task 2 
// Create Employee with Login Details then Login by Login Deatils INFO
describe('ADD Canditate And Upload Resume File', () => {
    beforeEach(function () {

        cy.visit('https://opensource-demo.orangehrmlive.com')
        // Login by Admin Dashboard 
        loginObj.login("Admin", "admin123");
       
       

    })

    it('ADD Canditate And Upload Resume File', () => {
        Dawnload_Xlsx_FileOBJ.Clicks_To_Recruitment_Tab();
        Dawnload_Xlsx_FileOBJ.Assertion_Recruitment();
        Dawnload_Xlsx_FileOBJ.Clicks_To_Add_Canditate();
        Dawnload_Xlsx_FileOBJ.Fill_CanditateInfo();
        Dawnload_Xlsx_FileOBJ.Attach_File('cypress/fixtures/qq.pdf');
        Dawnload_Xlsx_FileOBJ.Assetion_Name_File('qq.pdf');
        Dawnload_Xlsx_FileOBJ.Clicks_To_Save_Button();
        cy.log('************************ Dawnloaded Successfully ************************')
        Dawnload_Xlsx_FileOBJ.Clicks_To_Dawnload_Button();

        // const xlsxPath: string='cypress/downloads/CypressDawnload.xlsx';
        // cy.task('convertXlsxToJson',xlsxPath)
      
    })
})













