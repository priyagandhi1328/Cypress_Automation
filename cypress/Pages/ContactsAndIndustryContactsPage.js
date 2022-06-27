const faker = require("faker");
import BaseTest from "./BaseTest"

class Contacts extends BaseTest {

    contactsOption = ":nth-child(15) > .nav-link"
    industryContactsOption = ":nth-child(16) > .nav-link"
    addContactBtn = ".text-right > .btn"
    contactFirstname = "#contactFirstName"
    contactLastname = "#contactLastName"
    contactEmail = "#contactEmail"
    contactHomePhonenumber = '#contactHomePhoneNumber'
    contactSaveBtn = ":nth-child(6) > .text-right > .btn"
    preferredContactMethod = "#preferredContactMethod"
    editButton = ":nth-child(1) > .d-flex > .btn"
    doneBtn = ":nth-child(1) > .d-flex > .btn"
    emailAddress = "//label[contains(text(),'Email address')]//following::input[1]"
    searchContact = "#searchContacts"
    saveContactBtn = "button[class='btn btn-secondary']"
    enterindustries = '.row.mb-2 > .col-12 > #industry'
    enterOccupation = ':nth-child(5) > .col-12 > #industry'
    addBtn = '.row.mb-2 > .col-12 > #industry > #industry___tag_list__ > .b-from-tags-field > .d-flex > .btn'
    addOccupatioBtn = ':nth-child(5) > .col-12 > #industry > #industry___tag_list__ > .b-from-tags-field > .d-flex > .btn'
    addExistingindustries = "(//div[@class='col-12'])[1]//button[@class='btn mb-1 mr-1 btn-secondary btn-sm']"
    addExistingindustriesCount = "(//div[@class='card-body py-2'])[1]//span[@class='badge text-12 mr-1 badge-secondary']"
    addExistingOccupation = "(//div[@class='col-12'])[2]//button[@class='btn mb-1 mr-1 btn-secondary btn-sm']"
    addExistingOccupationCount = "(//div[@class='card-body py-2'])[1]//span[@class='badge text-12 mr-1 badge-secondary']"

    clickOnContacts() {
        cy.get(this.contactsOption).click()
        cy.get("h3[class='text-gray-800 px-4 mb-0']").should('be.visible')
    }

    clickOnIndustryContacts() {
        cy.get(this.industryContactsOption).click()
        cy.get('h3[class="text-gray-800 mb-0"]').should('be.visible')
    }

    clickOnAddContactButton() {
        cy.get(this.addContactBtn).click()
    }

    enterAllTheRequiredFieldsAndVerify() {
        let randomFirstName = faker.name.firstName()
        let randomLastName = faker.name.lastName()
        cy.get(this.contactFirstname).type(randomFirstName)
        cy.get(this.contactLastname).type(randomLastName)
        cy.get(this.contactEmail).type(this.generateRandomEmail())
        cy.get(this.contactHomePhonenumber).type(this.generateTenDigitsRandomNumber())
        cy.get(this.contactSaveBtn).click()
        cy.wait(5000)
        cy.get(":nth-child(1) > .text-decoration-none > .card > .card-header > .text-16").invoke("text").then((text) => text.trim()).and('contain', randomFirstName + " " + randomLastName)
    }

    clickOnRemoveBtn() {
        cy.get(".bi-three-dots").first().click()
        cy.wait(2000)
        cy.xpath("//a[contains(text(),'Remove')]").first().click({ force: true })
    }

    selectPreferredContactAndVerify() {
        let randomFirstName = faker.name.firstName()
        let randomLastName = faker.name.lastName()
        cy.get(this.contactFirstname).type(randomFirstName)
        cy.get(this.contactLastname).type(randomLastName)
        cy.get(this.contactEmail).type(this.generateRandomEmail())
        cy.wait(5000)
        cy.get(this.preferredContactMethod).select("Fax")
        cy.wait(3000)

        //Get the preferred contact value
        cy.get("option[value='FAX']").then(($text) => {
            const contactMethod = $text.text().trim()
            cy.log(contactMethod)
            cy.get(this.contactSaveBtn).click()
            cy.wait(5000)
            cy.xpath("(//dt[contains(text(),'Preferred Contact Method')]//following::dd)[1]").invoke("text").then((text) => text.trim()).and('contain', contactMethod)
        })
    }

    verifyEachDetailsForContact() {
        //enter random firtsname
        let randomFirstName = faker.name.firstName()
        cy.get(this.contactFirstname).type(randomFirstName)
        //enter random lastname
        let randomLastName = faker.name.lastName()
        cy.get(this.contactLastname).type(randomLastName)
        //enter random email
        let randomEmail = faker.internet.email()
        cy.get(this.contactEmail).type(randomEmail)
        //select preferred contact
        cy.get(this.preferredContactMethod).select("Fax")
        //Get the preferred contact value
        cy.get("option[value='FAX']").then(($text) => {
            const contactMethod = $text.text().trim()
            //click on save button
            cy.get(this.contactSaveBtn).click()
            cy.wait(3000)
            //Get the value for contact firstname and lastname and verify
            cy.get(":nth-child(1) > .text-decoration-none > .card > .card-header > .text-16").invoke("text").then((text) => text.trim()).and('contain', randomFirstName + " " + randomLastName)
            //Get the value for contact email and verify
            cy.get(":nth-child(1) > .text-decoration-none > .card > .card-body > :nth-child(1) > .row > :nth-child(1) > .mb-0").invoke("text").then((text) => text.trim()).and('contain', randomEmail)
            //Get the value for preferred contact method
            cy.get(":nth-child(1) > .text-decoration-none > .card > .card-body > :nth-child(2) > .row > :nth-child(1) > .mb-0 > span").invoke("text").then((text) => text.trim()).and('contain', contactMethod)
        })
    }

    openFirstContact() {
        cy.get(":nth-child(1) > .text-decoration-none > .card > .card-body").click()
    }

    clickOnEditButton() {
        cy.get(this.editButton).click()
    }

    editTheFieldAndVerify() {
        let randomEmail = faker.internet.email()
        cy.xpath(this.emailAddress).clear()
        cy.xpath(this.emailAddress).type(randomEmail)
        //click on done button
        cy.get(this.doneBtn).click()
        cy.wait(3000)
        cy.get(".mt-3 > :nth-child(1) > .mb-0").then(($text) => {
            const updatedEmail = $text.text().trim()
            expect(randomEmail).to.not.equal(updatedEmail)
        })
    }

    searchContactByNameAndVerify() {
        //Get the value for contact firstname and lastname 
        cy.get(":nth-child(1) > .text-decoration-none > .card > .card-header > .text-16").invoke("text").then(($text) => {
            const name = $text.trim()
            //search contact by name
            cy.get(this.searchContact).type(name)
            cy.wait(5000)
            cy.get(".card-body").then(($text) => {
                let totalNumberOfContacts = `${$text.length}`
                cy.log(totalNumberOfContacts)

                for (let i = 1; i <= totalNumberOfContacts; i += 1) {
                    cy.xpath("(//span[@class='text-16 font-600 mb-0'])" + `[${i}]`).then(($text) => {
                        const contactName = $text.text().trim()
                        expect(contactName).to.equal(name)
                })}
            })
        })
    }

    searchContactByEmailAndVerify() {
        //Get the value for contact firstname and lastname 
        cy.xpath("((//dd[@class='mb-0 text-15']))[1]").invoke("text").then(($text) => {
            const email = $text.trim()
            //search contact by email
            cy.get(this.searchContact).type(email)
            cy.wait(8000)
            cy.get(".card-body").then(($text) => {
                let totalNumberOfContacts = `${$text.length}`
                cy.log(totalNumberOfContacts)

                for (let i = 1; i <= totalNumberOfContacts; i += 1) {
                    cy.xpath("(//dt[contains(text(),'Email')]//following::dd[1])" + `[${i}]`).then(($text) => {
                        const contactEmail = $text.text().trim()
                        expect(contactEmail).to.equal(email)
                })}
            })
        })
    }

    searchContactByPhoneNumberAndVerify() {
        //Get the value for contact firstname and lastname 
        cy.xpath("(//dt[contains(text(),'Home Phone')]//following::dd[1])[1]").invoke("text").then(($text) => {
            const phoneNumber = $text.trim()
            //search contact by phone number
            cy.get(this.searchContact).type(phoneNumber)
            cy.wait(5000)
            cy.get(".card-body").then(($text) => {
                let totalNumberOfContacts = `${$text.length}`
                cy.log(totalNumberOfContacts)

                for (let i = 1; i <= totalNumberOfContacts; i += 1) {
                    cy.xpath("(//dt[contains(text(),'Home Phone')]//following::dd[1])" + `[${i}]`).then(($text) => {
                        const contactPhoneNumber = $text.text().trim()
                        expect(contactPhoneNumber).to.equal(phoneNumber)
                })}
            })
        })
    }

    verifyEachDetailsForIndustryContact() {
        //enter random firtsname
        let randomFirstName = faker.name.firstName()
        cy.get(this.contactFirstname).type(randomFirstName)
        //enter random lastname
        let randomLastName = faker.name.lastName()
        cy.get(this.contactLastname).type(randomLastName)
        //enter random email
        let randomEmail = faker.internet.email()
        cy.get(this.contactEmail).type(randomEmail)
        //select preferred contact
        cy.get(this.preferredContactMethod).select("Fax")
        //Get the preferred contact value
        cy.get("option[value='FAX']").then(($text) => {
            const contactMethod = $text.text().trim()
            cy.log(contactMethod)
            //click on save button
            cy.get(this.saveContactBtn).click()
            cy.wait(3000)
            cy.reload()
            cy.wait(5000)
            //Get the value for contact firstname and lastname and verify
            cy.get(":nth-child(1) > .card > .card-header > .text-16").invoke("text").then((text) => text.trim()).and('contain', randomFirstName + " " + randomLastName)
            //Get the value for contact email and verify
            cy.get(":nth-child(1) > .card > .card-body > :nth-child(1)").invoke("text").then((text) => text.trim()).and('contain', randomEmail)
            //Get the value for preferred contact method
            cy.get(":nth-child(1) > .card > .card-body > :nth-child(5) > :nth-child(2)").invoke("text").then((text) => text.trim()).and('contain', contactMethod.toUpperCase())
        })
    }

    enterAllTheRequiredFieldsAndVerifyThatUserIsAdded() {
        cy.xpath('//div[@class="card-body py-2"]').then(($text) => {
            let totalNumberOfindustryContacts = `${$text.length}`
            cy.log(totalNumberOfindustryContacts)
            cy.get(this.addContactBtn).click()
            let randomFirstName = faker.name.firstName()
            let randomLastName = faker.name.lastName()
            cy.get(this.contactFirstname).type(randomFirstName)
            cy.get(this.contactLastname).type(randomLastName)
            cy.get(this.contactEmail).type(this.generateRandomEmail())
            cy.contains("Save Contact").click({ force: true })
            const addIndustryContact = parseInt(totalNumberOfindustryContacts) + 1
            cy.log(addIndustryContact)
            expect(parseInt(addIndustryContact)).to.be.greaterThan(parseInt(totalNumberOfindustryContacts))
        })
    }

    removeContactAndVerify() {
        cy.xpath('//div[@class="card-body py-2"]').then(($text) => {
            let totalNumberOfindustryContacts = `${$text.length}`
            cy.log(totalNumberOfindustryContacts)
            cy.get(':nth-child(1) > .card > .card-header > .btn > .bi-trash-fill > g > path').click()
            const removeIndustryContact = parseInt(totalNumberOfindustryContacts) - 1
            cy.log(removeIndustryContact)
            expect(parseInt(removeIndustryContact)).to.be.lessThan(parseInt(totalNumberOfindustryContacts))
        })
    }

    selectPreferredContactAndVerify() {
        cy.get(this.addContactBtn).click()
        let randomFirstName = faker.name.firstName()
        let randomLastName = faker.name.lastName()
        cy.get(this.contactFirstname).type(randomFirstName)
        cy.get(this.contactLastname).type(randomLastName)
        cy.get(this.contactEmail).type(this.generateRandomEmail())
        cy.wait(5000)
        cy.get(this.preferredContactMethod).select("Fax")
        cy.wait(3000)
        cy.get("option[value='FAX']").then(($text) => {
            const contactMethod = $text.text().trim()
            cy.contains("Save Contact").click({ force: true })
            cy.reload()
            cy.log(contactMethod)
            cy.wait(5000)
            cy.get(":nth-child(1) > .card > .card-body > :nth-child(5) > :nth-child(2)").invoke("text").then((text) => text.toLowerCase().trim()).and('contain', contactMethod.toLowerCase())
        })
    }

    verifyUserIsAbleToAddIndustries() {
        cy.get(this.addContactBtn).click()
        let randomFirstName = faker.name.firstName()
        let randomLastName = faker.name.lastName()
        cy.get(this.contactFirstname).type(randomFirstName)
        cy.get(this.contactLastname).type(randomLastName)
        cy.get(this.contactEmail).type(this.generateRandomEmail())
        cy.get(this.enterindustries).type(randomFirstName)
        cy.get(this.addBtn).click()
        cy.contains("Save Contact").click({ force: true })
        cy.reload()
        cy.get(':nth-child(1) > .card > .card-body > :nth-child(6) > .badge').invoke("text").then((text) => text.trim()).and('contain', randomFirstName)
    }

    verifyUserIsAbleToAddOccupation() {
        cy.get(this.addContactBtn).click()
        let randomFirstName = faker.name.firstName()
        let randomLastName = faker.name.lastName()
        cy.get(this.contactFirstname).type(randomFirstName)
        cy.get(this.contactLastname).type(randomLastName)
        cy.get(this.contactEmail).type(this.generateRandomEmail())
        cy.get(this.enterOccupation).type(randomLastName)
        cy.get(this.addOccupatioBtn).click()
        cy.contains("Save Contact").click({ force: true })
        cy.reload()
        cy.get(':nth-child(1) > .card > .card-body > :nth-child(7) > .badge').invoke("text").then((text) => text.trim()).and('contain', randomLastName)
    }

    verifyThatUserIsableToAddexistingIndustriesTags() {
        cy.get(this.addContactBtn).click()
        let randomFirstName = faker.name.firstName()
        let randomLastName = faker.name.lastName()
        cy.get(this.contactFirstname).type(randomFirstName)
        cy.get(this.contactLastname).type(randomLastName)
        cy.get(this.contactEmail).type(this.generateRandomEmail())
        cy.xpath(this.addExistingindustries).then(($text) => {
            let industriesTags = `${$text.length}`
            cy.log(industriesTags)
            for (let i = 1; i <= industriesTags; i += 1) {
                cy.xpath(this.addExistingindustries + `[${i}]`).click()
            }
            cy.contains("Save Contact").click({ force: true })
            cy.wait(5000)
            cy.reload()
            cy.wait(5000)
            cy.xpath(this.addExistingindustriesCount).then(($text) => {
                let industriesTagsCount = `${$text.length}`
                cy.log(industriesTagsCount)
                expect(industriesTags).to.equal(industriesTagsCount)
            })
        })
    }

    verifyThatUserIsableToAddexistingOccupationTags() {
        cy.get(this.addContactBtn).click()
        let randomFirstName = faker.name.firstName()
        let randomLastName = faker.name.lastName()
        cy.get(this.contactFirstname).type(randomFirstName)
        cy.get(this.contactLastname).type(randomLastName)
        cy.get(this.contactEmail).type(this.generateRandomEmail())
        cy.xpath(this.addExistingOccupation).then(($text) => {
            let occupationTag = `${$text.length}`
            cy.log(occupationTag)
            for (let i = 1; i <= occupationTag; i += 1) {
                cy.xpath(this.addExistingOccupation + `[${i}]`).click()
            }
            cy.contains("Save Contact").click({ force: true })
            cy.wait(5000)
            cy.reload()
            cy.wait(5000)
            cy.xpath(this.addExistingOccupationCount).then(($text) => {
                let occupationTagsCount = `${$text.length}`
                cy.log(occupationTagsCount)
                expect(occupationTag).to.equal(occupationTagsCount)
            })
        })
    }

    searchIndustryContactByNameAndVerify() {
        cy.get(this.addContactBtn).click()
        let randomFirstName = faker.name.firstName()
        let randomLastName = faker.name.lastName()
        cy.get(this.contactFirstname).type(randomFirstName)
        cy.get(this.contactLastname).type(randomLastName)
        cy.get(this.contactEmail).type(this.generateRandomEmail())
        cy.get(this.enterOccupation).type(randomLastName)
        cy.get(this.addOccupatioBtn).click()
        cy.contains("Save Contact").click({ force: true })
        cy.reload()
         cy.get(":nth-child(1) > .card > .card-header > .text-16").invoke("text").then(($text) => {
        const name = $text.trim()
            //search contact by name
            cy.get(this.searchContact).type(name)
            cy.wait(5000)
            cy.get(".card-body").then(($text) => {
                let totalNumberOfContacts = `${$text.length}`
                cy.log(totalNumberOfContacts)
                for (let i = 1; i <= totalNumberOfContacts; i += 1) {
                    cy.xpath("(//span[@class='text-16 font-600 mb-0'])" + `[${i}]`).then(($text) => {
                        const contactName = $text.text().trim()
                        expect(contactName).to.equal(name)
                 })}
             })
        })
    }

    searchIndustryContactByEmailAndVerify() {
        cy.get(this.addContactBtn).click()
        let randomFirstName = faker.name.firstName()
        let randomLastName = faker.name.lastName()
        cy.get(this.contactFirstname).type(randomFirstName)
        cy.get(this.contactLastname).type(randomLastName)
        cy.get(this.contactEmail).type(this.generateRandomEmail())
        cy.get(this.enterOccupation).type(randomLastName)
        cy.get(this.addOccupatioBtn).click()
        cy.contains("Save Contact").click({ force: true })
        cy.reload()
        //Get the value for contact firstname and lastname 
        cy.xpath('(//span[@class="text-16 font-600 mb-0"]//following::div/div)[1]').invoke("text").then(($text) => {
            const email = $text.trim()
            cy.get(this.searchContact).type(email)
            cy.wait(5000)
            cy.get(".card-body").then(($text) => {
                let totalNumberOfContacts = `${$text.length}`
                cy.log(totalNumberOfContacts)
                for (let i = 1; i <= totalNumberOfContacts; i += 1) {
                    cy.xpath('(//span[@class="text-16 font-600 mb-0"]//following::div/div)' + `[${i}]`).then(($text) => {
                        const contactEmail= $text.text().trim()
                        expect(contactEmail).to.equal(email)
                })}
            })
        })
    }

    searchIndustryContactByOccupationAndVerify() {
        cy.get(this.addContactBtn).click()
        let randomFirstName = faker.name.firstName()
        let randomLastName = faker.name.lastName()
        cy.get(this.contactFirstname).type(randomFirstName)
        cy.get(this.contactLastname).type(randomLastName)
        cy.get(this.contactEmail).type(this.generateRandomEmail())
        cy.get(this.enterOccupation).type(randomLastName)
        cy.get(this.addOccupatioBtn).click()
        cy.contains("Save Contact").click({ force: true })
        cy.reload()
        //Get the value for contact firstname and lastname 
        cy.xpath('(//span[@class="badge text-12 mr-1 badge-secondary"])[1]').invoke("text").then(($text) => {
            const occupation = $text.trim()
            cy.get(this.searchContact).type(occupation)
            cy.wait(5000)
            cy.get(".card-body").then(($text) => {
                let totalNumberOfOccupation = `${$text.length}`
                cy.log(totalNumberOfOccupation)
                for (let i = 1; i <= totalNumberOfOccupation; i += 1) {
                    cy.xpath('(//span[@class="badge text-12 mr-1 badge-secondary"])' + `[${i}]`).then(($text) => {
                        const contactOccupation= $text.text().trim()
                        expect(contactOccupation).to.equal(occupation)
                })}
            })
        })
    }

    searchIndustryContactByIndustryAndVerify() {
        cy.get(this.addContactBtn).click()
        let randomFirstName = faker.name.firstName()
        let randomLastName = faker.name.lastName()
        cy.get(this.contactFirstname).type(randomFirstName)
        cy.get(this.contactLastname).type(randomLastName)
        cy.get(this.contactEmail).type(this.generateRandomEmail())
        cy.get(this.enterindustries).type(randomLastName)
        cy.get(this.addBtn).click()
        cy.contains("Save Contact").click({ force: true })
        cy.wait(5000)
        cy.reload()
        cy.wait(5000)
        //Get the value for contact firstname and lastname 
        cy.xpath('(//span[@class="badge text-12 mr-1 badge-secondary"])[1]').invoke("text").then(($text) => {
            const industry = $text.trim()
            cy.get(this.searchContact).type(industry)
            cy.wait(5000)
            cy.get(".card-body").then(($text) => {
                let totalNumberOfindustry = `${$text.length}`
                cy.log(totalNumberOfindustry)
                for (let i = 1; i <= totalNumberOfindustry; i += 1) {
                    cy.xpath('(//span[@class="badge text-12 mr-1 badge-secondary"])' + `[${i}]`).then(($text) => {
                        const contactIndustry= $text.text().trim()
                        expect(contactIndustry).to.equal(industry)
                })}
            })
        })
    }   
}

export default Contacts