/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import purchase from "../../Pages/purchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new purchase

describe('Verify user is able to add fees', function () {
    
    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data
        })
    })

    it('Enter Subject Property', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        purchase.createpurchaseDeal()
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
        homeEquityLoan.addPrimaryAgent()
    })

    it('User is able to add fees', function () {
        homeEquityLoan.verifyUserIsAbleToAddFees()
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})
