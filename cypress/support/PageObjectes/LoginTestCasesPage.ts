class LoginTestCases {
    elements = {
        UserNameInputField: () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        PasswordInputField: () => cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        LoginBtn: () => cy.get('.oxd-button'),
        Dashboard: () => cy.get('.oxd-topbar-header-breadcrumb > .oxd-text'),
        InavalidCredintial: () => cy.get('.oxd-alert-content > .oxd-text'),
        RequiredValidation1: () => cy.get(':nth-child(2) > .oxd-input-group > .oxd-text'),
        RequiredValidation2: () => cy.get(':nth-child(3) > .oxd-input-group > .oxd-text'),

    }


    LoginTestCasesValidCase(UserName: string, Password: string) {
        this.elements.UserNameInputField().type(UserName);
        this.elements.PasswordInputField().type(Password);
        this.elements.LoginBtn().click();
        this.elements.Dashboard().should('contain', 'Dashboard')
    }

    LoginTestCasesInvalidUserNameAndPassword(UserName: string, Password: string) {
        this.elements.UserNameInputField().type(UserName);
        this.elements.PasswordInputField().type(Password);
        this.elements.LoginBtn().click();
        this.elements.InavalidCredintial().should('contain', 'Invalid credentials')
    }

    LoginTestCasesEmptyUserNameAndPassword() {
        this.elements.LoginBtn().click();
        this.elements.RequiredValidation1().should('contain', 'Required')
        this.elements.RequiredValidation2().should('contain', 'Required')
    }

    LoginTestCasesEmptyUserName(Password: string) {
        this.elements.PasswordInputField().type(Password);
        this.elements.LoginBtn().click();
        this.elements.RequiredValidation1().should('contain', 'Required')
    }

    LoginTestCasesEmptyPassword(UserName: string) {
        this.elements.UserNameInputField().type(UserName);
        this.elements.LoginBtn().click();
        this.elements.RequiredValidation2().should('contain', 'Required')
    }

    CheckPassword() {
        this.elements.PasswordInputField().should('have.attr', 'type', 'password');
    }
}





export default LoginTestCases;