/// <reference types="cypress" />

import {
    checkoutPage,
} from "/Users/dgirotti/E2E_tests/cypress/selectors/checkout";


export function checkout_modal() {

    // FALTA COMPLETAR CON LAS TJ DE CREDITOS (VALIDA E INVALIDA)

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    //cy.get('.eds-field-styled__select').first().select('1');//selecciona el primer ticket

    cy.get('.eds-field-styled__select').eq(1).select('1'); //selecciona el 2do ticket

    cy.contains('Checkout').click();

}

export function visa_credit_card_payment(VISA_CARD, CSC, EXPIRATION_DATE, ZIP_CODE) {

    //Completar los datos de la tj 
    /*cy.contains('Credit or Debit Card').click();
    cy.get('[data-automation="credit-card-field"]').type(VISA_CARD)
    cy.get('[data-automation="card-expiration-date-field"]').type(EXPIRATION_DATE)
    cy.get('[data-automation="card-security-code-field"]').type(CSC)
    cy.get('[data-automation="card-postal-code-field"]').type(ZIP_CODE)*/

    cy.get('#credit-card-number').clear().type(VISA_CARD)
    cy.get('#expiration-date').clear().type(EXPIRATION_DATE)
    cy.get('#csc').clear().type(CSC)
    cy.get('#postal-code').clear().type(ZIP_CODE)
}

//Click in Place order button and validate the confirmation msg
    export function place_order_button(){
    cy.get('.eds-btn').click(); // Place order button
    cy.wait(5000)
    cy.get('.eds-show-up-mn > .eds-text-hs').should('contain', 'Thanks for your order!')


}

//Muestra el mensaje de error de la tj
export function credit_card_error() {

    cy.get('.eds-text-color--error').should('contain', "Credit card doesn't match required card type for this ticket");
    cy.get('.eds-btn').should('not.be.enabled') // botton place order deshabilitado. 
}



