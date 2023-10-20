class addEmployee {
    elements = {

        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        AddEmp: () => cy.get('.oxd-button--secondary'),
        EmployeeInputName: () => cy.get('.--name-grouped-field'),
        EmployeeIDInput: () => cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'),
        saveNewEmp: () => cy.get('button[type="submit"]'),
        Toggle: () => cy.get('.oxd-switch-input'),
        userNameInput: () => cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(1) > .oxd-input'),
        PasswordInput: () => cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'),
        confirmedPass: () => cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        Savebtn: () => cy.get('.oxd-button--secondary'),
        assertionForName: () => cy.get('.orangehrm-edit-employee-name > .oxd-text'),
        nickNameInput: () => cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'),
        LicenseExpiryDatePicker: () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon'),
        NationalityDDL: () => cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon'),
        SaveButton2: () => cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button'),
        EmployeeList: () => cy.get('.--visited > .oxd-topbar-body-nav-tab-item'),
        SearchByIdInput: () => cy.get(':nth-child(2) > .oxd-input'),
        SearchButton: () => cy.get('.oxd-form-actions > .oxd-button--secondary'),
        IDCoulmnContent: () => cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div'),
        First_LastContent: () => cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div'),
        LastNameContent: () => cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div'),
        EditEmployeeIcon: () => cy.get('.oxd-table-cell-actions > :nth-child(2)')
    }



    addNewEmployee(firstName: string, MiddleName: string, LastName: string, EmployeeID: string, userName: string, password1: string, password2: string) {
        this.elements.MainMenuItems().contains('PIM').click();
        this.elements.AddEmp().eq(1).click()
        this.elements.EmployeeInputName().children().eq(0).type(firstName)
        this.elements.EmployeeInputName().children().eq(1).type(MiddleName)
        this.elements.EmployeeInputName().children().eq(2).type(LastName)
        this.elements.EmployeeIDInput().clear();
        this.elements.EmployeeIDInput().type(EmployeeID);
        this.elements.Toggle().click()
        this.elements.userNameInput().click().type(userName)
        this.elements.PasswordInput().click().type(password1)
        this.elements.confirmedPass().click().type(password2)
        this.elements.Savebtn().click()
        cy.wait(4000);
        this.elements.assertionForName().should('be.visible');
        this.elements.assertionForName().should('contain', firstName + " " + LastName)
        this.elements.nickNameInput().type('Anwar Melhem'),
            this.elements.LicenseExpiryDatePicker().click({ force: true });
        cy.get(':nth-child(28) > .oxd-calendar-date').click();
        this.elements.NationalityDDL().click({ force: true });
        cy.get(':nth-child(3) > span').click({ force: true });
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click({ force: true });
        this.elements.SaveButton2().click({ force: true })
        this.elements.EmployeeList().click();
        this.elements.SearchByIdInput().type(EmployeeID);
        this.elements.SearchButton().click({ force: true }).click({ force: true });
        this.elements.IDCoulmnContent().should('contain', EmployeeID);
        this.elements.First_LastContent().should('contain', firstName + " " + MiddleName);
        this.elements.LastNameContent().should('contain', LastName);
    }
    UsingAPI(EmployeeID: string, firstName: string, LastName: string, MiddleName: string) {
        this.elements.MainMenuItems().contains('PIM').click();
        this.elements.SearchByIdInput().type(EmployeeID);
        this.elements.SearchButton().click({ force: true }).click({ force: true });
        cy.wait(4000);
        this.elements.EditEmployeeIcon().click({ multiple: true });
        this.elements.assertionForName().should('be.visible');
        this.elements.assertionForName().should('contain', firstName + " " + LastName)
        this.elements.nickNameInput().type('Anwar Melhem'),
            this.elements.LicenseExpiryDatePicker().click({ force: true });
        cy.get(':nth-child(28) > .oxd-calendar-date').click();
        this.elements.NationalityDDL().click({ force: true });
        cy.get(':nth-child(3) > span').click({ force: true });
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click({ force: true });
        this.elements.SaveButton2().click({ force: true })
        this.elements.EmployeeList().click();
        this.elements.SearchByIdInput().type(EmployeeID);
        this.elements.SearchButton().click({ force: true }).click({ force: true });
        this.elements.IDCoulmnContent().should('contain', EmployeeID);
        this.elements.First_LastContent().should('contain', firstName + " " + MiddleName);
        this.elements.LastNameContent().should('contain', LastName);
    }

}
export default addEmployee;