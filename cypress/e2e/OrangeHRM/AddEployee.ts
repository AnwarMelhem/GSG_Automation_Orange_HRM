import addEmployee from "../PageObjectes/AddEmployee"
const loginAddEmployeeObj: addEmployee = new addEmployee();
import LoginPage from "../PageObjectes/LoginPage"
const loginObj: LoginPage = new LoginPage();
let ResponseemployeeId: any
let FirstName:any
let LastName: any
let middleName:any
describe.skip('Add Employee', () => {
  beforeEach(function () {

    cy.visit('https://opensource-demo.orangehrmlive.com')
    loginObj.login("Admin", "admin123");
    cy.fixture('employeeinfo').as('EmpInfo')
  })

  it.skip('Add Employee Using UI ', () => {
    // add employee using the fixture 
    cy.get('@EmpInfo').then((infoData: any) => {
      loginAddEmployeeObj.addNewEmployee(infoData.FirstName, infoData.MiddleName, infoData.LastName, infoData.EmployeeID, infoData.UserName, infoData.Password, infoData.ConfirmPass)
    })
    // add employee using function
    //loginAddEmployeeObj.addNewEmployee("Anwar","adli","melhem","Anwar Melhem1","password1","password1")

  })
})

function generateRandom4DigitNumber(): number {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber: number = generateRandom4DigitNumber();


describe('Add Employee Using API', () => {
  beforeEach(function () {

    cy.visit('https://opensource-demo.orangehrmlive.com')
    loginObj.login("Admin", "admin123");

    cy.request({
      method: 'POST',
      url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
      body: {
        firstName: "ANWAR",
        middleName: "ADLI",
        lastName: "Melhem",
        employeeId: `${randomNumber}`
      }
    }).then((Response: any) => {
      cy.log(Response);
      console.log(Response);
      expect(Response).property('status').to.equal(200);
      ResponseemployeeId = Response.body.data.employeeId;
      FirstName=Response.body.data.firstName;
      LastName=Response.body.data.lastName;
      middleName=Response.body.data.middleName;
      console.log(ResponseemployeeId);
    })

  })

  it('Add Employee Using UI ', () => {
    loginAddEmployeeObj.UsingAPI(ResponseemployeeId,FirstName,LastName,middleName)
  })


})





