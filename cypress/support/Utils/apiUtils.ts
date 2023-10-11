
import { ICreateEmployeePayload } from "../Helper/Payload/userAPIPayload"
import { ICreateEmployeeResponse } from "../Helper/Response/userAPIResponse"

declare global {
    namespace Cypress {
     interface Chainable {
        addNewUser:(requestURL:string,userPayload:ICreateEmployeePayload)=> Chainable<ICreateEmployeeResponse>
      }
     }
    }

Cypress.Commands.add('addNewUser',(requestURL:string, userPayload:ICreateEmployeePayload )=>{
    return cy.api({
        method:'POST',
        url:requestURL,
        body: userPayload, 
        headers:{
            'Content-Type':'application/json'
        } 
 }).its('body')
})