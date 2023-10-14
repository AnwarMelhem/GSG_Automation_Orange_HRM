class Recruitment {
    elements = {
        RescheduleInterviewButton: () => cy.get('.oxd-button--success'),
        AssertionForReschedule:()=>cy.get('.orangehrm-card-container > .oxd-text--h6'),
        AssertionForReschedule1:()=>cy.get('.oxd-text.oxd-text--h6.orangehrm-main-title'),
        InterviewTitle:()=>cy.get('.oxd-input.oxd-input--active').eq(5),
        Interviewer:()=>cy.get('.oxd-autocomplete-text-input > input'),
        SelectInterviewData:()=>cy.get('.oxd-autocomplete-option'),
        DatePickerIcon:()=>cy.get('.oxd-date-input > .oxd-icon'),
        ChooseDate:()=>cy.get(':nth-child(24) > .oxd-calendar-date'),
        TimePiker:()=>cy.get('.oxd-time-input > .oxd-icon'),
        IncreaseHour:()=>cy.get('.oxd-time-hour-input > .bi-chevron-up'),
        IncraseMinute:()=>cy.get('.oxd-time-minute-input > .bi-chevron-up'),
        AddNote:()=>cy.get('.oxd-textarea'),
        SaveButton:()=>cy.get('.oxd-button--secondary'),
        AssertionForStatus:()=>cy.get('.orangehrm-recruitment-status > .oxd-text')
        
    }
    Clicks_To_Reschedule_Interview_Button() {
        this.elements.RescheduleInterviewButton().click({force:true});
    }
    Assertion_For_Reschedule_Interview() {

        this.elements.AssertionForReschedule1().should('contain', "Schedule Interview")

    }
    Fill_Interview_Information(){
        this.elements.InterviewTitle().type('QA Interview',{force:true});
        this.elements.Interviewer().type('Odis Adalwin')
        cy.wait(1000);
        this.elements.SelectInterviewData().click()
        this.elements.DatePickerIcon().click();
        this.elements.ChooseDate().click();
        this.elements.TimePiker().click();
        this.elements.IncreaseHour().click().click().click();  
        this.elements.IncraseMinute().click().click().click();
        this.elements.AddNote().click().type('You have moved to the interview stage')
        
      }

      Clicks_To_Save_Button(){
        this.elements.SaveButton().click();
      }
      Assertion_For_Status(){
       this.elements.AssertionForStatus().should('contain', "Status: Interview Scheduled")
    }


}
export default Recruitment;