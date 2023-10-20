class Recruitment {
    elements = {
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        AssertionForRecruitment: () => cy.get('.oxd-topbar-header-breadcrumb > .oxd-text'),
        Table: () => cy.get('.oxd-table-body'),
        //TableChild: () => cy.get('.oxd-table-card')
        
    }
    Clicks_To_Recruitment_Tab() {
        this.elements.MainMenuItems().contains('Recruitment').click();
    }
    Assertion_Recruitment() {

        this.elements.AssertionForRecruitment().should('contain', "Recruitment")

    }
    Table_Rows_Validation(count:number){
        this.elements.Table().find('.oxd-table-card').should('have.length',count);
    }


}
export default Recruitment;