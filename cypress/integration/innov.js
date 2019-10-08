/// <reference types = "cypress" />

describe("First Demo Script", () => {
    it('navigates to inno veg site and tries to log in', function(){
        cy.visit('http://innoveg-demo.rsk-bsl.co.uk/en')

        cy.get('#loginLink').click()

        cy.url().should('include','/Account/Login')

        cy.get('#Email').type('prince@rsk-bsl.com')

        cy.get('#Password').type('Prince@123')

        cy.get('#RememberMe').check()

        cy.get('.col-12 > .btn').click()
        //Commit issues 

        //cy.get('Prince@rsk-bsl.com').should('be.visible')
        //cy.get('.nav > :nth-child(1) > a').should('have.value','Prince@rsk-bsl.com')
    })
})