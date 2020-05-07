/// <reference types="cypress" />

export function click_on_ticket_button() {


    cy.get('.eds-global-header__quick-link').invoke('removeAttr', 'target').click();
    cy.wait(1000)
    cy.get('.js-embed-ticket-modal-btn ').click();
    cy.wait(10000)
    
    //cy.get('.eds-btn eds-btn--button eds-btn--fill').should('be.visible').click();
    cy.get('[data-automation="eds-modal__primary-button"]').click();
    //cy.contains('Checkout').click();
    cy.wait(1000)
    //cy.contains('Place Order').click();
    //cy.go(back);
}