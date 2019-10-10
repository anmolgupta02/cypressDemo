/// <reference types = "cypress" />

class pageObject {
    navigation() {
        cy.visit('http://innoveg-demo.rsk-bsl.co.uk/en')

    }

    clickLoginTrigger() {
        const trigger = cy.get('#loginLink')
        trigger.click()
    }

    fillEmail(username) {
        const emailField = cy.get('#Email')
        emailField.type(username)
    }

    fillPassword(Password) {
        const passField = cy.get('#Password')
        passField.type(Password)
    }

    clickButton() {
        const button = cy.get('.col-12 > .btn')
        button.click()
    }


    login(username, Password) {
        //cy.url().should('include','/Account/Login')
        this.clickLoginTrigger()
        this.fillEmail(username)
        this.fillPassword(Password)
        this.clickButton()
    }

    CheckLogin(expectedText) {
        const emailHolder = cy.get('.nav > :nth-child(1) > a')
        emailHolder.should('have.text', expectedText)

    }

    // getValue(){
    // //     var excel=new ActiveXObject("Excel.Application"); excel.Workbooks.Open("my.xls");
    // //      excel.workbooks.open("my.xls");
    // //     var data = excel_sheet.cells(0,0).value; //x,y consider the coordinate of row and column or the data 
    // //     return data;
    // }

    clickProfileDD() {

        let profileIcon = cy.get('#profileDropdown')
        profileIcon.click()
    }

    clickAdminSetting() {
        const adminSettingTrigger = cy.get('[href="/en/Admin"]')
        adminSettingTrigger.click()

    }

    NavigateToAdminSettings() {
        this.clickProfileDD()
        this.clickAdminSetting()
    }
}

export default pageObject