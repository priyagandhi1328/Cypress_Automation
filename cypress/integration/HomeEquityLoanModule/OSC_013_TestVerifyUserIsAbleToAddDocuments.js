/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Verify that user is able to add the documents', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('Verify that user is able to add the documents', function() {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal() 
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
        homeEquityLoan.clickOnEditButton()
        homeEquityLoan.enterValuesUnderValuation(this.data.ApplicantEstimate, this.data.OnSiteAppraisal, this.data.DesktopAppraisal)
        homeEquityLoan.addNewDocument()
        homeEquityLoan.verfyDocumentIsAdded()
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})