describe('Complete the Meepo form', () => {
  it('Send form to Meepo with mandatory information', () => {
    cy.completeForm();
  });
});
describe('Form should not be sent if mandatory information is missing', () => {
  it('Mandatory information is missing', () => {
    cy.informationMissing();
  });
});