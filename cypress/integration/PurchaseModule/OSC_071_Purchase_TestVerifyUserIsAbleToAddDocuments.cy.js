/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import purchase from "../../Pages/purchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new purchase

describe('Verify that user is able to add the documents', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data
        })
    })

    it('Add the documents', function() {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        purchase.createpurchaseDeal() 
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