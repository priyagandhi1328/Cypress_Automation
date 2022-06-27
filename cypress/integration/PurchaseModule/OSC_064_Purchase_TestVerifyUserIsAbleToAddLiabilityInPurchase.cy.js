/// <reference types="cypress" />

import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Purchase from "../../Pages/PurchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new Purchase

describe('Verify that user is able to Add liability', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('enter subject property and verify', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        purchase.createPurchaseDeal()
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
        homeEquityLoan.addPrimaryAgent()
    })

    it('Add liability and verify net worth value', function () {
        homeEquityLoan.addcreditCardLiability()
        homeEquityLoan.clickOnDoneButton()
        homeEquityLoan.verifyTotalLiabilityValue()
        homeEquityLoan.verifyNetWorthValueForLiability()
    })

    it('Logout From website', function () {
        cy.Logout()
     })
})