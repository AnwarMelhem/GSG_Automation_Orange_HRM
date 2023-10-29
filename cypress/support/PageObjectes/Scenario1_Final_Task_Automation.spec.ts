class Scenario1_Final_Task_Automation {
  private id: any;
  private empNumber: any;
  private LeaveID: any;
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
  setLeaveID(id: number) {
    this.LeaveID = id;
  }
  getLeaveID(): number {
    return this.LeaveID;
  }
 
  elements = {
    MainMenuItems: () => cy.get(".oxd-sidepanel-body"),
    DropDawn: () => cy.get(".oxd-userdropdown-tab"),
    logout: () => cy.get(":nth-child(4) > .oxd-userdropdown-link"),
    AssertionForLeave: () =>
      cy.get(".oxd-topbar-header-breadcrumb > .oxd-text"),
    StatusColumn: () =>
      cy.get(".oxd-table-card > .oxd-table-row > :nth-child(7)"),
  };
  
  Logout_Function() {
    this.elements.DropDawn().click();
    this.elements.logout().click();
  }

  Clicks_To_Leave_Tab() {
    this.elements.MainMenuItems().contains("Leave").click();
  }

  Assertion_Leave() {
    this.elements.AssertionForLeave().should("contain", "Leave");
  }

  Assertion_Status_Coulmn() {
    this.elements
      .StatusColumn()
      .invoke("text")
      .then((text) => {
        expect(text).to.include("Scheduled");
      });
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
  // Add Leave Enitlment API Request
  AddLeaveEntitlement() {
    cy.api({
      method: "POST",
      url: "/web/index.php/api/v2/leave/leave-entitlements",
      body: {
        empNumber: this.getEmpNumber(),
        leaveTypeId: 8,
        fromDate: "2023-01-01",
        toDate: "2023-12-31",
        entitlement: "50",
      },
    }).then((response) => {
      expect(response).property("status").to.equal(200);
    });
  }
  // Applay Leave Request
  ApplayLeave(): Cypress.Chainable<any> {
    return cy.wrap(undefined).then(() => {
      cy.api({
        method: "POST",
        url: "web/index.php/api/v2/leave/leave-requests",
        body: {
          leaveTypeId: 8,
          fromDate: "2023-10-30",
          toDate: "2023-10-30",
          comment: "Cpmments",
          duration: {
            type: "full_day",
          },
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
        this.setLeaveID(response.body?.data.id);
      });
    });
  }
// Approve Request API Request
  ApproveLeaveByAdmin() {
    cy.api({
      method: "PUT",
      url: `/web/index.php/api/v2/leave/employees/leave-requests/${this.getLeaveID()}`,
      body: {
        action: "APPROVE",
      },
    }).then((response) => {
      expect(response).property("status").to.equal(200);
    });
  }
}

export default Scenario1_Final_Task_Automation;
