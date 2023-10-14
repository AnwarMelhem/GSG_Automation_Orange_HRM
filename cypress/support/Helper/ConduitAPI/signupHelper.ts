import userInit from "../../initializer/userInit";
import {ICreateEmployeeResponse} from "../../Helper/Response/userAPIResponse"
import {reject,resolve} from "cypress/types/bluebird"
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
        return new Cypress.Promise<ICreateEmployeeResponse>((resolve,reject)=>{
            cy.addNewUser(URLs.users,userInit.initUser())

        })
        
    }

 

}
export default RegisterUser;