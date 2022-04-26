/// <reference types="cypress" />

import Login from "../Pages/Login_page"

const login = new Login

describe('Login into Oscar', function () {

    beforeEach(function () {
        cy.fixture("login_data").then(function (data) {
            this.data = data;
        })
    })

    it('Login Into Oscar Website', function () {
        cy.visit(this.data.BaseURL)
        login.enter_username(this.data.Email)
        login.enter_password(this.data.Password)
        login.click_on_login()
    })
})