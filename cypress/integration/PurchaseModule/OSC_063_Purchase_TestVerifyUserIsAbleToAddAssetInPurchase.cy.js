/// <reference types="cypress" />

import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Purchase from "../../Pages/PurchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new Purchase

describe('Verify that user is able to Add assets ', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('Enter Subject Property', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        purchase.createPurchaseDeal()
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
        homeEquityLoan.addPrimaryAgent()
    })

    it('Add assets and verify net worth value', function () {
        homeEquityLoan.addSavingsAssets()
        homeEquityLoan.clickOnDoneButton()
        homeEquityLoan.verifyTotalAssetsValue()
        homeEquityLoan.verifyNetWorthValueForAssets()
    })

    it('Logout From website', function () {
        cy.Logout()
     })
})