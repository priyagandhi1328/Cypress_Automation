/// <reference types="cypress" />

import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Purchase from "../../Pages/PurchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new Purchase

describe('Verify that user is able to create purchase deal', function () {

    it('Create a Purchase deal and verify', function() {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        purchase.createPurchaseDeal()
        homeEquityLoan.enterLoanAmount()
    })

    it('Logout From website', function () {
        cy.Logout()
     })
})

