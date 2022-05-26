/// <reference types="cypress" />

import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Test verify user is able to add liability', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('enter subject property and verify', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal()
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
    })

    it('Add liability and verify net worth value', function () {
        homeEquityLoan.addcreditCardLiability()
        homeEquityLoan.clickOnDoneButton()
        homeEquityLoan.verifyTotalLiabilityValue()
        homeEquityLoan.verifyNetWorthValueForLiability()
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})