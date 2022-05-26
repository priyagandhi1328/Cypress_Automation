/// <reference types="cypress"/>

import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Verify the valuation for each dropdown value', function () {
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
        homeEquityLoan.addPrimaryAgent()
    })

    it('Select Valuation and Verify', function () {
        homeEquityLoan.verifyValuationForPurviewAWM()
        homeEquityLoan.verifyValuationForApplicationEstimate()
        homeEquityLoan.verifyValuationForDesktopAppraisal()
        homeEquityLoan.verifyValuationForPurviewLower()
        homeEquityLoan.verifyValuationForPurviewUpper()
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})
