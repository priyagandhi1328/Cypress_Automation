/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage";

const homeEquityLoan = new Home_Equity_Loan();

describe("Verify that user is able to add a note", ()=> {
  beforeEach(function () {
    cy.fixture("OscarData").then(function (data) {
      this.data = data;
    });
  });

  it("Add a note and verify it", function() {
    cy.Login()
    homeEquityLoan.clickOnMenuIcon()
    homeEquityLoan.createHomeEquityLoanDeal()
    homeEquityLoan.addNewNote(this.data.Note)
    homeEquityLoan.verifyNoteIsAdded()
  })

  it('Logout from website', function () {
    cy.Logout()
})
})
