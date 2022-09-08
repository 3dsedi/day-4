/// <reference types="Cypress" />

const { baseUrl } = require('../shared/baseUrl');

describe('The Players page', () => {
  const url = `${baseUrl}/players.html`;

  beforeEach(() => {
    cy.setCookie('auth.status', 'signedin:joe');
    cy.visit(url);
  });

  it('should set page title', () => {
    cy.title().should('eq', 'Players');
  });

  it('should populate players list', () => {
    cy.get('#players-list > ul').should('be.visible');
  });

  it('should open player details', () => {
    cy.get('#players-list > ul > li').should('be.visible');
    cy.get('#players-list > ul > :nth-child(1) > button').click();
    cy.get('#player > p').should('be.visible');
  });
});
