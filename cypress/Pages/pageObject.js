class pageObject{

    clickLoginTrigger(){
        const trigger = cy.get('#loginLink')
        trigger.click() 
    }

    fillEmail(username){
        const emailField = cy.get('#Email')
        emailField.type(username)
    }

    fillPassword(Password){
        const passField =  cy.get('#Password') 
        passField.type(Password)
    }

    clickButton(){
        const button = cy.get('.col-12 > .btn')
        button.click()
    }


    login(username, Password){
        //cy.url().should('include','/Account/Login')
        this.clickLoginTrigger()
        this.fillEmail(username)
        this.fillPassword(Password)
        this.clickButton()
    }

    CheckLogin(expectedText){
      const emailHolder =  cy.get('.nav > :nth-child(1) > a')
      emailHolder.should('have.text',expectedText)
 
    }
}

export default pageObject;