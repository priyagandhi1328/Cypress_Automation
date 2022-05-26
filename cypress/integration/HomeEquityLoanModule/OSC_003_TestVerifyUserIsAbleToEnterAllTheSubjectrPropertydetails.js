/// <reference types="cypress" />

import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Test verify user is able to enter all the details of subject property', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('enter values under valuation tab', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal()
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
        homeEquityLoan.clickOnEditButton()
        homeEquityLoan.enterValuesUnderValuation(this.data.ApplicantEstimate, this.data.OnSiteAppraisal, this.data.DesktopAppraisal)
    })

    it('enter the expiration date', function () {
        homeEquityLoan.selectExpiryDate()
        homeEquityLoan.clickOnDoneButton()
    })

    it('verify all the valution under valution tab', function () {
        homeEquityLoan.verifyApplicantEstimateValue(this.data.ApplicantEstimateValue, this.data.ApplicantEstimate)
        homeEquityLoan.verifyOnSiteAppraisalValue(this.data.OnSiteAppraisalValue, this.data.OnSiteAppraisal)
        homeEquityLoan.verifyDesktopAppraisalValue(this.data.DesktopAppraisalValue, this.data.DesktopAppraisal)
        cy.Logout()
    })
})