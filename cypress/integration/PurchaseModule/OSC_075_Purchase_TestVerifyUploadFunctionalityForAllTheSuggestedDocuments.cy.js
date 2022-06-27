/// <reference types="cypress" />
import Home_Equity_Loan from "../../PageS/HomeEquityLoanPage"
import purchase from "../../Pages/purchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new purchase

describe('Verify the upload functionality for all the suggested documents.', function () {

    it('Verify the upload functionality for all the suggested documents.', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        purchase.createpurchaseDeal() 
        homeEquityLoan.clickOnDocumentationTab()
        homeEquityLoan.clickOnAddSuggestionIcon()
        homeEquityLoan.verifyTheLengthOfDocuments()
        homeEquityLoan.verifyUploadFunctionalityForAllTheDocuments()
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})