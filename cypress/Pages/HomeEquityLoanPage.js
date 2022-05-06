import BaseTest from "../Pages/BaseTest"

class Home_Equity_Loan extends BaseTest {

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
    assertvalue = "input[class='form-control']"
    selectCitizenshipBtn = '(//select[@class="custom-select"])[4]'
    selectMaritalStatus = '(//select[@class="custom-select"])[6]'
    enterNumberofDependants = "//label[contains(text(),'Number of dependants')]//following::input[1]"
    enterSIN = "//label[contains(text(),'SIN')]//following::input[1]"
    enterDriverLicence = "//label[contains(text(),'Driver')]//following::input[1]"
    employerAddress = '(//input[@name="searchTerm"])[1]'
    employerName = '(//input[@class="text-16 form-control"])[5]'
    jobTitle = '(//input[@class="text-16 form-control"])[6]'
    selectType = '(//select[@class="text-16 custom-select"])[1]'
    selectOccupation = '(//select[@class="text-16 custom-select"])[2]'
    enterTimeAtjobInYear = '(//input[@type="number"])[3]'
    enterTimeInIndustryInYear = '(//input[@type="number"])[5]'
    enterCurrentAddress = '(//input[@name="searchTerm"])[3]'
    enterStatus = '(//select[@class="custom-select"])[7]'
    enterAdditionalIncomeType = "//label[contains(text(),'Additional income type')]//following::select[1]"
    enterIncomeAmount = "//label[contains(text(),'Amount')]//following::input[1]"
    enterAdditionalIncomePeriod = "//label[contains(text(),'Additional income type')]//following::select[2]"
    enterDateofBirth = '(//input[@placeholder="MM/DD/YYYY"])[2]'

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

    createNewApplicant(Firstname, Lastname, AnnualIncome, CellPhone, Email, WorkPhone) {
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
    }

    enterIdentityDetails(NumberofDependants, Sin, Driverlicense, DateofBirth) {
        cy.contains("Identity").click()
        cy.xpath(this.enterDateofBirth).type(DateofBirth)
        cy.xpath(this.selectCitizenshipBtn).select('CITIZEN')
        cy.xpath(this.selectMaritalStatus).select('Single')
        cy.wait(3000)
        cy.xpath(this.enterNumberofDependants).type(NumberofDependants)
        cy.xpath(this.enterSIN).type(Sin)
        cy.xpath(this.enterDriverLicence).click()
        cy.wait(3000)
        cy.xpath(this.enterDriverLicence).type(Driverlicense)

    }

    enterEmploymentDetails(SubjectProperty, EmployerName, JobTitle, TimeAtJob, TimeAtIndustry) {
        cy.contains("Employment").click()
        cy.xpath(this.employerAddress).click({ force: true })
        cy.xpath(this.employerAddress).type(SubjectProperty)
        cy.xpath(this.employerName).type(EmployerName)
        cy.xpath(this.jobTitle).type(JobTitle)
        cy.xpath(this.selectType).select("PART_TIME")
        cy.xpath(this.selectOccupation).select("MANAGEMENT")
        cy.xpath(this.enterTimeAtjobInYear).type(TimeAtJob)
        cy.xpath(this.enterTimeInIndustryInYear).type(TimeAtIndustry)
    }

    enterHomeAddress() {
        cy.contains('Home address').click()
        cy.get('.mb-1 > div > .btn').click()
        cy.xpath(this.enterStatus).select("Own")
    }

    enterOtherIncome(Amount) {
        cy.contains('Other income').click()
        cy.xpath(this.enterAdditionalIncomeType).select("Salary")
        cy.xpath(this.enterIncomeAmount).type(Amount)
        cy.xpath(this.enterAdditionalIncomePeriod).select("Annual")
        cy.xpath(this.clickOnDone).click()
    }

    clickOnCreditScore() {
        cy.contains('Credit score').click()
        cy.xpath("//button[contains(text(),'Request eID Verification')]").click()
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
        cy.xpath(this.desktopAppraisal).clear()
        cy.wait(3000)
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

    selectExpiryDate() {
        cy.contains("Insurance").click()
        cy.xpath("//label[contains(text(),'Expiry date')]//following::input[1]").type(this.randomDate())
    }

    verifyAvailableEquityValueForApplicantEstimate(ApplicantEstimate) {
        cy.xpath("//dt[contains(text(),'Total mortgages')]//following::dd[1]").then(($text) => {
            const getText = $text.text().trim().replace("$", "").replace(",", "").replace("(", "").replace(")", "").replace(",", "")
            const availableEquity = ApplicantEstimate - getText
            cy.xpath("//dt[contains(text(),'Available equity')]//following::dd[1]").first().invoke("text").then((text) => text.trim().replace("$", "").replace(",", "").replace("(", "").replace(")", "").replace(",", "")).and('contain', availableEquity)
        })
    }

    verifyAvailableEquityValueForOnsiteAppraisal(OnSiteAppraisal) {
        cy.xpath("//dt[contains(text(),'Total mortgages')]//following::dd[1]").then(($text) => {
            const getText = $text.text().trim().replace("$", "").replace(",", "").replace("(", "").replace(")", "").replace(",", "")
            const availableEquity = OnSiteAppraisal - getText
            cy.xpath("//dt[contains(text(),'Available equity')]//following::dd[1]").first().invoke("text").then((text) => text.trim().replace("$", "").replace(",", "").replace("(", "").replace(")", "").replace(",", "")).and('contain', availableEquity)
        })
    }

    verifyAvailableEquityValueForDesktopAppraisal(DesktopAppraisal) {
        cy.xpath("//dt[contains(text(),'Total mortgages')]//following::dd[1]").then(($text) => {
            const getText = $text.text().trim().replace("$", "").replace(",", "").replace("(", "").replace(")", "").replace(",", "")
            const availableEquity = DesktopAppraisal - getText
            cy.xpath("//dt[contains(text(),'Available equity')]//following::dd[1]").first().invoke("text").then((text) => text.trim().replace("$", "").replace(",", "").replace("(", "").replace(")", "").replace(",", "")).and('contain', availableEquity)
        })
    }

    verifyLTVRatioForApplicantEstimate(ApplicantEstimate) {
        cy.xpath("//dt[contains(text(),'Total mortgages')]//following::dd[1]").then(($text) => {
            const totalMortgagesValue = $text.text().trim().replace("$", "").replace(",", "").replace("(", "").replace(")", "").replace(",", "")
            const LTVRatio = (totalMortgagesValue / ApplicantEstimate) * 100
            let roundOffValue = Math.round(LTVRatio)
            cy.xpath("//dt[contains(text(),'Total LTV')]//following::dd[1]").invoke("text").then((text) => text.trim().replace("%", "").replace(",", "")).and('contain', roundOffValue)
        })
    }

    verifyLTVRatioForOnSiteAppraisal(OnSiteAppraisal) {
        cy.xpath("//dt[contains(text(),'Total mortgages')]//following::dd[1]").then(($text) => {
            const totalMortgagesValue = $text.text().trim().replace("$", "").replace(",", "").replace("(", "").replace(")", "").replace(",", "")
            const LTVRatio = (totalMortgagesValue / OnSiteAppraisal) * 100
            let roundOffValue = Math.round(LTVRatio)
            cy.xpath("//dt[contains(text(),'Total LTV')]//following::dd[1]").invoke("text").then((text) => text.trim().replace("%", "").replace(",", "")).and('contain', roundOffValue)
        })
    }

    verifyLTVRatioForDesktopappraisal(DesktopAppraisal) {
        cy.xpath("//dt[contains(text(),'Total mortgages')]//following::dd[1]").then(($text) => {
            const totalMortgagesValue = $text.text().trim().replace("$", "").replace(",", "").replace("(", "").replace(")", "").replace(",", "")
            const LTVRatio = (totalMortgagesValue / DesktopAppraisal) * 100
            let roundOffValue = Math.round(LTVRatio)
            cy.xpath("//dt[contains(text(),'Total LTV')]//following::dd[1]").invoke("text").then((text) => text.trim().replace("%", "").replace(",", "")).and('contain', roundOffValue)
        })
    }

    addSavingsAssets() {
        cy.contains("Savings").first().click()
        cy.get(this.assertvalue).last().type(this.randomNumber())
        cy.wait(3000)
    }

    addcreditCardLiability() {
        cy.contains("Credit card").first().click()
        cy.xpath("//label[contains(text(),'Balance')]//following::input[1]").type(this.randomNumber())
        cy.wait(3000)
    }

    verifyTotalAssetsValue() {
        cy.xpath("//dt[contains(text(),'Value')]//following::dd[1]").first().then(($text) => {
            const savingsValue = $text.text().trim().replace("$", "").replace(",", "").replace(".00", "")
            cy.log(savingsValue)
            cy.xpath("//dt[contains(text(),'Total assets')]//following::dd[1]").invoke("text").then((text) => text.trim().replace("$", "").replace(",", "")).and('contain', savingsValue)
        })
    }

    verifyTotalLiabilityValue() {
        cy.wait(5000)
        cy.xpath("//dt[contains(text(),'Balance')]//following::dd[1]").last().then(($text) => {
            const creditCardValue = $text.text().trim().replace("$", "").replace(",", "").replace(".00", "")
            cy.log(creditCardValue)
            cy.xpath("//dt[contains(text(),'Total liabilities')]//following::dd[1]").invoke("text").then((text) => text.trim().replace("$", "").replace(",", "")).and('contain', creditCardValue)
        })
    }

    verifyNetWorthValueForAssets() {
        cy.xpath("//dt[contains(text(),'Available equity')]//following::dd[1]").first().then(($text) => {
            var availableEquityValue = $text.text().trim().replace("$", "").replace(",", "").replace("(", "").replace(")", "").replace(",", "")
            cy.log(availableEquityValue)

            cy.xpath("//dt[contains(text(),'Total assets')]//following::dd[1]").invoke("text").then(($text) => {
                var totalAssetsValue = $text.trim().replace("$", "").replace(",", "")
                cy.log(totalAssetsValue)

                var netWorthValue = parseFloat(availableEquityValue) + parseFloat(totalAssetsValue)
                cy.log(netWorthValue)

                cy.get(".card-footer > dl.m-0 > .d-flex > .text-15").invoke("text").then((text) => {
                    var Value = text.trim().replace("$", "").replace(",", "").replace(",", "")
                    var roundOffValue = Math.round(Value)

                    expect(netWorthValue).to.equal(roundOffValue)
                })
            })
        })
    }

    verifyNetWorthValueForLiability() {
        cy.xpath("//dt[contains(text(),'Available equity')]//following::dd[1]").first().then(($text) => {
            const availableEquityValue = $text.text().trim().replace("$", "").replace(",", "").replace("(", "").replace(")", "").replace(",", "")
            cy.log(availableEquityValue)

            cy.xpath("//dt[contains(text(),'Total liabilities')]//following::dd[1]").invoke("text").then(($text) => {
            const totalLiabilityValue = $text.trim().replace("$", "").replace(",", "")
            cy.log(totalLiabilityValue)

            const netWorthValue = parseInt(availableEquityValue) - parseInt(totalLiabilityValue)
            cy.log(netWorthValue)

            cy.get(".card-footer > dl.m-0 > .d-flex > .text-15").invoke("text").then((text) => {
            var Value = text.trim().replace("$", "").replace(",", "").replace(",", "")
            var roundOffValue = Math.round(Value)

            expect(netWorthValue).to.equal(roundOffValue)
            })
        })
        })
    }}

export default Home_Equity_Loan