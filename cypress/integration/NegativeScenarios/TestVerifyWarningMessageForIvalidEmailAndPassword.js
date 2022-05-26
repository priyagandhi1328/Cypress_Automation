/// <reference types="cypress" />

import Deals from "../../Pages/NegativeScenariosPage"

const deals = new Deals

describe('Test verify warning message for invalid email and password.', function () {

    it('enter invalid email and password and verify warning message', function () {
        deals.enterInvalidEmailAndVerify()
        deals.enterInvalidPasswordAndVerify()
    })
})