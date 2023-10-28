class Sat_Session_28_10_task1 {
    private id: any;
    private empNumber: any;
    private TimeSheet: any;
    setEmpLoyeeId(id: string) {
      this.id = id;
    }
    getEmployeeId(): string {
      return this.id;
    }
    setEmpNumber(num: number) {
      this.empNumber = num;
    }
    getEmpNumber(): number {
      return this.empNumber;
    }
    setTimeSheet(id: number) {
      this.TimeSheet = id;
    }
    getTimeSheet(): number {
      return this.TimeSheet;
    }
   
    elements = {
      MainMenuItems: () => cy.get(".oxd-sidepanel-body"),
      DropDawn: () => cy.get(".oxd-userdropdown-tab"),
      logout: () => cy.get(":nth-child(4) > .oxd-userdropdown-link"),
      ViewEmployee:()=>cy.get('.oxd-autocomplete-text-input > input'),
      Select:()=>cy.get('.oxd-autocomplete-option'),
      ViewButton:()=>cy.get('.oxd-form-actions > .oxd-button'),
      AssertionStatus:()=>cy.get('.orangehrm-timesheet-footer--title > .oxd-text')

    };
    
    Logout_Function() {
      this.elements.DropDawn().click();
      this.elements.logout().click();
    }
    Clicks_To_Time_Tab() {
        this.elements.MainMenuItems().contains("Time").click();
    }

    View_Employee(Firstname:string,MiddleName:string){
        this.elements.ViewEmployee().type(`${Firstname} ${MiddleName} `,{force:true})
    }
   
    Select_Option(){
        this.elements.Select().click({force:true})
    }
    Clicks_To_View(){
        this.elements.ViewButton().click({force:true})
    }
    Assertion_Status(){
        this.elements.AssertionStatus().should('contain',"Status: Submitted")
    }
    
  
    // Add New Employee API Request
    addNewEmployee(
      firstName: string,
      middleName: string,
      LastName: string,
      employeeId: string
    ): Cypress.Chainable<any> {
      return cy.wrap(undefined).then(() => {
        cy.api({
          method: "POST",
          url: "/web/index.php/api/v2/pim/employees",
          body: {
            firstName: firstName,
            middleName: middleName,
            lastName: LastName,
            empPicture: null,
  
            employeeId: employeeId,
          },
        }).then((response) => {
          expect(response).property("status").to.equal(200);
          this.setEmpNumber(response.body?.data.empNumber);
        });
      });
    }
    // Create Login Details API Request
    createLoginDetails(username: string, password: string) {
      cy.api({
        method: "POST",
        url: "/web/index.php/api/v2/admin/users",
        body: {
          empNumber: this.getEmpNumber(),
          password: password,
          status: true,
          userRoleId: 2,
          username: username,
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    }
    ///web/index.php/api/v2/time/timesheets/default
    GetTimeSheetID(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
          cy.api({
            method: "GET",
            url: "web/index.php/api/v2/time/timesheets/default",
            body: {
               
            },
          }).then((response) => {
            expect(response).property("status").to.equal(200);
            this.setTimeSheet(response.body?.data.id);
          });
        });
      }

    TimeSheet1(TimeID:string): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
          cy.api({
            method: "PUT",
            url: `/web/index.php/api/v2/time/timesheets/${TimeID}/entries`,
            body: {
                "entries": [
                    {
                      "projectId": 2,
                      "activityId": 12,
                      "dates": {
                        "2023-10-23": {
                          "duration": "05:00"
                        },
                        "2023-10-24": {
                          "duration": "05:00"
                        },
                        "2023-10-25": {
                          "duration": "05:00"
                        },
                        "2023-10-26": {
                          "duration": "05:00"
                        },
                        "2023-10-27": {
                          "duration": "05:00"
                        },
                        "2023-10-28": {
                          "duration": "05:00"
                        },
                        "2023-10-29": {
                          "duration": "05:00"
                        }
                      }
                    }
                  ]
            },
          }).then((response) => {
            expect(response).property("status").to.equal(200);
          });
        });
      }

      SubmitTimeSheet(TimeID:string): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
          cy.api({
            method: "PUT",
            url: `web/index.php/api/v2/time/timesheets/${TimeID}`,
            body: {
               action:"SUBMIT"
            },
          }).then((response) => {
            expect(response).property("status").to.equal(200);
            this.setTimeSheet(response.body?.data.id);
          });
        });
      }

  }
  
  export default Sat_Session_28_10_task1;