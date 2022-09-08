/// <reference types="Cypress" />

const { baseUrl } = require('../shared/baseUrl');

describe('Not Found', () => {
  beforeEach(() => {
    cy.setCookie('auth.status', 'signedin:joe');
    cy.visit(baseUrl);
  });

  it('should load when resource does not exist', () => {
    cy.visit(`${baseUrl}/im-not-here.html`, { failOnStatusCode: false });
    cy.title().should('eq', 'Not Found');
  });
});
