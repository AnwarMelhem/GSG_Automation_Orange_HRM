// Scenario #2 -> Final Automation Task
import Read_XLSX_File  from "../../support/PageObjectes/Read_Xslx_File.spec";
import LoginPage from "../PageObjectes/LoginPage";
import * as XLSX from 'xlsx';
import { writeFileSync } from 'fs';
import * as path from 'path';
const loginObj: LoginPage = new LoginPage();
const Read_XLSX_FileObj: Read_XLSX_File  =new Read_XLSX_File ();


describe("Scenario #2 -> Final Automation Task", () => {
  beforeEach(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    // Login by Admin in OrangeHRM system
    loginObj.login("Admin", "admin123");
  });

  it("Edit vacancy By adding a File", () => {
    // Add Vacancy Using API
    Read_XLSX_FileObj.addVacancy().then((ResponseData) => {
    // Edit the New vacancy 
      cy.visit(
        `/web/index.php/recruitment/addJobVacancy/${ResponseData.body.data.id}`
      );
    // Clicks to Add Button
    Read_XLSX_FileObj.Clicks_Add_Button();
    //Upload File
    Read_XLSX_FileObj.Attach_File('cypress/fixtures/CypressDawnload.xlsx');
    // Assertion 
    Read_XLSX_FileObj.Assertion_Name_File('CypressDawnload.xlsx');
    // Clicks to Save Button
    Read_XLSX_FileObj.Clicks_To_Save_Buutton();
    // Assertion
    Read_XLSX_FileObj.Assertion_Name_File_Column('CypressDawnload.xlsx')
    //Dawnload
    Read_XLSX_FileObj.Clicks_To_Dawnload_Button()
    cy.log('**************** Dawnload Successfully ****************************')
    //cy.wait(1500);
    const xlsxPath: string='cypress/downloads/CypressDawnload.xlsx';
    const jsonName:string = path.basename(xlsxPath).replace('xlsx','json')
    cy.task('convertXlsxToJson',xlsxPath)
    cy.fixture(jsonName).as('userInfo')
    cy.log(jsonName)
    cy.get('@userInfo').should('have.length',1).then((userInfo:any)=>{
        expect(userInfo[0]['TestData3']).to.equal("QA3")
    })
   

    });
  });
});