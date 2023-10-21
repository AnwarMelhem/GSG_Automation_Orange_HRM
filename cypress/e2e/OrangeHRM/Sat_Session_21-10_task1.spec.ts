import Sat_Session_task1 from '../../support/PageObjectes/Sat_Session_21-10_task1'
import LoginPage from "../PageObjectes/LoginPage"
const loginObj: LoginPage = new LoginPage();
const Sat_Session_task1Obj: Sat_Session_task1 = new Sat_Session_task1();
// Saturady 21/10/2023 session task 1 
// Create Employee with Login Details then Login by Login Deatils INFO
describe('Create new employee and login by new employee', () => {
    beforeEach(function () {

        cy.visit('https://opensource-demo.orangehrmlive.com')
        // Login by Admin Dashboard 
        loginObj.login("Admin", "admin123");
        cy.fixture('employeeinfo').as('EmpInfo')
        // Add New Employee API
        // create Login Details API
        cy.get('@EmpInfo').then((data: any) => {
            Sat_Session_task1Obj.addNewEmployee(data.FirstName, data.MiddleName, data.LastName, data.employeeId).then(() => {
                Sat_Session_task1Obj.createLoginDetails(data.UserName, data.Password);
            });
        })

    })

    it('Create new employee and login by new employee', () => {
        // Logout from Admin dashboard 
        Sat_Session_task1Obj.Logout_Function();
        // Login by new employee Creatrd 
        cy.get('@EmpInfo').then((data: any) => {
            loginObj.login(data.UserName, data.Password);
        });
    })
})













