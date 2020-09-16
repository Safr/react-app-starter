describe('Hello world', () => {
  it('renders main page', () => {
    cy.visit('/');
    cy.findByText(/Main/i).should('be.visible');
  });

  it('navigates to another page', () => {
    cy.visit('/');

    cy.log('Opening the about page');
    cy.findByRole('link', { name: /About/i }).click();

    cy.log('We are on the about page');
    cy.findByRole('heading', { name: /About/i }).should('be.visible');
  });
});
