/// <reference types="cypress" />
import BaseTest from "../Pages/BaseTest"

class Refinance extends BaseTest {

    dropdownBtn = "button[class='btn dropdown-toggle btn-light dropdown-toggle-split']"
    dropdownValues = "//button[contains(text(),'Refinance')]"

    createRefinanceDeal() {
        cy.get(this.dropdownBtn).click()
        cy.wait(3000)
        cy.xpath(this.dropdownValues).click()
        cy.wait(10000)
        cy.xpath("//h2[contains(text(),'Summary')]//following::dd[1]").should('contain', "Refinance")
    }
}

export default Refinance