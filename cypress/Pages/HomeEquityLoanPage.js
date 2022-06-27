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
    packageSendButton = "#collapselenderDocumentsPackage > :nth-child(3) > .row > .font-15 > [title='Send email'] > .btn"
    applicationTab = ':nth-child(3) > .nav-link'
    propertyValueLTV = '//span[contains(text(),"Property value")]//following::span[3]'
    futureLTV = '//dt[contains(text(),"Future LTV")]//following::dd[1]'
    showApplicants = '//h2[contains(text(),"Applicants")]//following::button[1]'
    applicantName = '//h2[contains(text(),"Applicants")]//following::label[1]'
    property = '//div[@class="text-15 mb-0 font-500"]'
    subjectPropertyText = '(//h2[@class="my-1 text-15"])[4]'
    valuationText = '.card-header > dl.m-0 > .d-flex > .text-15'
    getPropertyValue = '.py-3 > .m-0 > :nth-child(1) > .grid > :nth-child(1) > .mb-0'
    propertyValueText = ':nth-child(4) > .card > .card-body > dl.m-0 > :nth-child(1) > .text-15'
    totalMortgages = ':nth-child(2) > .py-3 > .m-0 > :nth-child(1) > .grid > :nth-child(2) > .mb-0'
    existingMortgages = ':nth-child(4) > .card > .card-body > dl.m-0 > :nth-child(2) > .text-15'
    totalLTV = '.py-3 > .m-0 > :nth-child(1) > .grid > :nth-child(4) > .mb-0'
    currentLTV = ':nth-child(4) > .card > .card-body > dl.m-0 > :nth-child(3) > .text-15'
    selectvaluation = 'span[class="text-14 text-gray-800 align-middle"]'
    loanButtonText = "((//p[@class='text-15 font-600 mb-0 text-lowercase'])[1]//text())[1]"
    clickOnLoan = ' (//button[@class="card my-2 w-100 text-left card-focus-border"])[1]'
    rate = ':nth-child(1) > .card > .card-body > dl.m-0 > :nth-child(5) > .text-15'
    addClosingRateButton = "//button[contains(text(),'Add closing rate')]"
    addClosingrateText = '//div[@class="py-3 px-4 d-flex justify-content-between"]//following::p[1]'
    enterAmountFees = "//label[contains(text(),'Amount')]//following::input[1]"
    appraisal = "//span[contains(text(),'Appraisal')]//following::span[1]"
    brokerfees = "//span[contains(text(),'Broker fee')]//following::span[1]"
    totalFees = "//dt[contains(text(),'Total fees')]//following::dd[1]"
    onHoldBtn = ":nth-child(2) > :nth-child(3) > .btn"
    addReactivationDate = "button[class='btn m-1 btn-outline-primary']"
    bankName = '//h3[@class="text-16 font-600 mb-3"]//following::h6'
    clickOnApplicationTab = "//a[contains(text(),'Application')]"
    clickOnSummary = "//a[contains(text(),'Summary')]"
    existingMortgagesText = '(//div[@class="text-15 flex-grow-1 custom-control custom-checkbox"])'
    clickOnPlusButton = '//div[@class="plus_tab m-1 py-1 px-3"]'
    loanOptionButton = "//button[contains(text(),'Select this option')]"
    clickOnOption2 = '(//div[@class="py-2 px-3"])[2]'
    createOnlineForm = "//span[contains(text(),'Create Online Forms')]"
    submissionType = "(//div[@class='bv-no-focus-ring'])[1]//select//option['Prepayment privilleges'][1]"
    disclosureList = "//h3[contains(text(),'Disclosure')]//following::div[1]//div[@class='card-focus-border']"
    commitmentList = "//h3[contains(text(),'Commitment conditions')]//following::div[1]//div[@class='card-focus-border']"
    specialLoanList = "//h3[contains(text(),'Special loan conditions')]//following::div[1]//div[@class='card-focus-border']"
    submissionTypeButton = "(//div[@class='bv-no-focus-ring'])[1]//select"
    statement = "//label[contains(text(),'Statement')]//following::textarea"
    specialLoanList = "//h3[contains(text(),'Special loan conditions')]//following::div[1]//div[@class='card-focus-border']"
    requestLoanDoneButton = "(//button[contains(text(),'Done')])[1]"

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
        const uuid = () => Cypress._.random(500000, 501500)
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
        cy.wait(5000)
    }

    clickOnEditButton() {
        cy.get(this.editButton).click()
    }

    clickOnDoneButton() {
        cy.get(this.doneButton).last().click()
    }

    clickOnApplicantDoneBtn() {
        cy.xpath(this.clickOnDone).click({force: true})
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
        cy.xpath("//label[contains(text(),'Expiry date')]//following::input[1]").type(this.randomFutureDate())
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
        cy.wait(5000)
    }

    removeDocumentsAndVerify() {
        cy.wait(5000)
        cy.xpath(this.selectAllCheckbox).click({ force: true })
        cy.get(this.deleteIcon).click()
        cy.get(this.removeBtn).click()
    }

    addNewDocument() {
        cy.get(this.documentationTab).click()
        cy.wait(5000)
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
        cy.wait(5000)
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
                    cy.get(":nth-child(6) > .card > .card-body > dl.m-0 > :nth-child(5) > .text-15").then(($text) =>
                        $text.text().trim().replace("%", "")).and('contain', roundOffValue)
                })
            })
        })
    }

    verifyShareBtnIsDisabledOrNot() {
        cy.get('[title="Share documents by email"] > .btn')
            .invoke('attr', 'disabled')
            .then(disabled => {
                disabled ? cy.log('buttonIsDiabled') : cy.get('[title="Share documents by email"] > .btn').click()
            })
    }

    selectAnyOneDocument() {
        cy.xpath("(//input[@type='checkbox'])[2]").click({ force: true })
        cy.wait(5000)
    }

    enterEmailAddress(Email) {
        cy.wait(5000)
        cy.xpath(this.enterEmailAddressUnderShare).type(Email)
    }

    clickOnSendButton() {
        cy.get(':nth-child(2) > .btn-primary').click()
        cy.get('.toast-body').should('be.visible')
        cy.wait(5000)
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
        cy.xpath("//div[@class='card-header']").then(($text) => {
            let totalNumberOfPackeges = `${$text.length}`
            cy.log(totalNumberOfPackeges)

            for (let i = 1; i < totalNumberOfPackeges; i += 1) {
                cy.get("h3[class='text-16 font-600']").then(($text) => {
                    const packagename = $text.text().trim()
                    cy.log("The packages shown are:-" + packagename)
                })
            }
        }
        )
    }

    verifyUploadFunctionalityForAllTheDocuments() {
        cy.wait(5000)
        cy.get("label[class='custom-file-label']").then(($text) => {
            let totalNumberOfBrowseField = `${$text.length}`
            cy.log(totalNumberOfBrowseField)

            for (let i = 1; i <= totalNumberOfBrowseField; i += 1) {
                cy.wait(5000)
                cy.xpath("(//label[@data-browse='Browse'])" + `[${i}]`).selectFile('cypress/Files/CreditConsent.pdf')
            }
        }
        )
    }

    clickOnDocsPackageCheckbox() {
        cy.get("#collapselenderDocumentsPackage > :nth-child(2) > :nth-child(2) > .flex-column > .font-weight-bold > .custom-control").click()
    }

    sendingLenderDocumentPackageAndVerify() {
        cy.get(this.packageSendButton).click()
        cy.get(".multiselect__tags").click()
        cy.xpath("(//div[@class='multiselect__content-wrapper']//li//span//div)[1]").click()
        cy.get('.btn-primary').click()
        cy.get('.toast-body').should('be.visible')
        cy.get('.justify-content-between > :nth-child(2) > .badge').should('be.visible')
        cy.wait(5000)
    }

    verifyUserisAbleToAddRatings() {
        cy.xpath("(//output)[2]//span//span").then(($text) => {
            let totalStarCount = `${$text.length}`
            cy.log(totalStarCount)
            for (let i = 1; i <= totalStarCount; i += 1) {
                cy.xpath("((//output)[2]//span//span)" + `[${i}]`).click({ force: true })
            }
        })
        cy.contains("Add rating").click({ force: true })
        cy.xpath('(//output)[3]').should('have.attr', 'aria-valuenow', '5')
    }

    clickOnApplicationtab(Firstname, Lastname) {
        cy.get(this.applicationTab).click()
        cy.wait(10000)
        cy.xpath(this.propertyValueLTV).invoke("text").then(($text) => {
            const propertyValueLTVText = $text.trim().replace("\n", "").replace("(", "").replace(")", "")
            cy.log(propertyValueLTVText)
            cy.xpath(this.futureLTV).invoke("text").then(($text) => {
                const futureLTVText = $text.trim()
                cy.log(futureLTVText)
                expect(propertyValueLTVText).to.equal(futureLTVText)
            })
        })
        cy.xpath(this.showApplicants).click()
        cy.xpath(this.applicantName).invoke("text").then((text) => text.trim()).and('contain', Firstname)
        cy.xpath(this.applicantName).invoke("text").then((text) => text.trim()).and('contain', Lastname)
    }

    verifySubjectProperty() {
        cy.contains("Intake").click()
        cy.xpath(this.property).invoke("text").then(($text) => {
            const SubjectPropertyText = $text.trim()
            cy.log(SubjectPropertyText)
            cy.get(this.applicationTab).click()
            cy.xpath(this.subjectPropertyText).should("contain.text", SubjectPropertyText)
        })
    }

    verifyPropertyValue() {
        cy.contains("Intake").click()
        cy.get(this.getPropertyValue).invoke("text").then(($text) => {
            const PropertyValue = $text.trim()
            cy.log(PropertyValue)
            cy.get(this.applicationTab).click()
            cy.get(this.propertyValueText).should("contain.text", PropertyValue)
        })
    }

    verifyExistingMortgages() {
        cy.contains("Intake").click()
        cy.get(this.totalMortgages).invoke("text").then(($text) => {
            const TotalMortgages = $text.trim().replace("(", "").replace(")", "")
            cy.log(TotalMortgages)
            cy.get(this.applicationTab).click()
            cy.get(this.existingMortgages).should("contain.text", TotalMortgages)
        })
    }

    verifyCurrentLTV() {
        cy.contains("Intake").click()
        cy.get(this.totalLTV).invoke("text").then(($text) => {
            const TotalLTV = $text.trim().replace("(", "").replace(")", "")
            cy.log(TotalLTV)
            cy.get(this.applicationTab).click()
            cy.wait(5000)
            cy.get(this.currentLTV).should("contain.text", TotalLTV)
        })
    }

    verifyValuationForPurviewAWM() {
        cy.contains("Purview AVM").invoke("text").then(($text) => {
            const valuation = $text.trim().replace("(Select to change)", "")
            cy.log(valuation)
            cy.get(this.applicationTab).click()
            cy.get(this.valuationText).should("contain.text", valuation)
        })
    }

    verifyValuationForApplicationEstimate() {
        cy.contains("Intake").click()
        cy.get(this.selectvaluation).click()
        cy.contains("Applicant estimate").click()
        cy.wait(5000)
        cy.xpath("//span[@class='text-14 text-gray-800 align-middle']").invoke("text").then(($text) => {
            const ApplicantEstimate = $text.trim().replace("(Select to change)", "")
            cy.log(ApplicantEstimate)
            cy.get(this.applicationTab).click()
            cy.get(this.valuationText).should("contain.text", ApplicantEstimate)
        })
    }

    verifyValuationForDesktopAppraisal() {
        cy.contains("Intake").click()
        cy.get(this.selectvaluation).click()
        cy.contains("Desktop appraisal").click()
        cy.wait(5000)
        cy.contains("Desktop appraisal").invoke("text").then(($text) => {
            const DesktopAppraisal = $text.trim().replace("(Select to change)", "")
            cy.log(DesktopAppraisal)
            cy.get(this.applicationTab).click()
            cy.get(this.valuationText).should("contain.text", DesktopAppraisal)
        })
    }

    verifyValuationForPurviewUpper() {
        cy.contains("Intake").click()
        cy.get(this.selectvaluation).click()
        cy.contains("Purview upper").click()
        cy.wait(5000)
        cy.xpath("//span[@class='text-14 text-gray-800 align-middle']").invoke("text").then(($text) => {
            const PurviewUpper = $text.trim().replace("(Select to change)", "")
            cy.log(PurviewUpper)
            cy.get(this.applicationTab).click()
            cy.get(this.valuationText).should("contain.text", PurviewUpper)
        })
    }

    verifyValuationForPurviewLower() {
        cy.contains("Intake").click()
        cy.get(this.selectvaluation).click()
        cy.contains("Purview lower").click()
        cy.wait(5000)
        cy.xpath("//span[@class='text-14 text-gray-800 align-middle']").invoke("text").then(($text) => {
            const PurviewLower = $text.trim().replace("(Select to change)", "")
            cy.log(PurviewLower)
            cy.get(this.applicationTab).click()
            cy.get(this.valuationText).should("contain.text", PurviewLower)
        })
    }

    verifyUserIsAbleToTakeLoan() {
        cy.get(this.applicationTab).click()
        cy.wait(10000)
        cy.xpath(this.loanButtonText).invoke("text").then(($text) => {
            const Interest = $text.trim()
            cy.log(Interest)
            cy.xpath(this.clickOnLoan).click({force: true})
            cy.wait(4000)
            cy.get(this.rate).should("contain.text", Interest)
        })
    }

    verifyUserIsAbleToAddFees() {
        const uuid = () => Cypress._.random(15000, 16000)
        const id = uuid()
        const testname = id

        cy.get(this.applicationTab).click()
        cy.get('[data-v-f680ce5a=""][data-v-488ecbce=""] > .d-flex > .btn').click()
        cy.get('[aria-label="Add Appraisal"]').click()
        cy.xpath(this.enterAmountFees).type(testname)
        cy.contains("Done").click()
        cy.xpath(this.appraisal).invoke("text").then(($text) => {
            const Appraisal = $text.trim().replace(")", "").replace("(", "").replace("$", "").replace(".00", "").replace(",", "")
            cy.log(Appraisal)
            cy.xpath(this.brokerfees).invoke("text").then(($text) => {
                const BrokerFees = $text.trim().replace(")", "").replace("(", "").replace("$", "").replace(".00", "").replace(",", "")
                cy.log(BrokerFees)
                var totalfees = parseFloat(Appraisal) + parseFloat(BrokerFees)
                cy.log(totalfees)
                cy.xpath(this.totalFees).invoke("text").then((text) => text.trim().replace("$", "").replace(",", "")).and('contain', totalfees)
            })
        })
    }

    clickOnDownloadIconUnderSubmission() {
        cy.get("#collapselenderDocumentsPackage > :nth-child(3) > .row > .font-15 > [title='Download documents'] > .btn > .bi-download").click()
        cy.verifyDownload('documents.pdf');
    }

    clickOnOnHoldButton() {
        cy.wait(5000)
        cy.get(this.onHoldBtn).click()
    }

    clickOnAddReactivationDateButton() {
        cy.get(this.addReactivationDate).click()
    }

    selectReactivationDateAndVerify() {
        cy.xpath("//label[contains(text(),'Reactivate on')]//following::input[1]").clear().type(this.randomFutureDate())
        cy.xpath("//button[contains(text(),'Place on hold')]").click({ force: true })
        cy.get('.col-12 > .bg-gray-200').should('be.visible')
    }

    addPrimaryAgent() {
        cy.xpath("//h2[contains(text(),'Agents')]//following::div[@class='multiselect__tags'][1]").click()
        cy.xpath("(//li//span[contains(text(),'San Yun Han')])[1]").click()
        cy.wait(2000)
    }

    verifyUserIsAbleToSeeExistingLoans() {
        cy.xpath(this.clickOnSummary).click()
        cy.xpath(this.bankName).then(($text) => {
            let Bankname = `${$text.length}`
            cy.log(Bankname)
            for (let i = 1; i <= Bankname; i += 1) {
                cy.xpath(this.bankName + `[${i}]`).then(($text) => {
                    const BanknameText = $text.text().trim()
                    cy.log(BanknameText)
                })
            }
            cy.xpath(this.clickOnApplicationTab).click()
            cy.xpath(this.existingMortgagesText).then(($text) => {
                let ExistingMortgages = `${$text.length}`
                cy.log(ExistingMortgages)
                for (let i = 1; i <= ExistingMortgages; i += 1) {
                    cy.xpath(this.existingMortgagesText + `[${i}]`).then(($text) => {
                        const ExistingMortgagesText = $text.text().trim()
                        cy.log(ExistingMortgagesText)
                    })
                }
                expect(ExistingMortgages).to.equal(Bankname)
            })
        })
    }

    verifyUserIsAbleToCreateMultipleLoans() {
        cy.get(this.applicationTab).click()
        cy.xpath(this.clickOnPlusButton).click()
        cy.wait(5000)
        cy.xpath(this.clickOnOption2).click()
        cy.contains("Select this option").should('be.visible')
        cy.wait(6000)
        cy.xpath(this.clickOnLoan).click()
        cy.wait(3000)
        cy.xpath(this.loanOptionButton).click({force: true})
        cy.wait(5000)
        cy.contains("Selected option").should('be.visible')
    }

    clickOnCreateOnlineFormBtnAndVerify() {
        cy.get(this.createOnlineForm).click()
        cy.get("a[class='list-group-item d-flex justify-content-between align-items-center list-group-item-action']").then(($text) => {
            let onlineForm = `${$text.length}`
            cy.log(onlineForm)
            for (let i = 1; i <= onlineForm; i += 1) {
                cy.get("a[class='list-group-item d-flex justify-content-between align-items-center list-group-item-action']" + `[${i}]`).then(($text) => {
                    const onlineFormText = $text.text().trim()
                    cy.log(onlineFormText)
                })
            }
        })
    }

    verifyUserIsAbleToAddDisclosure(Disclosure) {
        cy.get(":nth-child(6) > .nav-link").click();
        cy.get(".py-5 > .d-flex > .btn").click();
        cy.wait(5000)
        cy.xpath(this.disclosureList).then(($text) => {
            let totalNumberOfBrowseField = `${$text.length}`
            cy.log(totalNumberOfBrowseField)
            cy.contains("Add a disclosure").click();
            cy.xpath(this.statement).type(Disclosure);
            cy.get(".btn-primary").click();
            cy.wait(5000)
            cy.xpath(this.disclosureList).then(($text) => {
                let a = `${$text.length}`
                cy.log(a)
                expect(totalNumberOfBrowseField).to.not.equal(a)
            })
        })
    }

    verifyUserIsAbleToAddCommitmentConditions(Commitment) {
        cy.get(":nth-child(6) > .nav-link").click();
        cy.get(".py-5 > .d-flex > .btn").click();
        cy.wait(5000)
        cy.xpath(this.commitmentList).then(($text) => {
            let totalCommitmentConditions = `${$text.length}`
            cy.log(totalCommitmentConditions)
            cy.contains("Add a commitment condition").click();
            cy.xpath(this.submissionTypeButton).select("REQUIRED_PRIOR_TO_CLOSE");
            cy.get("textarea").click().type(Commitment);
            cy.get(".btn-primary").click();
            cy.wait(5000)
            cy.xpath(this.commitmentList).then(($text) => {
                let a = `${$text.length}`
                cy.log(a)
                expect(totalCommitmentConditions).to.not.equal(a)
            })
        })
    }

    verifyUserIsAbleToAddSpecialLoanConditions(SpecialLoan) {
        cy.get(":nth-child(6) > .nav-link").click();
        cy.get(".py-5 > .d-flex > .btn").click();
        cy.wait(5000)
        cy.xpath(this.specialLoanList).then(($text) => {
            let totalSpecialConditions = `${$text.length}`
            cy.log(totalSpecialConditions)
            cy.contains("Add a special condition").click();
            cy.xpath(this.submissionTypeButton).select("OTHER_CONDITION");
            cy.get("textarea").click().type(SpecialLoan);
            cy.get(".btn-primary").click();
            cy.wait(5000)
            cy.xpath(this.specialLoanList).then(($text) => {
                let a = `${$text.length}`
                cy.log(a)
                expect(totalSpecialConditions).to.not.equal(a)
            })
        })
    }

    clickOnRequestLoanDoneBtn(){
        cy.xpath(this.requestLoanDoneButton).click()
    }

    verifyUserIsAbleToSeeExistingLoansForPurchase() {
        cy.xpath(this.clickOnSummary).click()
        cy.xpath(this.bankName).then(($text) => {
            let Bankname = `${$text.length}`
            cy.log(Bankname)
            for (let i = 1; i <= Bankname; i += 1) {
                cy.xpath(this.bankName + `[${i}]`).then(($text) => {
                    const BanknameText = $text.text().trim()
                    cy.log(BanknameText)
                })
            }
        })
    }
}

export default Home_Equity_Loan