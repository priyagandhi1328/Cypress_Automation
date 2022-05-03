/// <reference types="cypress"/>

import Home_Equity_Loan from "../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Verify that user is able to create a new contact', function () {
    beforeEach(function () {
        cy.fixture("homeEquityLoanDetails").then(function (data) {
            this.data = data;
        })
    })

    it('Create a New Applicant', function () {
        cy.visit("/login")
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal() 
        homeEquityLoan.createNewApplicant(this.data.Firstname,
            this.data.Lastname, this.data.AnnualIncome,
            this.data.CellPhone, this.data.Email,this.data.WorkPhone)
      })
})