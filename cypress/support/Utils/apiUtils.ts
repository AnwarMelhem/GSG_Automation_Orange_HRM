
import { ICreateEmployeePayload } from "../Helper/Payload/userAPIPayload"
import { ICreateEmployeeResponse } from "../Helper/Response/userAPIResponse"
import { ICreateCandidatesPayload } from "../Helper/Payload/Add_candidates_payload"
import { ICreateCandidatesResponse } from "../Helper/Response/Add_candidates_Response"
declare global {
    namespace Cypress {
     interface Chainable {
        addNewUser:(requestURL:string,userPayload:ICreateEmployeePayload)=> Chainable<ICreateEmployeeResponse>
        addNewCandiate:(requestURL:string,userPayload:ICreateCandidatesPayload)=>Chainable<ICreateCandidatesResponse>
        checkTableRow:(tableSelector:string,rowData:string[])=>Chainable<void>
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

// Cypress.Commands.add('checkTableRow', (tableSelector, rowData) => {
//     cy.get(tableSelector)
//       .find('tr')
//       .should('have.length.greaterThan', 0)
//       .each(($row, rowIndex) => {
//         cy.wrap($row)
//           .find('td')
//           .should('have.length', rowData.length)
//           .each(($cell, cellIndex) => {
//             cy.wrap($cell).should('include.text', rowData[cellIndex]);
//           });
//       });
//   });