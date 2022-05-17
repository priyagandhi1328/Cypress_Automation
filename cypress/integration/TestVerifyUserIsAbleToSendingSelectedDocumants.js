/// <reference types="cypress" />
import Home_Equity_Loan from "../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Verify user is able to sending the selected documents', function () {
    
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
        homeEquityLoan.clickOnApplicantDoneBtn()
    })

    it('Verify user is able to sending the selected documents', function () {
        homeEquityLoan.clickOnDocumentationTab()
        homeEquityLoan.clickOnAddSuggestionButton()
        homeEquityLoan.verifyShareBtnIsDisabledOrNot()
        homeEquityLoan.selectAnyOneDocument()
        homeEquityLoan.verifyShareBtnIsDisabledOrNot()
        homeEquityLoan.enterEmailAddress(this.data.Email)
        homeEquityLoan.clickOnSendButton()
    })
})