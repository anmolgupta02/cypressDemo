describe('My First Test', function(){
	it('visits to kitchen lab', function(){
		cy.visit('https://example.cypress.io')

		cy.contains('type').click()

		cy.url().should('include', '/commands/actions')

		cy.pause()

		cy.get('.action-email').type('anmol@yopmail.com')

		.should('have.value','anmol@yopmail.com')

	})
})