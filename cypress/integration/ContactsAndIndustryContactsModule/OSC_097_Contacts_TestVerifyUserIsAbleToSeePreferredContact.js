/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Contacts from "../../Pages/ContactsAndIndustryContactsPage"

const homeEquityLoan = new Home_Equity_Loan
const contacts = new Contacts

describe('Verify that user is able to see preferred contact', function () {

    it('Verify that user is able to see preferred contact', function() {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        contacts.clickOnContacts()
        contacts.clickOnAddContactButton()
        contacts.selectPreferredContactAndVerify() 
        cy.Logout()
    })
})
