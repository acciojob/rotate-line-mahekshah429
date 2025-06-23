cy.get('#line')
  .should('have.css', 'position', 'absolute')
  .and('have.css', 'width', '200px')
  .and('have.css', 'height', '2px')
  .and('have.css', 'background-color', 'rgb(0, 0, 0)');

cy.get('#line').then($el => {
  const start = $el.css('transform');
  cy.wait(500).then(() => {
    const after = $el.css('transform');
    expect(after).not.to.equal(start);
  });
});
