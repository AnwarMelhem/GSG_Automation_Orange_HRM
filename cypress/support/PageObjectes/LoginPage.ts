class LoginPage{
    elements={
    userName:()=> cy.get('[placeholder="Username"]'),
    //this to get user name by using the command
    //userName:()=>cy.getByPlaceholder("Username"),
    password:()=>cy.get('[placeholder="Password"]'),
    //this to get user name by using the command
    //password:()=>cy.getByPlaceholder("Password"),
    loginBtn:()=>cy.get('button'),
    forgetpass:()=>cy.get('.orangehrm-login-forgot > .oxd-text'),
    typePass:()=>cy.get('.oxd-input'),
    ResetBtn:()=>cy.get('.oxd-button--secondary'),
    Assertion:()=>cy.get('.oxd-text--h6')
    }

    login(userName:string, password:string){
        this.elements.userName().type(userName);
        this.elements.password().type(password);
        this.elements.loginBtn().click()
        
    }
    forgetPass(userName:string){
     this.elements.forgetpass().click();
     this.elements.typePass().type(userName);
     this.elements.ResetBtn().click();
     this.elements.Assertion().should('contain','Reset Password link sent successfully')
    }
}
export default LoginPage