/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Purchase from "../../Pages/purchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new Purchase

describe('Verify that user is able to add a commitment conditions', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('Add a commitment conditions', function() {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        purchase.createPurchaseDeal() 
        homeEquityLoan.verifyUserIsAbleToAddCommitmentConditions(this.data.Commitment)
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})