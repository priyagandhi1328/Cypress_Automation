/// <reference types="cypress" />

import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import purchase from "../../Pages/purchasePage"

const homeEquityLoan = new Home_Equity_Loan
const purchase = new purchase

describe('Verify that user is able to calculate GDS and TDs', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('enter subject property and create new applicant', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        purchase.createpurchaseDeal()
        homeEquityLoan.enterSubjectPropertyforGDS(this.data.SubjectPropertyForGDSAndTDS)
        homeEquityLoan.addPrimaryAgent()
        homeEquityLoan.clickOnEditButton()
        homeEquityLoan.enterAnnualTaxAndHeatUnderTaxes()
        homeEquityLoan.clickOnDoneButton()
        homeEquityLoan.createNewApplicant(this.data.Firstname,
            this.data.Lastname, this.data.AnnualIncome,
            this.data.CellPhone, this.data.Email, this.data.WorkPhone)
        homeEquityLoan.clickOnApplicantDoneBtn()
    })

    it('calculate GDS and TDs and verify', function (){
        homeEquityLoan.calculateGDSAndTDSValues()
    })

    it('Logout From website', function () {
        cy.Logout()
     })
})