/// <reference types = "cypress" />

export default class adminpage{

    checkTitle(expectedTitle){
        const actualTitle = cy.get('.font-weight-bold')
        actualTitle.should('have.text', expectedTitle)
    }
}