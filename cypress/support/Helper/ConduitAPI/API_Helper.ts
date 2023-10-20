// apiHelpers.js
const baseUrl=Cypress.config().baseUrl;
// export const URLs={
//     users:`${baseUrl}/api/users`
// }
class ApiHelpers {
 
  
    // Perform a GET request
    get(endpoint:any,token:any) {
      return cy.api({
        method: 'GET',
        url: `${baseUrl}${endpoint}`,
        headers: {
            Authorization: token
          }
      });
    }
  
    // Perform a POST request
    post(endpoint:any, data:any) {
      return cy.api({
        method: 'POST',
        url: `${baseUrl}${endpoint}`,
        body: data,
      });
    }
  
    // Perform a PUT request
    put(endpoint:any, data:any) {
      return cy.request({
        method: 'PUT',
        url: `${baseUrl}${endpoint}`,
        body: data,
      });
    }
  
    // Perform a DELETE request
    delete(endpoint:any) {
      return cy.request({
        method: 'DELETE',
        url: `${baseUrl}${endpoint}`,
      });
    }
  
    // Custom assertion for HTTP status code
    assertStatusCode(response:any, expectedStatusCode:any) {
      cy.wrap(response).its('status').should('eq', expectedStatusCode);
    }
  }
  
  export default  ApiHelpers;