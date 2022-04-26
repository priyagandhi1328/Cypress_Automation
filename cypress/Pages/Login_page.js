class Login {

    username = '//input[@type="email"]'
    password = '//input[@type="password"]'
    login_button = "//span[contains(text(),'Log in to Oscar')]"
    demo_user_button = "//div[contains(text(),'Demo User')]"
    logout_button = "//a[contains(text(),'Log out')]"

    enter_username(Username) {
        return cy.xpath(this.username).type(Username)
    }

    enter_password(Password) {
        return cy.xpath(this.password).type(Password)
    }

    click_on_login() {
        return cy.xpath(this.login_button).click()
    }
}

export default Login