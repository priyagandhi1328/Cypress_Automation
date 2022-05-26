/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Refinance from "../../Pages/RefinancePage"

const homeEquityLoan = new Home_Equity_Loan
const refinance = new Refinance

describe("Verify that user is able to add a note", () => {

  beforeEach(function () {
    cy.fixture("refinanceDetails").then(function (data) {
      this.data = data;
    })
  })

  it("Add a note and verify it", function () {
    cy.Login()
    homeEquityLoan.clickOnMenuIcon()
    refinance.createRefinanceDeal()
    homeEquityLoan.addNewNote(this.data.Note)
    homeEquityLoan.verifyNoteIsAdded()
  })

  it('Logout from website', function () {
    cy.Logout()
  })
})