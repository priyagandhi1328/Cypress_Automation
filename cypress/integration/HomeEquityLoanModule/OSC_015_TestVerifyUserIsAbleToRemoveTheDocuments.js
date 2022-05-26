/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Verify user is able to remove all the documents.', function () {

    it('Verify user is able to remove all the documents', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal() 
        homeEquityLoan.clickOnDocumentationTab()
        homeEquityLoan.clickOnAddSuggestionButton()
        homeEquityLoan.verifyTheLengthOfDocuments()
        homeEquityLoan.removeDocumentsAndVerify()
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})