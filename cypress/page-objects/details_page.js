/// <reference types="cypress" />

import listingPageSelectors from "/Users/dgirotti/E2E_tests/cypress/selectors/listing-page";


// COMPLETE DETAILS PAGE

export function details_page(){

    cy.url().should('include', '/details');
 
    cy.get('.eds-image-uploader')
        .should('exist');
 
    const SUMMARY_TEXT = 'Summary For this event';
 
    cy.get('[data-automation="coyote-design-event-summary-wrapper"]')
        .should('exist')
        .get('#event-design-description')
        .type(SUMMARY_TEXT)
        .contains(SUMMARY_TEXT);
        
    // save form
    cy.get('[data-spec="event-page-action-save"]')
        .contains('Save & Continue')
        .click();
 }
 