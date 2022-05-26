/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Verify that user is able to add a disclosure', function () {
    
    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('Add a disclosue', function() {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal() 
        homeEquityLoan.verifyUserIsAbleToAddDisclosure(this.data.Disclosure)
    })

    it('Logout From website', function () {
        cy.Logout()
    })
})