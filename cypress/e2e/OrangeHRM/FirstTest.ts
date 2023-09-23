// /// <reference types="Cypress" />

// describe('lOGIN Home Page', () => {
//     beforeEach(function(){
//    cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
//       cy.visit('https://opensource-demo.orangehrmlive.com')
//     })
  
//     it('Valid Login', () => {
//       cy.get('[placeholder="Username"]').type('Admin')
//       cy.get('[placeholder="Password"]').type('admin123')
//       cy.get('button').click()
//       cy.get('.oxd-topbar-header-title').contains('Dashboard')
  
      
//     })
//     it.only('Visit Dashboard', () => {
//         cy.get('[placeholder="Username"]').type('Admin')
//         cy.get('[placeholder="Password"]').type('admin123')
//         cy.get('button').click()
//         cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').first().click()
//     cy.get('[class="oxd-text oxd-text--h5 oxd-table-filter-title"]').contains("System Users")
        
//       })
    
//   })