
declare namespace Cypress {
    interface Chainable {
        completeForm: () => void;
        nextButton: () => void;
        name: () => void;
    }
}

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScWINEF6sSy0W_-TK8fszx7g5vgPQvrTnaL-9Sl5ZXPdjVZXg/viewform';

Cypress.Commands.add('completeForm', () => {
    cy.visit(FORM_URL)
    cy.get('span.NPEfkd.RveJvd.snByac').first().click();
    cy.get('input.whsOnd.zHQkBf').first().type('Johan');
    cy.get('input.whsOnd.zHQkBf').eq(1).type('Moback');
    cy.get('input.whsOnd.zHQkBf').eq(2).dblclick().type('1996-10-10');    
    cy.get(".MocG8c.HZ3kWc.mhLiyf.LMgvRb.DEh1R").click();
    cy.get('span.vRMGwf.oJeWuf').eq(4).should('not.be.visible').click();
    cy.get('span.NPEfkd.RveJvd.snByac').eq(1).click();
    cy.get('input.whsOnd.zHQkBf').eq(0).should('be.visible').type('111111111111');
    cy.get('input.whsOnd.zHQkBf').eq(1).dblclick().type('2023-11-04');
    cy.get('input.whsOnd.zHQkBf').eq(2).type('Testautomatisering');    
    cy.get('span.NPEfkd.RveJvd.snByac').eq(1).click();
    cy.get('input.whsOnd.zHQkBf').eq(0).should('be.visible').type('111111111111');
    cy.get('input.whsOnd.zHQkBf').eq(1).should('be.visible').type('54000');
    cy.get('input.whsOnd.zHQkBf').eq(2).dblclick().type('2023-12-24');
    cy.get('.uHMk6b.fsHoPb').should('be.visible').click();
    cy.get('span.NPEfkd.RveJvd.snByac').eq(1).click();
    
})

Cypress.Commands.add('nextButton', () => {
    cy.get('span.NPEfkd.RveJvd.snByac').click();
})
Cypress.Commands.add('name', () => {
    cy.get('input[type="text"][jsname="YPqjbf"]').click();
})