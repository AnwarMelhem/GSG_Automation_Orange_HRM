import First_Automation_Assignment from "../PageObjectes/First_Automation_Assignment"
const Obj: First_Automation_Assignment = new First_Automation_Assignment();
import LoginPage from "../PageObjectes/LoginPage"
const loginObj: LoginPage = new LoginPage();
let ResponseemployeeId: any
let FirstName: any
let LastName: any
let middleName: any
//This Function To Generate Random 4 Digit Number
function generateRandom4DigitNumber(): number {
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber: number = generateRandom4DigitNumber();

//This Is A Scenario For Adding A User Using The API As Prerequest.
describe('Employees Table Data Validation When Add Employee Using API', () => {
    beforeEach(function () {

        cy.visit('https://opensource-demo.orangehrmlive.com')
        loginObj.login("Admin", "admin123");
        cy.fixture('employeeinfo').as('EmpInfo')
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
            FirstName = Response.body.data.firstName;
            LastName = Response.body.data.lastName;
            middleName = Response.body.data.middleName;
            console.log(ResponseemployeeId);
        })

    })

    it('Employees Table Data Validation', () => {

        Obj.Clicks_To_PIM_Tab();
        Obj.Search_For_UserID(ResponseemployeeId);
        Obj.Edit_Employee_By_Click_On_Edit_Icon();
        Obj.Assertion_FOR_First_Last_Name(FirstName, LastName);
        cy.get('@EmpInfo').then((infoData: any) => {
            Obj.Fill_Employee_Data(infoData.NickName, infoData.DrivesLicenseNumber, infoData.SNN_Number, infoData.SIN_Number);
        })
        Obj.Search_For_UserID(ResponseemployeeId);
        Obj.Validation_Table_Content(ResponseemployeeId, FirstName, LastName, middleName);

    })
})


//This Is A Scenario For Adding A User Using The UI From The Start. 
describe('Employees Table Data Validation All Step Using UI', () => {
    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        loginObj.login("Admin", "admin123");
        cy.fixture('employeeinfo').as('EmpInfo')
    })

    it('Employees Table Data Validation', () => {

        Obj.Clicks_To_PIM_Tab();

        cy.get('@EmpInfo').then((infoData: any) => {
            Obj.Add_Employee_Form(infoData.FirstName, infoData.MiddleName, infoData.LastName, infoData.EmployeeID, infoData.UserName, infoData.Password, infoData.ConfirmPass);
        })

        cy.get('@EmpInfo').then((infoData: any) => {
            Obj.Assertion_FOR_First_Last_Name(infoData.FirstName, infoData.LastName);
        })
        cy.get('@EmpInfo').then((infoData: any) => {
            Obj.Fill_Employee_Data(infoData.NickName, infoData.DrivesLicenseNumber, infoData.SNN_Number, infoData.SIN_Number);
        })
        cy.get('@EmpInfo').then((infoData: any) => {
            Obj.Search_For_UserID(infoData.EmployeeID);
        })

    })
})










