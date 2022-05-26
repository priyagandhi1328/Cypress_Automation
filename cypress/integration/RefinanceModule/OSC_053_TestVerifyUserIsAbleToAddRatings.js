/// <reference types="cypress" />

import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Refinance from "../../Pages/RefinancePage"

const homeEquityLoan = new Home_Equity_Loan
const refinance = new Refinance

describe('Test verify user is able to add ratings', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('verify user is able to add ratings.', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        refinance.createRefinanceDeal()
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
        homeEquityLoan.addPrimaryAgent()
        homeEquityLoan.verifyUserisAbleToAddRatings()
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})