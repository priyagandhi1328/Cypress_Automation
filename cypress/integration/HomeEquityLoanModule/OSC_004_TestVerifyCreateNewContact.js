/// <reference types="cypress"/>

import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Verify that user is able to create a new contact', function () {
    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('Create a New Applicant', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal()
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
        homeEquityLoan.addPrimaryAgent()
        homeEquityLoan.createNewApplicant(this.data.Firstname,
            this.data.Lastname, this.data.AnnualIncome,
            this.data.CellPhone, this.data.Email, this.data.WorkPhone)
    })

    it('Enter Identity Details', function () {
        homeEquityLoan.enterIdentityDetails(this.data.NumberofDependants, this.data.Sin, this.data.Driverlicense, this.data.DateofBirth)
    })

    it('Enter employment Details', function () {
        homeEquityLoan.enterEmploymentDetails(this.data.SubjectProperty, this.data.EmployerName, this.data.JobTitle,this.data.TimeAtJob, this.data.TimeAtIndustry)
    })

    it('Enter Home Address', function () {
        homeEquityLoan.enterHomeAddress()
    })

    it('Enter Other Income', function () {
        homeEquityLoan.enterOtherIncome(this.data.Amount)
    })

    it('Click on credit score', function () {
        homeEquityLoan.clickOnCreditScore()
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})