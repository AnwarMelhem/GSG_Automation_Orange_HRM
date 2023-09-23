class EmployeeTable
{
    elements={
    
        EmployeeName:()=>cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'),
        EmployeeID:()=>cy.get(':nth-child(2) > .oxd-input'),
        SuprevisorName:()=>cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'),
        SearchBtn:()=>cy.get('.oxd-form-actions > .oxd-button--secondary')
    }


    

    // addNewEmployee(firstName:string, MiddleName:string, LastName:string, userName:string, password1:string,password2:string){
    //  this.elements.MainMenuItems().contains('PIM').click();
    //  this.elements.AddEmp().eq(1).click()
    //  this.elements.EmployeeInputName().children().eq(0).type(firstName)
    //  this.elements.EmployeeInputName().children().eq(1).type(MiddleName)
    //  this.elements.EmployeeInputName().children().eq(2).type(LastName)
    //  this.elements.Toggle().click()
    //  this.elements.userNameInput().click().type(userName)
    //  this.elements.PasswordInput().click().type(password1)
    //  this.elements.confirmedPass().click().type(password2)
    //  this.elements.Savebtn().click()
    // }

}
export default EmployeeTable;