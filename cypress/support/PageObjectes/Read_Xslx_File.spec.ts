class Read_XLSX_File {
    private VacancyID: any;
  
    setVacancyID(VacancyID: number) {
      this.VacancyID = VacancyID;
    }
  
    getVacancyID(): number {
      return this.VacancyID;
    }
  
    elements = {
      AddAttachmentButton: () =>cy.get(".orangehrm-header-container > .oxd-button"),
      Browse: () => cy.get(".oxd-file-button"),
      File: () => cy.get('input[type="file"]'),
      Assertion: () => cy.get(".oxd-file-input-div"),
      SaveButton: () =>cy.get(":nth-child(3) > .oxd-form > .oxd-form-actions > .oxd-button--secondary"),
      NameFileColumn2: () => cy.get(".oxd-table-cell.oxd-padding-cell"),
      DawnloadButton:()=>cy.get('.oxd-table-cell-actions > :nth-child(2)')
    };
  
    Clicks_Add_Button() {
      this.elements.AddAttachmentButton().click({ force: true });
    }
  
    Attach_File(FilePath: string) {
      this.elements.Browse().click({ force: true });
      this.elements.File().selectFile(FilePath, { force: true });
    }
  
    Assertion_Name_File(NameFile: string) {
      this.elements.Assertion().should("contain", NameFile);
    }
  
    Clicks_To_Save_Buutton() {
      this.elements.SaveButton().click({ force: true });
    }
  
    Assertion_Name_File_Column(NameFile: string) {
      this.elements.NameFileColumn2().eq(1).should("contain", NameFile);
    }
    Clicks_To_Dawnload_Button(){
        this.elements.DawnloadButton().click({force:true})
    }
  
    // Add Vacancy API Request
    addVacancy(): Cypress.Chainable<any> {
      return cy.wrap(undefined).then(() => {
        cy.api({
          method: "POST",
          url: "/web/index.php/api/v2/recruitment/vacancies",
          body: {
            name: "Vacancy_QA3",
            jobTitleId: 9,
            employeeId: 2,
            numOfPositions: null,
            description: "Description",
            status: true,
            isPublished: true,
          },
        }).then((response) => {
          expect(response).property("status").to.equal(200);
          this.setVacancyID(response.body?.data.id);
        });
      });
    }
  }
  export default Read_XLSX_File ;