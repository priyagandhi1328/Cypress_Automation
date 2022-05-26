/// <reference types="cypress" />

describe('Login into Oscar', function () {

    it('Login Into Oscar Website', function () {
        cy.Login()
        cy.Logout()
    })
})