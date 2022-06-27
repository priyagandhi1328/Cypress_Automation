/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Contacts from "../../Pages/ContactsAndIndustryContactsPage"

const homeEquityLoan = new Home_Equity_Loan
const contacts = new Contacts

describe('Verify each detail for newly added contact', function () {

    it('Verify each detail for newly added contact', function() {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        contacts.clickOnContacts()
        contacts.clickOnAddContactButton()
        contacts.verifyEachDetailsForContact() 
        cy.Logout()
    })
})