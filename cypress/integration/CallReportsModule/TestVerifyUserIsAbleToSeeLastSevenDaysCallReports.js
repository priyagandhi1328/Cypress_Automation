/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Callreports from "../../Pages/CallReportsPage"

const homeEquityLoan = new Home_Equity_Loan
const callReports = new Callreports

describe('Verify that user is able to see last 7 days call reports.', function () {

    it('Verify that user is able to see last 7 days call reports.', function() {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        callReports.clickOnCallreports() 
        callReports.selectLastSevenDaysCallsFilterAndVerify()
        cy.Logout()
    })
})
