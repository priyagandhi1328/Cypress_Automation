/// <reference types="cypress" />
import Home_Equity_Loan from "../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Verify user is able to view the closing packages under submission', function () {
    
    beforeEach(function () {
        cy.fixture("homeEquityLoanDetails").then(function (data) {
            this.data = data;
        })
    })

    it('enter subject property and Create a New Applicant', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal()
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
        homeEquityLoan.createNewApplicant(this.data.Firstname,
            this.data.Lastname, this.data.AnnualIncome,
            this.data.CellPhone, this.data.Email, this.data.WorkPhone)
        homeEquityLoan.enterIdentityDetails(this.data.NumberofDependants, this.data.Sin, this.data.Driverlicense, this.data.DateofBirth)
        homeEquityLoan.enterEmploymentDetails(this.data.SubjectProperty, this.data.EmployerName, this.data.JobTitle,this.data.TimeAtJob, this.data.TimeAtIndustry)
        homeEquityLoan.enterHomeAddress()
        homeEquityLoan.enterOtherIncome(this.data.Amount)
        homeEquityLoan.clickOnCreditScore()
    })

    it('Verify user is able to view the closing packages under submission', function () {
        homeEquityLoan.clickOnSubmissionTab()
        homeEquityLoan.verifyAllTheClosingPackagesAreDisplayed()
    })
})