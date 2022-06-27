
import { expect } from "chai";
import BaseTest from "../Pages/BaseTest"

class Callreports extends BaseTest {

    selectOnlyTodayFilter = "select[class='custom-select']"

    clickOnCallreports() {
        cy.contains("Call Reports").click()
        cy.xpath("//h1[contains(text(),'Call Reports')]").should('be.visible')
    }

    selectOnlyTodayFilterAndVerify() {
        cy.get(this.selectOnlyTodayFilter).select("Only today");
        cy.wait(3000)
        cy.get("button[class='btn btn-secondary dropdown-toggle dropdown-toggle-no-caret']").first().click()
        cy.xpath("//output[@class='form-control form-control-sm text-center']").invoke("attr", 'data-selected').then(($text) => {
            const StartDate = $text.trim()
            cy.wait(3000)
            cy.log(StartDate)
            cy.get("button[class='btn btn-secondary dropdown-toggle dropdown-toggle-no-caret']").last().click()
            cy.xpath("//output[@class='form-control form-control-sm text-center']").last().invoke("attr", 'data-selected').then((text) => text.trim()).and('contain', StartDate)
        })

        cy.xpath("//tr//th[7]//following::tr//td[7]").then(($text) => {
            let rowsCount = `${$text.length}`
            cy.log(rowsCount)
            for (let i = 1; i <= rowsCount; i += 1) {
                cy.xpath("(//tr//th[7]//following::tr//td[7])" + `[${i}]`).invoke("text").then(($text) => {
                    const rowsData = $text.trim()
                    cy.log(rowsData)
                })
            }
        })
    }

    selectLastWeekCallsFilterAndVerify() {
        cy.get(this.selectOnlyTodayFilter).select("Last weeks calls");
        cy.wait(3000)
        cy.get("button[class='btn btn-secondary dropdown-toggle dropdown-toggle-no-caret']").first().click()
        cy.xpath("//output[@class='form-control form-control-sm text-center']").invoke("attr", 'data-selected').then(($text) => {
            var StartDate = $text.trim()
            cy.wait(3000)
            cy.log(StartDate)
            cy.get("button[class='btn btn-secondary dropdown-toggle dropdown-toggle-no-caret']").last().click()
            cy.xpath("//output[@class='form-control form-control-sm text-center']").invoke("attr", 'data-selected').then(($text) => {
                var LastDate = $text.trim()
                cy.log(LastDate)

                var day1 = new Date(StartDate);
                var day2 = new Date(LastDate);

                var a = Math.abs(day2 - day1)
                var days = a / (1000 * 3600 * 24)

                cy.log(days)
            })
        })

        // cy.get("tbody>tr>td").then(($el) => {

        //     if(cy.get($el).contains("")) {
        //         return cy.log("No data available")
        //     }
        //     else {
        //         cy.xpath("//tr//th[7]//following::tr//td[7]").then(($text) => {
        //             let rowsCount = `${$text.length}`
        //             cy.log(rowsCount)
        //             for (let i = 1; i <= rowsCount; i += 1) {
        //                 cy.xpath("(//tr//th[7]//following::tr//td[7])" + `[${i}]`).invoke("text").then(($text) => {
        //                     const rowsData = $text.trim()
        //                     cy.log(rowsData)
        //                 })
        //             }
        //         })
        //     }
        // })
    }

    selectLastSevenDaysCallsFilterAndVerify() {
        cy.get(this.selectOnlyTodayFilter).select("Last 7 days");
        cy.wait(3000)
        cy.get("button[class='btn btn-secondary dropdown-toggle dropdown-toggle-no-caret']").first().click()
        cy.xpath("//output[@class='form-control form-control-sm text-center']").invoke("attr", 'data-selected').then(($text) => {
            var StartDate = $text.trim()
            cy.wait(3000)
            cy.log(StartDate)
            cy.get("button[class='btn btn-secondary dropdown-toggle dropdown-toggle-no-caret']").last().click()
            cy.xpath("//output[@class='form-control form-control-sm text-center']").invoke("attr", 'data-selected').then(($text) => {
                var LastDate = $text.trim()
                cy.log(LastDate)

                var day1 = new Date(StartDate);
                var day2 = new Date(LastDate);

                var a = Math.abs(day2 - day1)
                var days = a / (1000 * 3600 * 24)

                cy.log(days)

                expect(days).to.equal(7)
            })
        })

        cy.xpath("//tr//th[7]//following::tr//td[7]").then(($text) => {
            let rowsCount = `${$text.length}`
            cy.log(rowsCount)
            for (let i = 1; i <= rowsCount; i += 1) {
                cy.xpath("(//tr//th[7]//following::tr//td[7])" + `[${i}]`).invoke("text").then(($text) => {
                    const rowsData = $text.trim()
                    cy.log(rowsData)
                })
            }
        })
    }

    selectThisMonthCallsFilterAndVerify() {
        cy.get(this.selectOnlyTodayFilter).select("This month");
        cy.wait(3000)
        cy.get("button[class='btn btn-secondary dropdown-toggle dropdown-toggle-no-caret']").first().click()
        cy.xpath("//output[@class='form-control form-control-sm text-center']").invoke("attr", 'data-selected').then(($text) => {
            var StartDate = $text.trim()
            cy.wait(3000)
            cy.log(StartDate)
            cy.get("button[class='btn btn-secondary dropdown-toggle dropdown-toggle-no-caret']").last().click()
            cy.xpath("//output[@class='form-control form-control-sm text-center']").invoke("attr", 'data-selected').then(($text) => {
                var LastDate = $text.trim()
                cy.log(LastDate)
                var day1 = new Date(StartDate);
                var day2 = new Date(LastDate);
                var a = Math.abs(day2 - day1)
                var days = a / (1000 * 3600 * 24)
                cy.log(days)
                cy.wait(4000)
                expect(days).to.be.within(0,31)
            })
        })

        cy.xpath("//tr//th[7]//following::tr//td[7]").then(($text) => {
            let rowsCount = `${$text.length}`
            cy.log(rowsCount)
            for (let i = 1; i <= rowsCount; i += 1) {
                cy.xpath("(//tr//th[7]//following::tr//td[7])" + `[${i}]`).invoke("text").then(($text) => {
                    const rowsData = $text.trim()
                    cy.log(rowsData)
                })
            }
        })
    }

    selectLastMonthCallsFilterAndVerify() {
        cy.get(this.selectOnlyTodayFilter).select("This month");
        cy.wait(3000)
        cy.get("button[class='btn btn-secondary dropdown-toggle dropdown-toggle-no-caret']").first().click()
        cy.xpath("//output[@class='form-control form-control-sm text-center']").invoke("attr", 'data-selected').then(($text) => {
            var StartDate = $text.trim()
            cy.wait(3000)
            cy.log(StartDate)
            cy.get("button[class='btn btn-secondary dropdown-toggle dropdown-toggle-no-caret']").last().click()
            cy.xpath("//output[@class='form-control form-control-sm text-center']").invoke("attr", 'data-selected').then(($text) => {
                var LastDate = $text.trim()
                cy.log(LastDate)
                var day1 = new Date(StartDate);
                var day2 = new Date(LastDate);
                var a = Math.abs(day2 - day1)
                var days = a / (1000 * 3600 * 24)
                cy.log(days)
                cy.wait(4000)
            })
        })

        cy.xpath("//tr//th[7]//following::tr//td[7]").then(($text) => {
            let rowsCount = `${$text.length}`
            cy.log(rowsCount)
            for (let i = 1; i <= rowsCount; i += 1) {
                cy.xpath("(//tr//th[7]//following::tr//td[7])" + `[${i}]`).invoke("text").then(($text) => {
                    const rowsData = $text.trim()
                    cy.log(rowsData)
                })
            }
        })
    }
}

export default Callreports