/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage";

const homeEquityLoan = new Home_Equity_Loan();

describe("Verify that user is able to add special loan conditions", () => {
  beforeEach(function () {
    cy.fixture("OscarData").then(function (data) {
      this.data = data
    })
  })

  it("Add a note and verify it", function () {
    cy.Login()
    homeEquityLoan.clickOnMenuIcon()
    homeEquityLoan.createHomeEquityLoanDeal()
    homeEquityLoan.verifyUserIsAbleToAddSpecialLoanConditions(this.data.SpecialLoan)
  })

  it('Logout From website', function () {
    cy.Logout()
  })
})