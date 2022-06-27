/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import purchase from "../../Pages/purchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new purchase

describe('Verify that user is able to move the documents', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data
        })
    })

    it('Move the documents', function() {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        purchase.createpurchaseDeal()
        homeEquityLoan.addPrimaryAgent()
        homeEquityLoan.createNewApplicant(this.data.Firstname,
            this.data.Lastname, this.data.AnnualIncome,
            this.data.CellPhone, this.data.Email, this.data.WorkPhone)
        homeEquityLoan.clickOnRequestLoanDoneBtn()
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