class Dawnload_Xlsx_File {
    elements = {
      MainMenuItems: () => cy.get(".oxd-sidepanel-body"),
      AddCanditate: () => cy.get(".orangehrm-header-container > .oxd-button"),
      AssertionForRecruitment: () =>
        cy.get(".oxd-topbar-header-breadcrumb > .oxd-text"),
      FirstName: () =>
        cy.get(
          ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
        ),
      MiddleName: () => cy.get(":nth-child(2) > :nth-child(2) > .oxd-input"),
      LastName: () => cy.get(":nth-child(3) > :nth-child(2) > .oxd-input"),
      Email: () =>
        cy.get(
          ":nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
        ),
      Browse: () => cy.get(".oxd-file-button"),
      File: () => cy.get('input[type="file"]'),
      Assertion: () => cy.get(".oxd-file-input-div"),
      SaveButton:()=>cy.get('.oxd-button--secondary'),
      DawnloadButton:()=>cy.get('.orangehrm-file-preview')
    };
    Clicks_To_Recruitment_Tab() {
      this.elements.MainMenuItems().contains("Recruitment").click();
    }
    Assertion_Recruitment() {
      this.elements.AssertionForRecruitment().should("contain", "Recruitment");
    }
    Clicks_To_Add_Canditate() {
      this.elements.AddCanditate().click({ force: true });
    }
    Fill_CanditateInfo() {
      this.elements.FirstName().type("Anwar");
      this.elements.MiddleName().type("Adli");
      this.elements.LastName().type("Melhem");
      this.elements.Email().type("Anwar@qa.com");
    }
  
    Attach_File(FilePath: string) {
      this.elements.Browse().click({ force: true });
      this.elements.File().selectFile(FilePath, { force: true });
    }
    Assetion_Name_File(NameFile: string) {
      this.elements.Assertion().should("contain", NameFile);
    }
    Clicks_To_Save_Button(){
        this.elements.SaveButton().click({force:true})
    }
    Clicks_To_Dawnload_Button(){
        this.elements.DawnloadButton().click({force:true})
    }
   
  }
  export default Dawnload_Xlsx_File;
  