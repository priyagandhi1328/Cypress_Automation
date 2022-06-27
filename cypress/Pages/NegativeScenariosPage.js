/// <reference types="cypress" />
import BaseTest from "../Pages/BaseTest"

class Deals extends BaseTest {

    enterFirstName = "input[placeholder='First Name']"
    enterLastname = "input[placeholder='Last Name']"
    enterCellPhoneNumber = '(//input[@placeholder="Number"])[1]'
    enterWorkPhoneNumber = '(//input[@placeholder="Number"])[2]'
    enterEmail = '//input[@aria-invalid="true"]'
    enterDateofBirth = '(//input[@placeholder="MM/DD/YYYY"])[2]'
    enterSIN = "//label[contains(text(),'SIN')]//following::input[1]"
    enterDriverLicence = "//label[contains(text(),'Driver')]//following::input[1]"
    enterTimeAtjobInYear = '(//input[@type="number"])[7]'
    enterTimeInIndustryInYear = '(//input[@type="number"])[8]'

    enterInvalidEmailAndVerify() {
        cy.visit(Cypress.env("Url"))        
        cy.get("input[type='email']").type(this.generateRandomEmail())
        cy.contains("Log in to Oscar").click()
        cy.wait(3000)
        cy.get(".alert").should("be.visible")
    }

    enterInvalidPasswordAndVerify() {     
        cy.get("input[type='password']").type(this.generateFiveDigitsRandomNumber())
        cy.contains("Log in to Oscar").click()
        cy.wait(3000)
        cy.get(".alert").should("be.visible")
    }

    verifyWarningMessagesForFirstnameAndLastname(Firstname, Lastname) {
        cy.wait(5000)
        cy.contains('create a new contact').click()
        cy.xpath("//p[contains(text(),'First name is required.')]").should('contain', "First name is required.")
        cy.xpath("//p[contains(text(),'Last name is required.')]").should('contain', "Last name is required.")
        cy.get(this.enterFirstName).type(Firstname)
        cy.xpath("//p[contains(text(),'First name is required.')]").should('not.exist')
        cy.get(this.enterLastname).clear()
        cy.wait(3000)
        cy.get(this.enterLastname).type(Lastname)
        cy.xpath("//p[contains(text(),'Last name is required.')]").should('not.exist')
    }

    verifyWarningMessageForPhoneNumberFields(CellPhone, WorkPhone, HomePhone) {
        cy.contains('Applicant Details').click()
        cy.xpath(this.enterCellPhoneNumber).type(this.generateFiveDigitsRandomNumber())
        cy.xpath("//p[contains(text(),'Number should not be less than 10 digits.')]").should('contain', "Number should not be less than 10 digits.")
        cy.xpath(this.enterCellPhoneNumber).type(CellPhone)
        cy.xpath("//p[contains(text(),'Number should not be less than 10 digits.')]").should('not.exist')
        cy.xpath(this.enterWorkPhoneNumber).type(this.generateFiveDigitsRandomNumber())
        cy.xpath("//p[contains(text(),'Number should not be less than 10 digits.')]").should('contain', "Number should not be less than 10 digits.")
        cy.xpath(this.enterWorkPhoneNumber).clear()
        cy.wait(3000)
        cy.xpath(this.enterWorkPhoneNumber).type(WorkPhone)
        cy.xpath("//p[contains(text(),'Number should not be less than 10 digits.')]").should('not.exist')
    }

    verifyWarningMessageForEmailField(Email) {
        cy.xpath(this.enterEmail).type("abc")
        cy.xpath("//div[contains(text(),'Please enter a valid email address')]").should('contain', "Please enter a valid email address")
        cy.xpath(this.enterEmail).type(Email)
    }

    verifyWarningMessagesForDateOfBirthField() {
        cy.contains("Identity").click()
        cy.xpath(this.enterDateofBirth).type(this.randomFutureDate())
        cy.xpath(this.enterSIN).click()
        cy.xpath("//p[contains(text(),'Applicant must be 18 years old.')]").should('contain', "Applicant must be 18 years old.")
        cy.xpath(this.enterDateofBirth).clear().type(this.randomPastDate())
        cy.xpath(this.enterSIN).click()
        cy.wait(5000)
    }

    verifyWarningMessagesForSINField() {
        //verify SIN number for less than 9 digits
        cy.wait(3000)
        cy.xpath(this.enterSIN).type(this.generateFiveDigitsRandomNumber())
        cy.xpath(this.enterDriverLicence).click()
        cy.wait(3000)
        cy.get("svg[class='bi-exclamation-triangle-fill text-danger b-icon bi mr-3']").first().trigger('mouseover').click({force: true})
        cy.get("div[class='tooltip-inner']").should('contain',"SIN is less than 9 digits.")

        //verify SIN number for more than 9 digits
        cy.xpath(this.enterSIN).clear().type(this.generateTenDigitsRandomNumber())
        cy.xpath(this.enterDriverLicence).click()
        cy.get("svg[class='bi-exclamation-triangle-fill text-danger b-icon bi mr-3']").first().trigger('mouseover').click({force: true})
        cy.get("div[class='tooltip-inner']").should('contain',"SIN can not be more than 9 digits.")

        
        //verify SIN number for 9 digits
        cy.xpath(this.enterSIN).clear().type(this.generateNineDigitsRandomNumber())
        cy.xpath(this.enterDriverLicence).click()
        cy.get("svg[class='bi-exclamation-triangle-fill text-danger b-icon bi mr-3']").first().should('not.be.visible')
    }

    verifyWarningMessagesForHomeAddress(TimeAtJob,TimeAtIndustry) {
        cy.get("svg[class='bi-exclamation-triangle-fill text-danger b-icon bi mr-3']").last().trigger('mouseover').click({force: true})
        cy.get("div[class='tooltip-inner']").should('contain',"Less than 3 years of address history")
        cy.contains('Home address').click()
        cy.xpath(this.enterTimeAtjobInYear).type(TimeAtJob)
        cy.xpath(this.enterTimeInIndustryInYear).type(TimeAtIndustry)
        cy.get("svg[class='bi-exclamation-triangle-fill text-danger b-icon bi mr-3']").last().should('not.be.visible')
    }
}

export default Deals