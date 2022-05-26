/// <reference types="cypress" />

import Deals from "../../Pages/NegativeScenariosPage"
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"

const homeEquityLoan = new Home_Equity_Loan
const deals = new Deals

describe('Test verify all the warning messages for new applicant.', function () {

    beforeEach(function () {
        cy.fixture("OscarData").then(function (data) {
            this.data = data;
        })
    })

    it('Create home equity loan deal', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        homeEquityLoan.createHomeEquityLoanDeal()
    })

    it('verify warnings messages for applicant', function () {
        deals.verifyWarningMessagesForFirstnameAndLastname(this.data.Firstname, this.data.Lastname)
        deals.verifyWarningMessageForPhoneNumberFields(this.data.CellPhone, this.data.WorkPhone)
        deals.verifyWarningMessageForEmailField(this.data.Email)
        deals.verifyWarningMessagesForDateOfBirthField()
        deals.verifyWarningMessagesForSINField()
        deals.verifyWarningMessagesForHomeAddress(this.data.TimeAtJob, this.data.TimeAtIndustry)
    })

    it('Logout from website', function () {
        cy.Logout()
    })
})