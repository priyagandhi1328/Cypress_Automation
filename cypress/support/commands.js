require('cy-verify-downloads').addCustomCommand();

Cypress.Commands.add('Login', () => {

    const email = Cypress.env("Oscar_Email")
    const password = Cypress.env("Oscar_Password")

    // Cypress.env()
    // const email = Cypress.env("Email")
    // const password = Cypress.env("Password")

    cy.visit(Cypress.env("Url"))
    cy.get("input[type='email']").type(email)
    cy.get("input[type='password']").type(password)
    cy.contains("Log in to Oscar").click()
    cy.wait(5000)
    cy.xpath("//a[contains(text(),'New deal')]").should('be.visible')
})

Cypress.Commands.add('Logout', () => {
    cy.get('.ml-1').click()
    cy.contains("Log out").click()
    cy.contains("Log in to Oscar").should('be.visible')
})