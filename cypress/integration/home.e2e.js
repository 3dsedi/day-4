/// <reference types="Cypress" />

const { baseUrl } = require('../shared/baseUrl');

describe('The Index Page', () => {
  beforeEach(() => {
    cy.setCookie('auth.status', 'signedin:joe');
    cy.visit(baseUrl);
  });

  it('should set page title', () => {
    cy.title().should('eq', 'Salt :: Fundamentals');
  });

  it('should display headline', () => {
    cy.get('body > h1').should('have.text', 'Salt :: Fundamentals');
  });

  it('should load quote block', () => {
    cy.get('.quote').should('be.visible');
  });

  it('should greet named visitor', () => {
    cy.get('section > h2').should('have.text', 'Welcome Joe!');
  });
});
