/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Refinance from "../../Pages/RefinancePage"

const homeEquityLoan = new Home_Equity_Loan
const refinance = new Refinance

describe('Verify that user is able to add special loan conditions', function () {

  beforeEach(function () {
    cy.fixture("OscarData").then(function (data) {
      this.data = data;
    })
  })

  it("verify user is able to add special loan conditions", function () {
    cy.Login()
    homeEquityLoan.clickOnMenuIcon()
    refinance.createRefinanceDeal()
    homeEquityLoan.verifyUserIsAbleToAddSpecialLoanConditions(this.data.SpecialLoan)
  })

  it('Logout from website', function () {
    cy.Logout()
  })
})
