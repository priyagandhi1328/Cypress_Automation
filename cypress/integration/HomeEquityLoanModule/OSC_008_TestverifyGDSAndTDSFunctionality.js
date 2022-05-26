/// <reference types="cypress" />

import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan

describe('Test verify GDS and TDS functionality', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('enter subject property and create new applicant', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal()
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

    it('Logout from website', function () {
        cy.Logout()
    })
})