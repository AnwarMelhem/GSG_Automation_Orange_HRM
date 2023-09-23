/// <reference types="Cypress" />
import  addEmployee from "../PageObjectes/AddEmployee"
const loginAddEmployeeObj:addEmployee= new addEmployee();
import LoginPage from "../PageObjectes/LoginPage"
const loginObj:LoginPage= new LoginPage();

describe('Add Employee', () => {
  beforeEach(function(){
 
    cy.visit('https://opensource-demo.orangehrmlive.com')
    loginObj.login("Admin","admin123");
    cy.fixture('employeeinfo').as('EmpInfo')
  })
  
  it('add employee', () => {
    // add employee using the fixture 
    cy.get('@EmpInfo').then((infoData:any)=>{
      loginAddEmployeeObj.addNewEmployee(infoData.FirstName, infoData.MiddleName, infoData.LastName,infoData.EmployeeID,infoData.UserName,infoData.Password,infoData.ConfirmPass)
    })
    // add employee using function
    //loginAddEmployeeObj.addNewEmployee("Anwar","adli","melhem","Anwar Melhem1","password1","password1")

  })
  
})