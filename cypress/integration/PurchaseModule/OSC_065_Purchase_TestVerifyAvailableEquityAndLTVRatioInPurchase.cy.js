/// <reference types="cypress" />

import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Purchase from "../../Pages/PurchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new Purchase

describe('Verify that user is able to Add liability', function () {
    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('enter values under valuation tab', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        purchase.createPurchaseDeal()
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
        homeEquityLoan.addPrimaryAgent()
        homeEquityLoan.clickOnEditButton()
        homeEquityLoan.enterValuesUnderValuation(this.data.ApplicantEstimate, this.data.OnSiteAppraisal, this.data.DesktopAppraisal)
        homeEquityLoan.clickOnDoneButton()
    })

    it('Verify available equity value and LTV ratio for appraisal estimate', function () {
        homeEquityLoan.verifyApplicantEstimateValue(this.data.ApplicantEstimateValue, this.data.ApplicantEstimate)
        homeEquityLoan.verifyAvailableEquityValueForApplicantEstimate(this.data.ApplicantEstimate)
        homeEquityLoan.verifyLTVRatioForApplicantEstimate(this.data.ApplicantEstimate)
    })

    it('Verify available equity value and LTV ratio for onsite appraisal', function () {
        homeEquityLoan.verifyOnSiteAppraisalValue(this.data.OnSiteAppraisalValue, this.data.OnSiteAppraisal)
        homeEquityLoan.verifyAvailableEquityValueForOnsiteAppraisal(this.data.OnSiteAppraisal)
        homeEquityLoan.verifyLTVRatioForOnSiteAppraisal(this.data.OnSiteAppraisal)
    })

    it('Verify available equity value and LTV ratio for desktop appraisal', function () {
        homeEquityLoan.verifyDesktopAppraisalValue(this.data.DesktopAppraisalValue, this.data.DesktopAppraisal)
        homeEquityLoan.verifyAvailableEquityValueForDesktopAppraisal(this.data.DesktopAppraisal)
        homeEquityLoan.verifyLTVRatioForDesktopappraisal(this.data.DesktopAppraisal)
    })

    it('Logout From website', function () {
       cy.Logout()
    })
})