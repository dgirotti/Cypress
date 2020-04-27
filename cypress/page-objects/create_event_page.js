
/// <reference types="cypress" />

import listingPageSelectors from "/Users/dgirotti/E2E_tests/cypress/selectors/listing-page";

// CLICK ON CREATE BUTTON ON HOME PAGE

export function create_event(){

    cy.wait(2000)
    cy.contains('Create Event').click()
    

}

