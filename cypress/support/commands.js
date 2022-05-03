Cypress.Commands.add('Login', () => {

    const email = Cypress.env("email")
    const password = Cypress.env("password")

    cy.visit(Cypress.env("Url"))
    cy.get("input[type='email']").type(email)
    cy.get("input[type='password']").type(password)
    cy.contains("Log in to Oscar").click()
    cy.wait(5000)
    cy.xpath("//a[contains(text(),'New deal')]").should('be.visible')
})
