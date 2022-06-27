/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Dashboard from "../../Pages/Dashboardpage"

const homeEquityLoan = new Home_Equity_Loan
const dashboard = new Dashboard


describe('Test Verify Dashboard', function () {

    it('Verify count of BYM under opportunities', function () {
        cy.Login()
        dashboard.verifyNumberOfBYM()
    })
})
