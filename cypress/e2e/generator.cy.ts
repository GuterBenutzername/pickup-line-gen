const host = "localhost:3000";

describe('generator', () => {
  it('renders a page', () => {
    cy.visit(host);
  })
})