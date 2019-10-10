/// <reference types = "cypress" />

export default class adminPage{

    checkTitle(expectedTitle){
        const actualTitle = cy.get('.font-weight-bold')
        actualTitle.should('have.text', expectedTitle)
    }
}