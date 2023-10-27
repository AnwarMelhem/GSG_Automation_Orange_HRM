// Scenario #2 -> Final Automation Task
import Scenario2_Final_Task_Automation from "../../support/PageObjectes/Scenario2_Final_Task_Automation.spec";
import LoginPage from "../PageObjectes/LoginPage";

const loginObj: LoginPage = new LoginPage();
const Scenario2_Final_Task_AutomationObj: Scenario2_Final_Task_Automation =new Scenario2_Final_Task_Automation();


describe("Scenario #2 -> Final Automation Task", () => {
  beforeEach(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    // Login by Admin in OrangeHRM system
    loginObj.login("Admin", "admin123");
  });

  it("Edit vacancy By adding a File", () => {
    // Add Vacancy Using API
    Scenario2_Final_Task_AutomationObj.addVacancy().then((ResponseData) => {
    // Edit the New vacancy 
      cy.visit(
        `/web/index.php/recruitment/addJobVacancy/${ResponseData.body.data.id}`
      );
    // Clicks to Add Button
      Scenario2_Final_Task_AutomationObj.Clicks_Add_Button();
    //Upload File
      Scenario2_Final_Task_AutomationObj.Attach_File('cypress/fixtures/qq.pdf');
    // Assertion 
      Scenario2_Final_Task_AutomationObj.Assertion_Name_File('qq.pdf');
    // Clicks to Save Button
      Scenario2_Final_Task_AutomationObj.Clicks_To_Save_Buutton();
    // Assertion
      Scenario2_Final_Task_AutomationObj.Assertion_Name_File_Column('qq.pdf')
    });
  });
});
