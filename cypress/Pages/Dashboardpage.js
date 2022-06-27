import BaseTest from "./BaseTest"

class Dashboard extends BaseTest {

    dealsCount = '(//div[@class="item-value"])[1]'
    totalDealsCount = '//div[@class="card-body"]'
    countOfBYM = '(//div[@class="item-value"])[2]'
    investmentCount = '(//div[@class="item-value"])[3]'
    renewCount = '(//div[@class="item-value"])[4]'
    mouseOveronFundedDeals1='(//*[@class="apexcharts-bar-area"])[4]'
    mouseOveronFundedDeals2='(//*[@class="apexcharts-bar-area"])[5]'
   totaldeals='(//div[@class="font-700"])[1]'


    verifyCountTotalNumberOfDealsUnderOpportunities() {
        cy.wait(3000)
        cy.xpath(this.dealsCount).invoke("text").then(($text) => {
            const dealCount = $text.trim()
            cy.log(dealCount)
            cy.xpath(this.dealsCount).click()
            cy.xpath(this.totalDealsCount).then(($text) => {
                let totalDeals = `${$text.length}`
                cy.log(totalDeals)

                expect(totalDeals).to.equal(dealCount)

            })
        })
    }

    verifyNumberOfBYM() {
        cy.wait(3000)
        cy.xpath(this.countOfBYM).invoke("text").then(($text) => {
            const countOfBYM = $text.trim()
            cy.log(countOfBYM)
            cy.xpath(this.countOfBYM).click()
            cy.xpath(this.totalDealsCount).then(($text) => {
                let totalDeals = `${$text.length}`
                cy.log(totalDeals)
                expect(totalDeals).to.equal(countOfBYM)
            })
        })
    }

    verifyNumberOfInvestment() {
        cy.wait(3000)
        cy.xpath(this.investmentCount).invoke("text").then(($text) => {
            const investment = $text.trim()
            cy.log(investment)
            cy.xpath(this.investmentCount).click()
            cy.xpath(this.totalDealsCount).then(($text) => {
                let totalDeals = `${$text.length}`
                cy.log(totalDeals)
                expect(totalDeals).to.equal(investment)
            })
        })
    }

    verifyNumberOfRenewdeals() {
        cy.wait(3000)
        cy.xpath(this.renewCount).invoke("text").then(($text) => {
            const renewCount = $text.trim()
            cy.log(renewCount)
            cy.xpath(this.renewCount).click()
            cy.xpath(this.totalDealsCount).then(($text) => {
                let totalDeals = `${$text.length}`
                cy.log(totalDeals)
                expect(totalDeals).to.equal(renewCount)
            })
        })
    }

    verifyCountOfapplicationToFundedDeals() {
        cy.wait(3000)
        cy.get(":nth-child(1) > .dashboard-link > .card > .text-dark > .justify-start > .mt-2 > .item-value > span").then(($text) => {
            const count = $text.text()
            cy.wait(3000)
            cy.log(count)

            cy.get(":nth-child(1) > .dashboard-link > .card > .text-dark > .justify-start").click()
            cy.wait(5000)
            cy.get(".mx-4").then(($text) => {
                const paginationCount = $text.text().replace("Page 1 of", "")
                cy.log(paginationCount)

                for (let i = 1; i <= paginationCount; i++) {
                    var a = 0;
                    cy.get("div[class='mb-5']").then(($text) => {
                        cy.wait(5000)
                        var rowsCount = `${$text.length}`
                        a += parseInt(rowsCount);
                        cy.log(a)
                        cy.wait(5000)
                        cy.xpath("//a[contains(text(),'Next')]").click()
                        cy.wait(3000)

                    })
                }
            })
        })
    }

    verifyFundeddealsInDashboard() {
        cy.wait(10000)
        cy.xpath(this.mouseOveronFundedDeals1).realHover('mouse').invoke("attr", 'val').then(($text) => {
            const dealText = $text
            cy.log(dealText)
            cy.xpath(this.mouseOveronFundedDeals2).realHover('mouse').invoke("attr", 'val').then(($text) => {
                const dealTexts = $text
                cy.log(dealTexts)
                let total = parseInt(dealText) + parseInt(dealTexts)
                cy.log(total)
                cy.xpath(this.totaldeals).invoke("text").then((text) => text.trim().replace("$", "").replace(",", "").replace(",", "")).and('contain', total)
            })
        })
    }

    verifyApprovedfunded(){
        cy.wait(10000)
        cy.xpath(' (//*[@class="apexcharts-series apexcharts-pie-series"])[5]').invoke('show').click({force:true})
    }

}

export default Dashboard