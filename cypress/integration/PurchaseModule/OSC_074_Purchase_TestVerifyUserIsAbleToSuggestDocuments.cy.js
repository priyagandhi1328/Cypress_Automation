/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import purchase from "../../Pages/purchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new purchase

describe('Verify user is able to suggest the document', function () {

    it('Suggest the document', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        purchase.createpurchaseDeal() 
        homeEquityLoan.clickOnDocumentationTab()
        homeEquityLoan.clickOnAddSuggestionIcon()
        homeEquityLoan.verifyTheLengthOfDocuments()
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})