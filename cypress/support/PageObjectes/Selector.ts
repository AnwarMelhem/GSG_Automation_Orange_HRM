class Selector {
    getQuickLunchCard() {
        return cy.contains('p', 'Quick Launch').parents().eq(2);
    }
    getQuickLunchCard2() {
         cy.contains('p', 'Quick Launch').parents().eq(2);
         return this;
    }
    getTimeAtWork(){
        cy.get('.oxd-text.oxd-text--span.oxd-text.oxd-text--span.orangehrm-attendance-card-fulltime')
    }
}
export default Selector 