describe('Line rotation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should have a line with the correct properties', () => {
    cy.get('#line')
      .should('have.css', 'position', 'absolute')
      .and('have.css', 'width', '200px')
      .and('have.css', 'height', '2px')
      .and('have.css', 'background-color', 'rgb(0, 0, 0)');
  });

  it('should rotate the line', () => {
    cy.get('#line').then($el => {
      const initialTransform = $el.css('transform');
      cy.wait(500).then(() => {
        const updatedTransform = $el.css('transform');
        expect(updatedTransform).not.to.equal(initialTransform);
      });
    });
  });
});
