/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Verify the upload functionality for all the suggested documents.', function () {

    it('Verify the upload functionality for all the suggested documents.', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal() 
        homeEquityLoan.clickOnDocumentationTab()
        homeEquityLoan.clickOnAddSuggestionIcon()
        homeEquityLoan.verifyTheLengthOfDocuments()
        homeEquityLoan.verifyUploadFunctionalityForAllTheDocuments()
        cy.Logout()
    })
})