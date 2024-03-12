describe('Rock Paper Scissors Game', () => {
  beforeEach(() => {
    cy.visit('https://nicodev711.github.io/CodeSpace-Testing/');
  });
  it('should display the user and computer selection for Rock', () => {
    cy.get('#rock').click();
    cy.get('#user-option').should('contain', 'Rock');
    cy.get('#computer-option').should('not.be.empty');
  });

  it('should display the user and computer selection for Paper', () => {
    cy.get('#paper').click();
    cy.get('#user-option').should('contain', 'Paper');
    cy.get('#computer-option').should('not.be.empty');
  });

  it('should display the user and computer selection for Scissors', () => {
    cy.get('#scissors').click();
    cy.get('#user-option').should('contain', 'Scissors');
    cy.get('#computer-option').should('not.be.empty');
  });

  it('should display the result after the user makes a selection', () => {
    cy.get('#rock').click();
    cy.get('#results').should('not.be.empty');
  });

});