/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Opportunities from "../../Pages/OpportunitiesPage"

const homeEquityLoan = new Home_Equity_Loan
const opportunity = new Opportunities

describe('Verify lowest sorting for remaining balance savings', function () {

    it('Verify lowest sorting for remaining balance savings', function() {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        opportunity.clickOnOpportunities()
        opportunity.applyLowestSortingFilterForRemainingBalanceSavingsandVerify()
        cy.Logout()
    })
})
