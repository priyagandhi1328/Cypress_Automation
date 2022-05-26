/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Verify user is able to move the documents', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('Verify user is able to move the documents', function() {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal()
        homeEquityLoan.addPrimaryAgent()
        homeEquityLoan.createNewApplicant(this.data.Firstname,
            this.data.Lastname, this.data.AnnualIncome,
            this.data.CellPhone, this.data.Email, this.data.WorkPhone)
        homeEquityLoan.clickOnApplicantDoneBtn()
        homeEquityLoan.addNewDocument()
        homeEquityLoan.verfyDocumentIsAdded()
        homeEquityLoan.verifyAllDocumentsAreListed()
        homeEquityLoan.verifyUserIsAbleToMoveDocument()          
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})