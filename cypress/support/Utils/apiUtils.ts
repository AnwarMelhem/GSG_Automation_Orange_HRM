
import { ICreateEmployeePayload } from "../Helper/Payload/userAPIPayload"
import { ICreateEmployeeResponse } from "../Helper/Response/userAPIResponse"
import { ICreateCandidatesPayload } from "../Helper/Payload/Add_candidates_payload"
import { ICreateCandidatesResponse } from "../Helper/Response/Add_candidates_Response"
declare global {
    namespace Cypress {
     interface Chainable {
        addNewUser:(requestURL:string,userPayload:ICreateEmployeePayload)=> Chainable<ICreateEmployeeResponse>
        addNewCandiate:(requestURL:string,userPayload:ICreateCandidatesPayload)=>Chainable<ICreateCandidatesResponse>
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

Cypress.Commands.add('addNewCandiate',(requestURL:string, userPayload:ICreateCandidatesPayload )=>{
    return cy.api({
        method:'POST',
        url:requestURL,
        body: userPayload, 
        headers:{
            'Content-Type':'application/json'
        } 
 }).its('body')
})
