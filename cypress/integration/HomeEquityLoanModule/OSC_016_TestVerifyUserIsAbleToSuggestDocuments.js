/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Verify user is able to suggest the document', function () {

    it('Verify user is able to suggest the document', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal() 
        homeEquityLoan.clickOnDocumentationTab()
        homeEquityLoan.clickOnAddSuggestionIcon()
        homeEquityLoan.verifyTheLengthOfDocuments()
        cy.Logout()
    })
})