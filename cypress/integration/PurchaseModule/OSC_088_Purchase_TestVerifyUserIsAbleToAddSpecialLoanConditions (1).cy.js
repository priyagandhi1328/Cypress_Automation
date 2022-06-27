/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Purchase from "../../Pages/purchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new Purchase

describe('Verify that user is able to add special loan conditions', function () {

  beforeEach(function () {
    cy.fixture("OscarData").then(function (data) {
      this.data = data;
    })
  })

  it("verify user is able to add special loan conditions", function () {
    cy.Login()
    homeEquityLoan.clickOnMenuIcon()
    purchase.createPurchaseDeal()
    homeEquityLoan.verifyUserIsAbleToAddSpecialLoanConditions(this.data.SpecialLoan)
  })

  it('Logout from website', function () {
    cy.Logout()
  })
})
