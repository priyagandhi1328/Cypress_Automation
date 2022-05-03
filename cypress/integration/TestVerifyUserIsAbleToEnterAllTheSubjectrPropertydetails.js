/// <reference types="cypress" />

import Home_Equity_Loan from "../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Test verify user is able to enter all the details of subject property', function () {

    beforeEach(function () {
        cy.fixture("homeEquityLoanDetails").then(function (data) {
            this.data = data;
        })
    })

    it('verify all the values under valution', function () {
        cy.visit("/login")
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal() 
    //    // homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
    //     //homeEquityLoan.clickOnEditButton()
    //     homeEquityLoan.enterValuesUnderValuation(this.data.ApplicantEstimate, this.data.OnSiteAppraisal, this.data.DesktopAppraisal)
    //     homeEquityLoan.clickOnDoneButton()
    //     homeEquityLoan.verifyApplicantEstimateValue(this.data.ApplicantEstimateValue,this.data.ApplicantEstimate)
    //     homeEquityLoan.verifyOnSiteAppraisalValue(this.data.OnSiteAppraisalValue,this.data.OnSiteAppraisal)
    //     homeEquityLoan.verifyDesktopAppraisalValue(this.data.DesktopAppraisalValue,this.data.DesktopAppraisal)
    })
})