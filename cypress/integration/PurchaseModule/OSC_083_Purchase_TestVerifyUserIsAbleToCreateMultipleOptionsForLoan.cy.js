/// <reference types="cypress"/>

import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import purchase from "../../Pages/purchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new purchase

describe('Verify user is able to create multiple options for loan', function () {
    
    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('Enter Subject Property', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        purchase.createpurchaseDeal()
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
        homeEquityLoan.addPrimaryAgent()
    })

    it('Create a New Applicant', function () {
        homeEquityLoan.createNewApplicant(this.data.Firstname,
            this.data.Lastname, this.data.AnnualIncome,
            this.data.CellPhone, this.data.Email, this.data.WorkPhone)
        homeEquityLoan.enterIdentityDetails(this.data.NumberofDependants, this.data.Sin, this.data.Driverlicense, this.data.DateofBirth)
        homeEquityLoan.enterEmploymentDetails(this.data.SubjectProperty, this.data.EmployerName, this.data.JobTitle, this.data.TimeAtJob, this.data.TimeAtIndustry)
        homeEquityLoan.enterHomeAddress()
        homeEquityLoan.enterOtherIncome(this.data.Amount)
        homeEquityLoan.clickOnCreditScore()
    })

    it('Add assets and verify net worth value', function () {
        homeEquityLoan.addSavingsAssets()
        homeEquityLoan.clickOnDoneButton()
        homeEquityLoan.verifyTotalAssetsValue()
        homeEquityLoan.verifyNetWorthValueForAssets()
    })

    it('User is able to create multiple loans', function () {
        homeEquityLoan.verifyUserIsAbleToCreateMultipleLoans()
    })

    it('Logout From website', function () {
        cy.Logout()
     })
})
