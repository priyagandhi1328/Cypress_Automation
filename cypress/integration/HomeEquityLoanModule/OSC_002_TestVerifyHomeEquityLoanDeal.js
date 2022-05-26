/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Verify that user is able to create home equity loan deal', function () {

    it('Create a hom equity loan deal and verify', function() {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal() 
        homeEquityLoan.enterLoanAmount()
        cy.Logout()
    })
})

