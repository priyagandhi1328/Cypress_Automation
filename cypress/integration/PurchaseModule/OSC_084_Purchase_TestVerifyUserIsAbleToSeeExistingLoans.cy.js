/// <reference types="cypress" />

import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import purchase from "../../Pages/purchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new purchase

describe('Test verify user is able to see existing mortgages', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('enter values under valuation tab', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        purchase.createpurchaseDeal()
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
        homeEquityLoan.addPrimaryAgent()
    })

    it('Verify That Is Able To See The Existing Mortgages', function () {
        homeEquityLoan.verifyUserIsAbleToSeeExistingLoans()
    })

    it('Logout From website', function () {
        cy.Logout()
    })
})