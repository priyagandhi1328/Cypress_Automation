import BaseTest from "../Pages/BaseTest"

class Opportunities extends BaseTest {

    opportunities = ".mt-2 > .nav-link"
    dropdown = "select[class='custom-select']"

    clickOnOpportunities() {
        cy.get(this.opportunities).click()
        cy.get(".pt-2").should('be.visible')
    }

    applyFilterForMonthlyPaymentSavingsandVerify() {
        cy.get(".py-3 > .btn").click()
        cy.wait(5000)
        cy.get(".card-body").then(($text) => {
            let totalNumberOfDeals = `${$text.length}`
            cy.log(totalNumberOfDeals)

            let data = []
            cy.xpath("(//dt[contains(text(),'Monthly payment savings')]//following::dd[1])")
            .each(($el) => {
                data.push(Math.floor($el.text().replace("$","").replace(",",""))) 
              cy.log($el.text())
              expect(data).to.be.sorted({descending:true})
              cy.log(data)
            })
    })}

    applyLowestSortingFilterForMonthlyPaymentSavingsandVerify() {
      cy.get(".card-body").then(($text) => {
          let totalNumberOfDeals = `${$text.length}`
          cy.log(totalNumberOfDeals)

          let data = []
          cy.xpath("(//dt[contains(text(),'Monthly payment savings')]//following::dd[1])")
          .each(($el) => {
              data.push(Math.floor($el.text().replace("$","").replace(",",""))) 
            cy.log($el.text())
            expect(data).to.be.sorted({ascending:true})
            cy.log(data)
          })
  })}

  //   applyFilterForMonthlyPaymentSavingsandVerify() {
  //     cy.get(".py-3 > .btn").click()
  //     cy.wait(5000)
  //     cy.xpath("(//dt[contains(text(),'Monthly payment savings')]//following::dd[1])")
  //     .then(($prices) =>
  //       Cypress._.map($prices, (el) => el.innerText),
  //     )
  //     // because cy.log returns nothing, the original list continues
  //     .then((list) => cy.log(list.slice(0, 12).join(', ')))
  //     // only the first word is the price
  //     .then((list) => list.map((text) => text.split(' ')[0]))
  //     // .then((list) => list.map((str) => str.replace(/[^0-9.]/g, '')))
  //     .then((list) => cy.log(list.slice(0, 12).join(', ')))
  //     .then((list) => list.map(parseFloat))
  //     .then((list) => cy.log(list.slice(0, 12).join(', ')))
  //     .then((list) => {
  //       // confirm the list is sorted by sorting it using Lodash
  //       // and comparing the original and sorted lists
  //       const sorted = Cypress._.sortBy(list)
  //       expect(sorted).to.deep.equal(list)
  // })}

    applyFilterForRemainingBalanceSavingsandVerify() {
        cy.get(this.dropdown).select("Remaining balance savings")
        cy.get(".py-3 > .btn").click()
        cy.wait(5000)
        cy.get(".card-body").then(($text) => {
            let totalNumberOfDeals = `${$text.length}`
            cy.log(totalNumberOfDeals)

            let data = []
            cy.xpath("(//dt[contains(text(),'Remaining balance savings')]//following::dd[1])")
            .each(($el) => {
            data.push(Math.floor($el.text().replace("$","").replace(",",""))) 
              cy.log($el.text())
              expect(data).to.be.sorted({descending:true})
              cy.log(data)
          })
    })}

    applyLowestSortingFilterForRemainingBalanceSavingsandVerify() {
      cy.get(this.dropdown).select("Remaining balance savings")
      cy.wait(5000)
      cy.get(".card-body").then(($text) => {
          let totalNumberOfDeals = `${$text.length}`
          cy.log(totalNumberOfDeals)

          let data = []
          cy.xpath("(//dt[contains(text(),'Remaining balance savings')]//following::dd[1])")
          .each(($el) => {
          data.push(Math.floor($el.text().replace("$","").replace(",",""))) 
            cy.log($el.text())
            expect(data).to.be.sorted({ascending:true})
            cy.log(data)
          })
  })}

    applyFilterForEquityAccessandVerify() {
        cy.get(this.dropdown).select("Equity access")
        cy.get(".py-3 > .btn").click()
        cy.wait(5000)
        cy.get(".card-body").then(($text) => {
            let totalNumberOfDeals = `${$text.length}`
            cy.log(totalNumberOfDeals)

            let data = []
            cy.xpath("(//dt[contains(text(),'Equity Access')]//following::dd[1])")
            .each(($el) => {
            data.push(Math.floor($el.text().replace("$","").replace(",",""))) 
              cy.log($el.text())
              expect(data).to.be.sorted({descending:true})
              cy.log(data)
            })
    })}

    applyLowestSortingFilterForEquityAccessandVerify() {
      cy.get(this.dropdown).select("Equity access")
      cy.wait(5000)
      cy.get(".card-body").then(($text) => {
          let totalNumberOfDeals = `${$text.length}`
          cy.log(totalNumberOfDeals)

          let data = []
          cy.xpath("(//dt[contains(text(),'Equity Access')]//following::dd[1])")
          .each(($el) => {
          data.push(Math.floor($el.text().replace("$","").replace(",",""))) 
            cy.log($el.text())
            expect(data).to.be.sorted({ascending:true})
            cy.log(data)
          })
  })}

    applyFilterForRenewalDateandVerify() {
        cy.get(this.dropdown).select("Renewal date")
        cy.wait(5000)
        cy.get(".card-body").then(($text) => {
            let totalNumberOfDeals = `${$text.length}`
            cy.log(totalNumberOfDeals)

            let data = []
            cy.get(".align-content-center > .text-right")
            .each(($el) => {
            data.push($el.text().replace("Generated on",""))
              cy.log($el.text().replace("Generated on",""))
        })
    })}
}

export default Opportunities