/// <reference types="Cypress" />

const { baseUrl } = require('../shared/baseUrl');

describe('Login page', () => {
  it('should load login page', () => {
    cy.visit(`${baseUrl}/login.html`).title().should('eq', '</salt> :: Login');
  });

  it('should notify user on unsuccessful logins', () => {
    cy.visit(`${baseUrl}/login.html`);
    cy.get('input[type=text]').type('joe');
    cy.get('input[type=password]').type('invalid-password');
    cy.get('#sign-in>button').click();
    cy.url().should('eq', `${baseUrl}/401.html`);
  });

  it('should load welcome page after successful authentication', () => {
    cy.visit(`${baseUrl}/login.html`);
    cy.get('input[type=text]').type('joe');
    cy.get('input[type=password]').type('secret');
    cy.get('#sign-in>button').click();
    cy.url().should('eq', `${baseUrl}/`);
  });
});
