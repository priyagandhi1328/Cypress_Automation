/// <reference types="cypress" />

import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Refinance from "../../Pages/RefinancePage"

const homeEquityLoan = new Home_Equity_Loan
const refinance = new Refinance

describe('Verify that user is able to Add liability', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('enter subject property and verify', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        refinance.createRefinanceDeal()
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