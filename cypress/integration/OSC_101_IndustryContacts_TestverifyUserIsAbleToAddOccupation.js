/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Contacts from "../../Pages/ContactsAndIndustryContactsPage"

const homeEquityLoan = new Home_Equity_Loan
const industryContacts = new Contacts


describe('Test Verify user is able to add Occupations', function () {

    it('Verify that user is able to add Occupations ', function () {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        industryContacts.clickOnIndustryContacts()
        industryContacts.verifyUserIsAbleToAddOccupation()
        cy.Logout()
    })
})
