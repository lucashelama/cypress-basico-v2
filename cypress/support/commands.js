Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Helamã')
    cy.get('#email').type('oaisud@asdu.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
}) 