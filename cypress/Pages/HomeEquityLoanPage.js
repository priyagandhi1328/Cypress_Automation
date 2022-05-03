
class Home_Equity_Loan {

    menuIcon = ".bi-list"
    dropdownBtn = "button[class='btn dropdown-toggle btn-light dropdown-toggle-split']"
    dropdownValues = "//button[contains(text(),'Home equity loan')]"
    subjectProperty = "input[name='searchTerm']"
    changePropertyBtn = "//button[contains(text(),'Change property')]"
    editButton = "button[class='btn mx-1 btn-light']"
    doneButton = "button[class='btn mx-1 btn-primary']"
    applicantEstimate = "//label[contains(text(),'Applicant estimate')]//following::input[1]"
    onSiteAppraisal = "//label[contains(text(),'On-site appraisal')]//following::input[1]"
    desktopAppraisal = "//label[contains(text(),'Desktop appraisal')]//following::input[1]"
    enterAmount = "input[type='tel']"
    loanAmountText = "//dt[contains(text(),'Loan amount')]//following::span[1]"
    enterFirstName = "input[placeholder='First Name']"
    enterLastname = "input[placeholder='Last Name']"
    enterAnnualIncome = "(//label[contains(text(), 'Annual income')]//following::input)[1]"
    enterCellPhoneNumber = '(//input[@placeholder="Number"])[1]'
    enterWorkPhoneNumber = '(//input[@placeholder="Number"])[2]'
    enterEmail = '//input[@aria-invalid="true"]'
    clickOnDone = "(//button[contains(text(),'Done')])[2]"

    clickOnMenuIcon() {
        cy.get(this.menuIcon).click()
    }

    createHomeEquityLoanDeal() {
        cy.get(this.dropdownBtn).click()
        cy.wait(3000)
        cy.xpath(this.dropdownValues).click()
        cy.wait(10000)
        cy.xpath("//h2[contains(text(),'Summary')]//following::dd[1]").should('contain', "Home equity loan")
    }

    enterSubjectProperty(SubjectProperty) {
        cy.get(this.subjectProperty).first().type(SubjectProperty)
        cy.contains(SubjectProperty).click()
        cy.wait(10000)
        cy.xpath(this.changePropertyBtn).should('be.visible')
        cy.wait(5000)
    }

    enterLoanAmount() {
        const uuid = () => Cypress._.random(50000, 50150)
        const id = uuid()
        const testname = id
        cy.wait(3000)
        cy.get(this.enterAmount).first().type(testname)
        cy.get(this.doneButton).click()
        cy.wait(5000)
        cy.xpath(this.loanAmountText).invoke("text").then((text) => text.trim().replace("$", "").replace(",", "")).and('contain', testname)
    }

    createNewApplicant(Firstname, Lastname, AnnualIncome, CellPhone, Email,WorkPhone) {
        cy.wait(5000)
        cy.contains('create a new contact').click()
        cy.get(this.enterFirstName).type(Firstname)
        cy.get(this.enterLastname).clear()
        cy.wait(3000)
        cy.get(this.enterLastname).type(Lastname)
        cy.xpath(this.enterAnnualIncome).type(AnnualIncome)
        cy.contains("good").click()
        cy.contains('Applicant Details').click()
        cy.xpath(this.enterEmail).type(Email)
        cy.xpath(this.enterCellPhoneNumber).type(CellPhone)
        cy.xpath(this.enterWorkPhoneNumber).clear()
        cy.wait(3000)
        cy.xpath(this.enterWorkPhoneNumber).type(WorkPhone)
        cy.xpath(this.clickOnDone).click()    
    }

    clickOnEditButton() {
        cy.get(this.editButton).click()
    }

    clickOnDoneButton() {
        cy.get(this.doneButton).last().click()
    }

    enterValuesUnderValuation(ApplicantEstimate, OnSiteAppraisal, DesktopAppraisal) {
        cy.contains("Valuation").click()
        cy.xpath(this.applicantEstimate).type(ApplicantEstimate)
        cy.xpath(this.onSiteAppraisal).type(OnSiteAppraisal)
        cy.xpath(this.desktopAppraisal).type(DesktopAppraisal)
    }

    verifyApplicantEstimateValue(ApplicantEstimateValue, ApplicantEstimate) {
        cy.contains("Purview AVM").first().click()
        cy.contains(ApplicantEstimateValue).click()
        cy.wait(5000)
        cy.xpath("//span[contains(text(),'Applicant estimate')]//following::dd[1]").invoke("text").then((text) => text.trim().replace("$", "").replace(",", "")).and('contain', ApplicantEstimate)
    }

    verifyOnSiteAppraisalValue(OnSiteAppraisalValue, OnSiteAppraisal) {
        cy.contains("Applicant estimate").first().click()
        cy.contains(OnSiteAppraisalValue).click()
        cy.wait(5000)
        cy.xpath("//span[contains(text(),'Applicant estimate')]//following::dd[1]").invoke("text").then((text) => text.trim().replace("$", "").replace(",", "")).and('contain', OnSiteAppraisal)
    }

    verifyDesktopAppraisalValue(DesktopAppraisalValue, DesktopAppraisal) {
        cy.contains("On-site appraisal").first().click()
        cy.contains(DesktopAppraisalValue).click()
        cy.wait(5000)
        cy.xpath("//span[contains(text(),'Applicant estimate')]//following::dd[1]").invoke("text").then((text) => text.trim().replace("$", "").replace(",", "")).and('contain', DesktopAppraisal)
    }
}

export default Home_Equity_Loan