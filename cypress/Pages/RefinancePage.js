/// <reference types="cypress" />
import BaseTest from "../Pages/BaseTest"

class Refinance extends BaseTest {

    dropdownBtn = "button[class='btn dropdown-toggle btn-light dropdown-toggle-split']"
    dropdownValues = "//button[contains(text(),'Refinance')]"
    dateOfBirth = '(//input[@placeholder="MM/DD/YYYY"])'
    selectCitizenshipBtn = '(//select[@class="custom-select"])[4]'
    selectMaritalStatus = '(//select[@class="custom-select"])[6]'
    enterNumberofDependants = "//label[contains(text(),'Number of dependants')]//following::input[1]"
    enterSIN = "//label[contains(text(),'SIN')]//following::input[1]"
    enterDriverLicence = "//label[contains(text(),'Driver')]//following::input[1]"
    enterAdditionalIncomeType = "//label[contains(text(),'Additional income type')]//following::select[1]"
    enterIncomeAmount = "//label[contains(text(),'Amount')]//following::input[1]"
    enterAdditionalIncomePeriod = "//label[contains(text(),'Additional income type')]//following::select[2]"
    clickOnDone = "(//button[contains(text(),'Done')])"

    createRefinanceDeal() {
        cy.get(this.dropdownBtn).click()
        cy.wait(3000)
        cy.xpath(this.dropdownValues).click()
        cy.wait(10000)
        cy.xpath("//h2[contains(text(),'Summary')]//following::dd[1]").should('contain', "Refinance")
    }

    enterDateofBirth(DateofBirth) {
        cy.contains("Identity").click()
        cy.xpath(this.dateOfBirth).type(DateofBirth)
    }

    enterHomeAddress() {
        cy.contains('Home address').click()
        cy.get('.mb-1 > div > .btn').click()
    }

    enterOtherIncome(Amount) {
        cy.contains('Other income').click()
        cy.xpath(this.enterAdditionalIncomeType).select("Salary")
        cy.xpath(this.enterIncomeAmount).type(Amount)
        cy.xpath(this.enterAdditionalIncomePeriod).select("Annual")
        cy.xpath(this.clickOnDone).click()
    }
}

export default Refinance