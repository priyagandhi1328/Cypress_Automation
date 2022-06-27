/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import purchase from "../../Pages/purchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new purchase

describe('Verify that user is able to create online form', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('Create a New Applicant and verify that user is able to create online form ', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        purchase.createpurchaseDeal()
        homeEquityLoan.enterLoanAmount()
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
        homeEquityLoan.addPrimaryAgent()
        homeEquityLoan.createNewApplicant(this.data.Firstname,
            this.data.Lastname, this.data.AnnualIncome,
            this.data.CellPhone, this.data.Email, this.data.WorkPhone)
        homeEquityLoan.enterIdentityDetails(this.data.NumberofDependants, this.data.Sin, this.data.Driverlicense, this.data.DateofBirth)
        homeEquityLoan.enterEmploymentDetails(this.data.SubjectProperty, this.data.EmployerName, this.data.JobTitle, this.data.TimeAtJob, this.data.TimeAtIndustry)
        homeEquityLoan.enterHomeAddress()
        homeEquityLoan.enterOtherIncome(this.data.Amount)
        homeEquityLoan.clickOnCreditScore()
        homeEquityLoan.verifyUserIsAbleCreateOnlineForms()
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})