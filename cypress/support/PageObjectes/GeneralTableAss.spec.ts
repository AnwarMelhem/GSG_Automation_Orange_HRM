class GeneralTableAss {
    elements = {
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        
    }

   Clicks_To_PIM_Recruitment(){
    this.elements.MainMenuItems().contains('Recruitment').click({force:true});
   }




}
export default GeneralTableAss;