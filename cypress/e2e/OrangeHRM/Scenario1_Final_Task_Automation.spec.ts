// Scenario #1 -> Final Task Automation

import Scenario1_Final_Task_Automation from "../../support/PageObjectes/Scenario1_Final_Task_Automation.spec";
import LoginPage from "../PageObjectes/LoginPage";

const loginObj: LoginPage = new LoginPage();
const Scenario1_Final_Task_AutomationObj: Scenario1_Final_Task_Automation =
  new Scenario1_Final_Task_Automation();

describe("Scenario1_Final_Task_Automation", () => {
  beforeEach(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    // Login by Admin in OrangeHRM system
    loginObj.login("Admin", "admin123");
    // Fixture Command
    cy.fixture("employeeinfo").as("EmpInfo");
    cy.get("@EmpInfo").then((data: any) => {
      // Add New Employee
      Scenario1_Final_Task_AutomationObj.addNewEmployee(
        data.FirstName,
        data.MiddleName,
        data.LastName,
        data.employeeId
      ).then(() => {
        // Create Login Detalies for employee
        Scenario1_Final_Task_AutomationObj.createLoginDetails(
          data.UserName,
          data.Password
        );
        // Add number of entitlement for employee
        Scenario1_Final_Task_AutomationObj.AddLeaveEntitlement();
        // Admin Logout from OrangeHRM System
        Scenario1_Final_Task_AutomationObj.Logout_Function();
      });
    });
  });

  it("Employee Apply Leave and Admin Approve it", () => {
    // Employee Login in OrangeHRM system
    cy.get("@EmpInfo").then((data: any) => {
      loginObj.login(data.UserName, data.Password);
    });
    // Employee Applay Leave
    Scenario1_Final_Task_AutomationObj.ApplayLeave().then(() => {
      // Employee Logout from OrangeHRM System
      Scenario1_Final_Task_AutomationObj.Logout_Function();
      // Admin Login in OrangeHRM system
      loginObj.login("Admin", "admin123");
      // Admin Approve emplyee leave
      Scenario1_Final_Task_AutomationObj.ApproveLeaveByAdmin();
      // Admin Logout from OrangeHRM System
      Scenario1_Final_Task_AutomationObj.Logout_Function();
    });
    // Employee Logout from OrangeHRM System
    cy.get("@EmpInfo").then((data: any) => {
      loginObj.login(data.UserName, data.Password);
    });
    // Employee clicks on Leave tab in dashboard
    Scenario1_Final_Task_AutomationObj.Clicks_To_Leave_Tab();
    // Assertion for leave title
    Scenario1_Final_Task_AutomationObj.Assertion_Leave();
    // Assertion for status column
    Scenario1_Final_Task_AutomationObj.Assertion_Status_Coulmn();
  });
});
