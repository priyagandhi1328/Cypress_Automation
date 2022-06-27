/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Opportunities from "../../Pages/OpportunitiesPage"

const homeEquityLoan = new Home_Equity_Loan
const opportunity = new Opportunities

describe('Verify highest sorting for renewal date', function () {

    it('Verify highest sorting for renewal date', function() {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        opportunity.clickOnOpportunities()
        opportunity.applyFilterForRenewalDateandVerify()
        cy.Logout()
    })
})
