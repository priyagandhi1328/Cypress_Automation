/// <reference types="cypress" />

import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Test verify user is able to add ratings', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('verify user is able to add ratings.', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal()
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
        homeEquityLoan.verifyUserisAbleToAddRatings()
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})