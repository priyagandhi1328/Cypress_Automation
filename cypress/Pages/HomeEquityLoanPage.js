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
    creditScorebtn = "(//span[contains(text(),'Credit score')])[2]"
    documentationTab = ':nth-child(4) > .nav-link'
    addSuggestionButton = "button[class='btn text-center mt-2 ml-0 btn-outline-secondary']"
    selectAllCheckbox = "(//input[@type='checkbox'])[1]"
    deleteIcon = "[title='Remove documents'] > .btn"
    removeBtn = ".btn-danger"
    enterAnnualTax = "//label[contains(text(),'Annual tax')]//following::input[1]"
    moveDocument = "Move document"
    selectMovingDocument = "//label[contains(text(),'Appraisal')]"
    allDocuments = "//div[@class='ml-4 mb-3']"
    submissionType = "(//div[@class='bv-no-focus-ring'])[1]"
    selectDocuments = "(//button[contains(text(),'Add documents')])[2]"
    uploadFirstDocument = "(//label[@data-browse='Browse'])[1]"
    threeDots = "(//button[@type='button'])[14]"
    clickOnNotes = "//a[contains(text(),'Notes')]";
    clickOnAddNewNotes = "//button[contains(text(),'Add a note')]";
    addNote = "//textarea[@class='form-control']";
    clickOnSave = "//button[contains(text(),'Save')]";
    documentationTab = ":nth-child(4) > .nav-link";
    clickOnAddDocumentButon = ".row > .text-right > div > .btn"
    addAppraisalDocument = ":nth-child(5) > .custom-control > .custom-control-label"
    selectDocuments = "(//button[contains(text(),'Add documents')])[2]"
    addAmortizationSchedule = ":nth-child(4) > .custom-control > .custom-control-label"
    enterEmailAddressUnderShare = "//label[contains(text(),'Email address')]//following::input"
    clickOnSuggestDocsIcon = "[title='Suggest documents'] > .btn"
    submissionTab = ":nth-child(6) > .nav-link"
    documentPackageCheckbox = "(//input[@class='custom-control-input'])[1]"

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
        cy.xpath(this.creditScorebtn).click()
        cy.xpath("//button[contains(text(),'Request eID Verification')]").click()
        cy.get('.btn-primary > span').click()
    }

    clickOnEditButton() {
        cy.get(this.editButton).click()
    }

    clickOnDoneButton() {
        cy.get(this.doneButton).last().click()
    }

    clickOnApplicantDoneBtn() {
        cy.xpath(this.clickOnDone).click()
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
        cy.get(this.assertvalue).last().type(this.generateFiveDigitsRandomNumber())
        cy.wait(3000)
    }

    addcreditCardLiability() {
        cy.contains("Credit card").first().click()
        cy.xpath("//label[contains(text(),'Balance')]//following::input[1]").type(this.generateFiveDigitsRandomNumber())
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
    }

    clickOnDocumentationTab() {
        cy.get(this.documentationTab).click()
    }

    clickOnAddSuggestionButton() {
        cy.wait(5000)
        cy.get(this.addSuggestionButton).click({ force: true })
        cy.xpath("//div[contains(text(),'5 document requirements added.')]").should('be.visible')
    }

    verifyTheLengthOfDocuments() {
        cy.xpath("//div[@class='mb-4 border rounded pt-3 bg-gray-200 border-gray-400']").should('have.length', 5)
        cy.xpath("//div[@class='mb-4 border rounded pt-3 bg-gray-200 border-gray-400']").should('be.visible')
    }

    removeDocumentsAndVerify() {
        cy.wait(5000)
        cy.xpath(this.selectAllCheckbox).click({ force: true})
        cy.get(this.deleteIcon).click()
        cy.get(this.removeBtn).click()
    }

    addNewDocument() {
        cy.get(this.documentationTab).click()
        cy.get(this.clickOnAddDocumentButon).click()
        cy.get(this.addAppraisalDocument).click()
        cy.get(this.addAmortizationSchedule).click()
        cy.xpath(this.selectDocuments).click()
    }

    verfyDocumentIsAdded() {
        cy.contains('Appraisal').should('be.visible')
    }

    verifyAllDocumentsAreListed() {
        cy.contains('Add documents').click()
        cy.xpath(this.allDocuments).should('have.length', 53)
        cy.get('.close').click()
    }

    verifyUserIsAbleToMoveDocument() {
        cy.xpath(this.uploadFirstDocument).selectFile('cypress/Files/CreditConsent.pdf')
        cy.wait(7000)
        cy.xpath(this.threeDots).click()
        cy.contains('Move document').click()
        cy.xpath(this.selectMovingDocument).click()
        cy.contains('OK').click()
        cy.get('.py-2').should('be.visible')
    }

    addNewNote(Note) {
        cy.xpath(this.clickOnNotes).click()
        cy.xpath(this.clickOnAddNewNotes).click()
        cy.xpath(this.addNote).type(Note)
        cy.xpath(this.clickOnSave).click()
    }

    verifyNoteIsAdded() {
        cy.xpath("//div[@class='card mb-4']").should('be.visible')
    }

    enterSubjectPropertyforGDS(SubjectPropertyForGDSAndTDS) {
        cy.get(this.subjectProperty).first().type(SubjectPropertyForGDSAndTDS)
        cy.contains(SubjectPropertyForGDSAndTDS).click()
        cy.wait(10000)
        cy.xpath(this.changePropertyBtn).should('be.visible')
        cy.wait(5000)
    }

    enterAnnualTaxAndHeatUnderTaxes() {
        cy.contains("Taxes, utilities, and fees").click()
        cy.xpath("//span[contains(text(),'Use estimate')]").first().click()
        cy.xpath(this.enterAnnualTax).type(this.generateFiveDigitsRandomNumber())
        cy.xpath("//span[contains(text(),'Use estimate')]").last().click()
        cy.wait(3000)
    }

    calculateGDSAndTDSValues() {
        cy.contains("Fees").click()

        //get the value from annual tax
        cy.xpath("//dt[contains(text(),'Annual tax')]//following::dd[1]").then(($text) => {
            const getAnnualTax = $text.text().trim().replace("$", "").replace(",", "").replace(",", "").replace("/yr", "")
            cy.log(getAnnualTax)
            //get the value from Heat
            cy.get(":nth-child(3) > .grid > div > .mb-0").then(($text) => {
                const getHeatValue = $text.text().trim().replace("$", "").replace("/mo", "")
                cy.log(getHeatValue)

                const totalValue = parseInt(getAnnualTax) + parseInt(getHeatValue)
                cy.log(totalValue)


                //get the value from annual income
                cy.xpath("//span[contains(text(),'Annual income')]//following::dd[1]").then(($text) => {
                    const getAnnualIncome = $text.text().trim().replace("$", "").replace(",", "").replace(",", "")
                    cy.log(getAnnualIncome)

                    //calculate GDs and TDS
                    const GDSAndTDSValue = (totalValue / getAnnualIncome) * 100
                    cy.log(GDSAndTDSValue)

                    var roundOffValue = Math.round(GDSAndTDSValue)
                    cy.log(roundOffValue)

                    //Verify GDS value
                    cy.get(".link").then(($text) => $text.text().trim().replace("%", "")).and('contain', roundOffValue)

                    //Verify TDS value
                    cy.get(":nth-child(6) > .card > .card-body > dl.m-0 > :nth-child(3) > .text-15").then(($text) =>
                        $text.text().trim().replace("%", "")).and('contain', roundOffValue)
                })
            })
        })
    }

    verifyShareBtnIsDisabledOrNot() {
        cy.get('[title="Share documents by email"] > .btn')
        .invoke('attr', 'disabled')
        .then(disabled =>{
            disabled ? cy.log('buttonIsDiabled') : cy.get('[title="Share documents by email"] > .btn').click()
        })
    }

    selectAnyOneDocument() {
        cy.xpath("(//input[@type='checkbox'])[2]").click({ force: true})
        cy.wait(5000)
    }

    enterEmailAddress(Email) {
        cy.wait(5000)
        cy.xpath(this.enterEmailAddressUnderShare).type(Email)
    }

    clickOnSendButton() {
        cy.get(':nth-child(2) > .btn-primary').click()
        cy.get('.toast-body').should('be.visible')
    }

    clickOnAddSuggestionIcon() {
        cy.wait(5000)
        cy.get(this.clickOnSuggestDocsIcon).click({ force: true })
        cy.xpath("//div[contains(text(),'5 document requirements added.')]").should('be.visible')
    }

    addSuggestionDocsAfterApplicant() {
        cy.wait(5000)
        cy.get(this.clickOnSuggestDocsIcon).click({ force: true })
        cy.xpath("//div[contains(text(),'10 document requirements added.')]").should('be.visible')
    }

    clickOnApplicationTab() {
        cy.get(this.documentationTab).click()
    }

    clickOnSubmissionTab() {
        cy.get(this.submissionTab).click()
    }

    verifyAllTheClosingPackagesAreDisplayed() {
        cy.xpath("//div[@class='card-header']").should('have.length', 3)
        cy.xpath("//div[@class='card-header']").then(($text) =>
        {
            let totalNumberOfPackeges = `${$text.length}`
            cy.log(totalNumberOfPackeges)

        for (let i = 1; i < totalNumberOfPackeges; i += 1) {
            cy.get("h3[class='text-16 font-600']").then(($text) => {
                const packagename = $text.text().trim()
                cy.log("The packages shown are:-"+ packagename)
            })
        }}
    )}

    verifyUploadFunctionalityForAllTheDocuments() {
        cy.wait(5000)
        cy.get("label[class='custom-file-label']").then(($text) =>
        {
            let totalNumberOfBrowseField = `${$text.length}`
            cy.log(totalNumberOfBrowseField)

        for (let i = 1; i <= totalNumberOfBrowseField; i += 1) {
            cy.wait(5000)
            cy.xpath("(//label[@data-browse='Browse'])"+`[${i}]`).selectFile('cypress/Files/CreditConsent.pdf')
            }
        }
    )}

    clickOnDocsPackageCheckbox() {
        cy.xpath(this.documentPackageCheckbox).click()
    }
}

export default Home_Equity_Loan