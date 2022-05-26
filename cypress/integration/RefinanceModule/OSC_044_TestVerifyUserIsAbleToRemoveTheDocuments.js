/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Refinance from "../../Pages/RefinancePage"

const homeEquityLoan = new Home_Equity_Loan
const refinance = new Refinance

describe('Verify user is able to remove all the documents.', function () {

    it('Remove all the documents', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        refinance.createRefinanceDeal() 
        homeEquityLoan.clickOnDocumentationTab()
        homeEquityLoan.clickOnAddSuggestionButton()
        homeEquityLoan.verifyTheLengthOfDocuments()
        homeEquityLoan.removeDocumentsAndVerify()
    })
    
    it('Logout from website', function () {
        cy.Logout()
    })
})
