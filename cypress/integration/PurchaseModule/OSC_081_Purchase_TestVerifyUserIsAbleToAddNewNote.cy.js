/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Purchase from "../../Pages/PurchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new Purchase

describe("Verify that user is able to add a note", () => {

  beforeEach(function () {
    cy.fixture("OscarData").then(function (data) {
      this.data = data;
    })
  })

  it("Add a note and verify it", function () {
    cy.Login()
    homeEquityLoan.clickOnMenuIcon()
    purchase.createPurchaseDeal()
    homeEquityLoan.addNewNote(this.data.Note)
    homeEquityLoan.verifyNoteIsAdded()
  })

  it('Logout from website', function () {
    cy.Logout()
  })
})