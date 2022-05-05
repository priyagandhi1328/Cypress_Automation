/// <reference types="cypress" />

import Home_Equity_Loan from "../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Test verify user is able to add asserts', function () {

    beforeEach(function () {
        cy.fixture("homeEquityLoanDetails").then(function (data) {
            this.data = data;
        })
    })

    it('enter subject property and verify', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal()
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
    })

    it('Add assets and verify net worth value', function () {
        homeEquityLoan.addSavingsAssets()
        homeEquityLoan.clickOnDoneButton()
        homeEquityLoan.verifyTotalAssetsValue()
        homeEquityLoan.verifyNetWorthValueForAssets()
    })
})