/// <reference types="cypress"/>

import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Verify user is able to add fees', function () {
    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('Enter Subject Property', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal()
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
    })

    it('User is able to add fees', function () {
        homeEquityLoan.verifyUserIsAbleToAddFees()
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})
