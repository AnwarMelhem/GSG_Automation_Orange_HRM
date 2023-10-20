class First_Automation_Assignment {
    elements = {
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        AddEmpButton: () => cy.get('.oxd-button--secondary'),
    
        EmployeeInputName: () => cy.get('.--name-grouped-field'),
        EmployeeIDInput: () => cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'),
        SaveNewEmpButton: () => cy.get('button[type="submit"]'),
        Toggle: () => cy.get('.oxd-switch-input'),
        UserNameInput: () => cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        PasswordInput: () => cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'),
        ConfirmedPass: () => cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        SaveUserbtn: () => cy.get('.oxd-button--secondary'),
        AssertionForFirstNameAndLastName: () => cy.get('.orangehrm-edit-employee-name > .oxd-text'),
        NickNameInput: () => cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'),
        LicenseExpiryDatePicker: () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon'),
        SelectDate:()=>cy.get(':nth-child(28) > .oxd-calendar-date'),
        NationalityDDL: () => cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon'),
        SelectValueFromNationalityDDL:()=>cy.get(':nth-child(3) > span'),
        FemaleRadioButton:()=>cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input'),
        SaveEmpInfo: () => cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button'),
        EmployeeList: () => cy.get('.--visited > .oxd-topbar-body-nav-tab-item'),
        SearchByIdInput: () => cy.get(':nth-child(2) > .oxd-input'),
        SearchButton: () => cy.get('.oxd-form-actions > .oxd-button--secondary'),
        IDCoulmnContent: () => cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div'),
        First_LastContent: () => cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div'),
        LastNameContent: () => cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div'),
        EditEmployeeIcon: () => cy.get('.oxd-table-cell-actions > :nth-child(2)'),
        DrivesLicenseNumber:()=>cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        SNN_Number:()=>cy.get(':nth-child(3) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        SIN_Number:()=>cy.get(':nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    }

   Clicks_To_PIM_Tab(){
    this.elements.MainMenuItems().contains('PIM').click();
    
   }
   Add_Employee_Form(firstName: string, MiddleName: string, LastName: string, EmployeeID: string, userName: string, password1: string, password2: string){
    
    this.elements.AddEmpButton().eq(1).click()
    cy.get('.oxd-loading-spinner').should("exist");
    this.elements.EmployeeInputName().children().eq(0).type(firstName)
    this.elements.EmployeeInputName().children().eq(1).type(MiddleName)
    this.elements.EmployeeInputName().children().eq(2).type(LastName)
    this.elements.EmployeeIDInput().clear();
    this.elements.EmployeeIDInput().type(EmployeeID);
    this.elements.Toggle().click()
    this.elements.UserNameInput().click().type(userName)
    this.elements.PasswordInput().click().type(password1)
    this.elements.ConfirmedPass().click().type(password2)
    this.elements.SaveUserbtn().click()
    cy.get('.oxd-loading-spinner').should("exist");
    //cy.wait(4000);
   }

   Assertion_FOR_First_Last_Name(firstName: string, LastName: string){
    this.elements.AssertionForFirstNameAndLastName().should('be.visible');
    this.elements.AssertionForFirstNameAndLastName().should('contain', firstName + " " + LastName)

   }
   Fill_Employee_Data(NickName:string,DrivesLicenseNumber:string,SNN_Number:string,SIN_Number:string){
    this.elements.NickNameInput().type(NickName);
    this.elements.DrivesLicenseNumber().type(DrivesLicenseNumber);
    this.elements.SNN_Number().type(SNN_Number,{ force: true });
    this.elements.SIN_Number().type(SIN_Number,{ force: true });
    this.elements.LicenseExpiryDatePicker().click({ force: true });
    this.elements.SelectDate().click({ force: true }),
    this.elements.NationalityDDL().click({ force: true });
    this.elements.SelectValueFromNationalityDDL().click();
    this.elements.FemaleRadioButton().click({ force: true });
    this.elements.SaveEmpInfo().click({ force: true });
    this.elements.EmployeeList().click();

   }
   Search_For_UserID(EmployeeID: string){
    this.elements.SearchByIdInput().type(EmployeeID);
    this.elements.SearchButton().click({ force: true }).click({ force: true });
   }
   Validation_Table_Content(EmployeeID: string,firstName: string, LastName: string,MiddleName:string){
    this.elements.IDCoulmnContent().should('contain', EmployeeID);
    this.elements.First_LastContent().should('contain', firstName + " " + MiddleName);
    this.elements.LastNameContent().should('contain', LastName);
   }

   Edit_Employee_By_Click_On_Edit_Icon(){
    cy.wait(4000);
    this.elements.EditEmployeeIcon().click({ multiple: true });
   }


}
export default First_Automation_Assignment;