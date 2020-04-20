/// <reference types="cypress" />

import listingPageSelectors from "/Users/dgirotti/E2E_tests/cypress/selectors/listing-page";

// NAVIGATE TO EVENTS PAGE
export function swith_to_event_page(){

    cy.wait(2000);
    cy.contains('Switch Event').click();
    cy.url().should('include', '/organizations/events');
    
}