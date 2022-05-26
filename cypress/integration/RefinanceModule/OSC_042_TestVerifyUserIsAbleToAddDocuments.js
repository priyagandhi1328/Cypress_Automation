/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Refinance from "../../Pages/RefinancePage"

const homeEquityLoan = new Home_Equity_Loan
const refinance = new Refinance

describe('Verify that user is able to add the documents', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data
        })
    })

    it('Add the documents', function() {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        refinance.createRefinanceDeal() 
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
        homeEquityLoan.addPrimaryAgent()
        homeEquityLoan.clickOnEditButton()
        homeEquityLoan.enterValuesUnderValuation(this.data.ApplicantEstimate, this.data.OnSiteAppraisal, this.data.DesktopAppraisal)
        homeEquityLoan.addNewDocument()
        homeEquityLoan.verfyDocumentIsAdded()
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})