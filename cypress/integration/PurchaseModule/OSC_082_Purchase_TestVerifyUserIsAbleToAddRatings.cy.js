/// <reference types="cypress" />

import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Purchase from "../../Pages/purchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new Purchase

describe('Test verify user is able to add ratings', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('verify user is able to add ratings.', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        purchase.createPurchaseDeal()
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
        homeEquityLoan.addPrimaryAgent()
        homeEquityLoan.verifyUserisAbleToAddRatings()
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})