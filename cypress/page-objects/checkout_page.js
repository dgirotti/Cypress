/// <reference types="cypress" />

import {
    checkoutPage,
    checkoutTicketsSelector,
} from "/Users/dgirotti/E2E_tests/cypress/selectors/checkout";


export function checkout_modal() {

    // FALTA COMPLETAR CON LAS TJ DE CREDITOS (VALIDA E INVALIDA)

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    cy.get(checkoutPage.actionButton).should(
        'not.have.attr',
        'aria-disabled',
        'true',
    );
    cy.get(checkoutPage.actionButton).click();
    cy.get(checkoutPage.confirmationPage, { timeout: 30000 }).should('be.visible');
}





