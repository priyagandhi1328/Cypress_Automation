/// <reference types="cypress" />
import Home_Equity_Loan from "../../PageS/HomeEquityLoanPage"
import Refinance from "../../Pages/RefinancePage"

const homeEquityLoan = new Home_Equity_Loan
const refinance = new Refinance

describe('Verify the upload functionality for all the suggested documents.', function () {

    it('Verify the upload functionality for all the suggested documents.', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        refinance.createRefinanceDeal() 
        homeEquityLoan.clickOnDocumentationTab()
        homeEquityLoan.clickOnAddSuggestionIcon()
        homeEquityLoan.verifyTheLengthOfDocuments()
        homeEquityLoan.verifyUploadFunctionalityForAllTheDocuments()
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})