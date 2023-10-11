import userInit from "../../initializer/userInit";
const baseUrl=Cypress.config().baseUrl;
export const URLs={
    users:`${baseUrl}/api/users`
}

 class RegisterUser{
     counduitNewUserUsingAPI(username:string, email:string,password:string){
        cy.api({
            method:'POST',
            url:URLs.users,
            body:{
                user:{
                username:username,
                email:email,
                password:password,}
               
            }
        }).then((Response) => {
            expect(Response).property('status').to.equal(201);
        })
        
    }
    counduitNewUserUsingAPI2(payload:any){
     return  cy.api({
        method:'POST',
        url:URLs.users,
        body:payload
    }).then((Response) => {
        expect(Response).property('status').to.equal(201);
    })
    }

    addUserViaAPI(){
        cy.addNewUser(URLs.users,userInit.initUser())
    }

 

}
export default RegisterUser;