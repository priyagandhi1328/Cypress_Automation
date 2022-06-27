/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import purchase from "../../Pages/purchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new purchase

describe('Verify user is able to sending the selected documents', function () {
    
    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('enter subject property and Create a New Applicant', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        purchase.createpurchaseDeal()
        homeEquityLoan.enterSubjectProperty(this.data.SubjectProperty)
        homeEquityLoan.addPrimaryAgent()
        homeEquityLoan.createNewApplicant(this.data.Firstname,
            this.data.Lastname, this.data.AnnualIncome,
            this.data.CellPhone, this.data.Email, this.data.WorkPhone)
        homeEquityLoan.clickOnApplicantDoneBtn()
    })

    it('Verify user is able to sending the selected documents', function () {
        homeEquityLoan.clickOnDocumentationTab()
        homeEquityLoan.addSuggestionDocsAfterApplicant()
        homeEquityLoan.verifyShareBtnIsDisabledOrNot()
        homeEquityLoan.selectAnyOneDocument()
        homeEquityLoan.verifyShareBtnIsDisabledOrNot()
        homeEquityLoan.enterEmailAddress(this.data.Email)
        homeEquityLoan.clickOnSendButton()
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})