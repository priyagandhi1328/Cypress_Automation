/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import purchase from "../../Pages/purchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new purchase

describe('Verify user is able to remove all the documents.', function () {

    it('Remove all the documents', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        purchase.createpurchaseDeal() 
        homeEquityLoan.clickOnDocumentationTab()
        homeEquityLoan.clickOnAddSuggestionButton()
        homeEquityLoan.verifyTheLengthOfDocuments()
        homeEquityLoan.removeDocumentsAndVerify()
    })
    
    it('Logout from website', function () {
        cy.Logout()
    })
})
