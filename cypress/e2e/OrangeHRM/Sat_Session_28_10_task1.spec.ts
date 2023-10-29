// Scenario #1 -> Final Task Automation

import Sat_Session_28_10_task1 from "../../support/PageObjectes/Sat_Session_28_10_task1.spec"
import LoginPage from "../PageObjectes/LoginPage";

const loginObj: LoginPage = new LoginPage();
const Sat_Session_28_10_task1Obj: Sat_Session_28_10_task1 =
  new Sat_Session_28_10_task1();

describe("Scenario1_Final_Task_Automation", () => {
  beforeEach(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    // Login by Admin in OrangeHRM system
    loginObj.login("Admin", "admin123");
    // Fixture Command
    cy.fixture("employeeinfo").as("EmpInfo");
    cy.get("@EmpInfo").then((data: any) => {
      // Add New Employee
      Sat_Session_28_10_task1Obj.addNewEmployee(
        data.FirstName,
        data.MiddleName,
        data.LastName,
        data.employeeId
      ).then(() => {
        // Create Login Detalies for employee
        Sat_Session_28_10_task1Obj.createLoginDetails(
          data.UserName,
          data.Password
        );
      
        Sat_Session_28_10_task1Obj.Logout_Function();
      });
    });
  });

  it("Employee Apply Leave and Admin Approve it", () => {
    // Employee Login in OrangeHRM system
    cy.get("@EmpInfo").then((data: any) => {
      loginObj.login(data.UserName, data.Password);
    });
    cy.visit("/web/index.php/time/viewMyTimesheet")
    Sat_Session_28_10_task1Obj.GetTimeSheetID().then((response)=>{
        Sat_Session_28_10_task1Obj.TimeSheet1(response.body.data.id)
        Sat_Session_28_10_task1Obj.SubmitTimeSheet(response.body.data.id)
        })
        Sat_Session_28_10_task1Obj.Logout_Function();      
        loginObj.login("Admin", "admin123");
        Sat_Session_28_10_task1Obj.Clicks_To_Time_Tab();
        cy.get("@EmpInfo").then((data: any) => {
        Sat_Session_28_10_task1Obj.View_Employee(data.FirstName,data.MiddleName)})
        cy.wait(2000)
        Sat_Session_28_10_task1Obj.Select_Option()
        Sat_Session_28_10_task1Obj.Clicks_To_View()
        Sat_Session_28_10_task1Obj.Assertion_Status()
    })
  });
